<script>
  // _imports
  import { slide } from 'svelte/transition';

  // components
  import Button from "./Button.svelte";
  import Container from "./Container.svelte";
  import Input from "./Input.svelte";

  // handlers
  const submitHandler = () => {}

  // props ( external )
  export let getStats;
  export let init;
  export let ipAddress;

  // props ( dynamic )
  $: padding = init ? 'pt-[20px] pb-[156px] lg:pt-[24px] lg:pb-[126px]' : 'py-[20px] lg:py-[24px]'
</script>

<header
  class="flex w-full top-0 left-0 relative {padding}">
  <img alt="Header Background" src="./pattern-bg.png" class="absolute top-0 left-0 w-full h-full -z-1 object-cover" />
  <Container>
    <div class="flex flex-col items-center justify-center">
      <div class="text-[26px] text-white text-center font-medium lg:text-[31.5px]">IP Address Tracker</div>
      {#if init}
        <form transition:slide on:submit|preventDefault={getStats} class="mt-[25px] rounded-xl flex flex-grow lg:mt-[23px]">
          <Input placeholder="Search for any IP address or domain" rounded="rounded-tl-xl rounded-bl-xl" width="w-full lg:w-[492px]" bind:value={ipAddress} />
          <Button rounded="rounded-tr-xl rounded-br-xl" type="submit"><img alt="Arrow" src="./icon-arrow.svg" class="w-[15px]" /></Button>
        </form>
      {/if}
    </div>
  </Container>
</header>
