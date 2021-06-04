<script>
  // components
  import Button from '../Button.svelte';
  import Card from '../Card.svelte';

  // handler
  const continueHandler = e => {
    e.preventDefault();
    $thanksShow=true;
    $show=false
  }

  // props
  export let backer;
  export let title;
  export let subtitle;
  export let description;
  export let left;
  export let min;
  export let disabled = false;
  $: disabledAttribute = disabled ? 'disabled' : ''
  $: labelClass = disabled ? 'cursor-default' : 'cursor-pointer';

  // stores
  import show from './BackStore.js';
  import thanksShow from './ThanksStore.js';
</script>

<label on:click class="{labelClass}">
  <input type="radio" bind:group={backer} value={title} class="absolute w-0 h-0 opacity-0" disabled={disabledAttribute} />
  <Card class="flex flex-col space-y-[1.5rem] {disabled?'opacity-50':''}" padding="p-[1.7rem] lg:p-[2rem]" border={backer===title?'border-cyan':'border-gray-200'}>
    <div class="flex space-x-[1rem] items-center w-full">
      <div class="p-[.25rem] border border-gray-200 rounded-full">
        <div class="w-[1rem] h-[1rem] bg-cyan rounded-full transition duration-200 transform {backer===title?'scale-[1]':'scale-[0]'}"></div>
      </div>
      <div class="flex flex-col lg:flex-row justify-between w-full">
        <div class="flex flex-col text-[.875rem] lg:flex-row space-x-[1rem]">
          <div class="font-bold">{title}</div>
          {#if subtitle}
            <div class="font-semibold text-cyan">{subtitle}</div>
          {/if}
        </div>
        {#if left}
          <div class="hidden lg:flex space-x-[.5rem] items-center">
            <div class="text-[1rem] font-bold">{left}</div>
            <div class="text-gray-500">left</div>
          </div>
        {/if}
      </div>
    </div>
    <div class="text-gray-600 text-[.875rem]">{description}</div>
    {#if left}
      <div class="flex space-x-[1rem] items-center w-full lg:hidden">
        <div class="text-[2rem] font-bold">{left}</div>
        <div class="text-gray-500">left</div>
      </div>
    {/if}
    {#if backer===title && left}
    <div class="w-full h-px bg-gray-200"></div>
    <div class="flex flex-col space-y-[1.5rem] items-center w-full lg:flex-row lg:space-y-0 lg:justify-between">
      <div class="text-[.875rem] text-gray-600 whitespace-nowrap">Enter your pledge</div>
      <div class="flex w-full space-x-[1rem] lg:w-auto">
        <div class="relative flex-grow lg:flex-grow-0">
          <input type="number" bind:value={min} class="rounded-full p-[.75rem] pl-[2rem] transition font-bold duration-200 outline-none ring ring-gray-200 ring-opacity-0 border border-gray-200 w-full focus:ring-opacity-20 lg:w-[8rem]" />
          <div class="font-bold text-gray-200 absolute top-1/2 transform -translate-y-1/2 left-[1rem]">$</div>
        </div>
        <Button on:click={continueHandler} class="flex-grow lg:flex-grow-0">Continue</Button>
      </div>
    </div>
    {/if}
  </Card>
</label>