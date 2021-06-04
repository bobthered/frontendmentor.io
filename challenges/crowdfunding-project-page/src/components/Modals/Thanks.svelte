<script>
  // components
  import Button from '../Button.svelte';
  import Container from '../Container.svelte';
  import { Check } from '../Icons';

  // handlers
  const hideModal = e => {
    e.preventDefault();
    $show = false;
  }

  // props
  let backer;
  $: containerClasses = $show ? 'opacity-100 pointer-events-none' : 'opacity-0 pointer-events-none';

  // stores
  import show from './ThanksStore.js';
</script>

<div on:click={hideModal} class="fixed top-0 left-0 w-screen h-screen max-h-screen transition duration-200 bg-black {$show?'bg-opacity-70 pointer-events-auto':'bg-opacity-0 pointer-events-none'}"></div>
<div class="fixed top-0 left-0 w-screen h-screen transition duration-200 z-30 py-[1.5rem] flex justify-center {containerClasses}">
  <Container class="flex justify-center items-center">
    <div class="rounded flex flex-col bg-white p-[1.5rem] space-y-[1rem] max-h-full w-full items-center overflow-y-auto {$show?'pointer-events-auto':'pointer-events-none'} lg:max-w-[450px] lg:p-[2rem]">
      <div class="bg-cyan p-[1.25rem] rounded-full text-white">
        <Check class="w-[1.75rem] h-[1.75rem]" />
      </div>
      <div class="text-center font-bold">Thanks for your support!</div>
      <div class="text-center text-gray-600 text-[.875rem]">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</div>
      <Button on:click={hideModal}>Got It!</Button>
    </div>
  </Container>
</div>