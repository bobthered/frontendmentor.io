<script>
  // import
  import { browser } from '$app/env';
  import { slide } from 'svelte/transition';

  // component
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';

  // handlers
  const copyHandler = i => {
    const input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = $urls[i].short;
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    $urls[i].copied = true;
    setTimeout(() => {
      $urls[i].copied = false;
    },1000 );
  }
  const submitHandler = async () => {
    error = false;
    if ( value === '' ) error = true;
    if ( value !== '' && disabled !== true ) {
      disabled = true;
      try {
        const url = value.replace(/http?s?:?\/\//g, '');
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const data = await response.json();
        $urls = [{ original: data.result.original_link, short: data.result.full_short_link, copied:false}, ...$urls];
        if ( $urls.length > 4 ) $urls = [...$urls.slice(0,-1)]
        value = '';
      } catch (error) {
        console.log(error)
      }
      disabled = false;
    }
  }

  // props ( internal )
  let disabled = false;
  let error = false;
  let value = '';

  // props ( dynamic )
  $: inputClasses = disabled ? 'bg-gray-300 text-gray-800' : 
                    error ? 'bg-white ring-offset-1 ring-offset-red placeholder-red placeholder-opacity-50': 'bg-white';

  // stores
  import urls from '../stores/urls';
</script>

<form on:submit|preventDefault={submitHandler} class="mt-[-250px] relative flex flex-col rounded-lg p-[24px] overflow-hidden lg:py-[51px] lg:px-[64px] lg:mt-[-80px]">
  <div class="absolute top-0 left-0 w-full h-full bg-violet">
    <img alt="Shorten BG" src="./bg-shorten-mobile.svg" class="absolute top-0 right-0 lg:hidden" />
    <img alt="Shorten BG" src="./bg-shorten-desktop.svg" class="absolute top-0 right-0 hidden lg:block" />
  </div>
  <div class="flex flex-col space-y-[1rem] lg:flex-row z-10 lg:space-y-0 lg:space-x-[1rem] lg:items-start">
    <div class="flex flex-col flex-grow space-y-[4px]">
      <input on:click={()=>error = false} {disabled} bind:value type="text" class="rounded px-[20px] py-[10px] transition duration-200 outline-none ring ring-white ring-opacity-0 focus:ring-opacity-30 {inputClasses} lg:flex-grow" placeholder="Shorten a link here..." />
      {#if error}
        <div transition:slide class="text-red italic text-[14px]">Please add a link</div>
      {/if}
    </div>
    <Button rounded="rounded" type="submit">Shorten It!</Button>
  </div>
</form>
{#if browser}
  <div class="flex flex-col max-h-[540px] overflow-hidden lg:max-h-[267px]">
    {#each $urls as {original, short, copied}, i}
      <div transition:slide class="flex flex-col rounded mt-[18px] bg-white lg:flex-row lg:items-center">
        <div class="p-[12px] truncate lg:flex-grow">{original}</div>
        <div class="w-full h-[1px] bg-gray-300 lg:hidden"></div>
        <div class="p-[12px] flex flex-col space-y-[12px] lg:flex-row lg:space-y-0 lg:space-x-[12px] lg:items-center">
          <div class="text-cyan lg:text-right">{short}</div>
          <Button on:click={()=>copyHandler(i)} rounded="rounded" theme={copied?'violet':'default'}>{copied?'Copied!':'Copy'}</Button>
        </div> 
      </div>
    {/each}
  </div>
{/if}