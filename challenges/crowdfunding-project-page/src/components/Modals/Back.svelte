<script>
  // components
  import Card from '../Card.svelte';
  import Container from '../Container.svelte';
  import { X } from '../Icons';
  import Tier from './Tier.svelte';

  // data
  import tiers from '../../data/tiers.js';

  // handlers
  const hideModal = () => $show = false;

  // props
  $: containerClasses = $show ? 'opacity-100 pointer-events-none' : 'opacity-0 pointer-events-none';

  // stores
  import backer from './BackBackerStore.js';
  import show from './BackStore.js';
  import thanksShow from './ThanksStore.js';
</script>

<div on:click={hideModal} class="fixed top-0 left-0 w-screen h-screen max-h-screen transition duration-200 bg-black {$show?'bg-opacity-70 pointer-events-auto':'bg-opacity-0 pointer-events-none'}"></div>
<div class="fixed top-0 left-0 w-screen h-screen transition duration-200 z-30 py-[1.5rem] flex justify-center {containerClasses}">
  <Container class="flex justify-center">
    <form class="rounded flex flex-col bg-white p-[1.5rem] space-y-[1rem] max-h-full overflow-y-auto {$show?'pointer-events-auto':'pointer-events-none'} lg:max-w-[700px]">
      <div class="flex justify-between items-center">
        <div class="text-[1.125rem] font-bold">Back this project</div>
        <a href="#" on:click|preventDefault={hideModal} class="opacity-40">
          <X class="w-[1.25rem]"/>
        </a>
      </div>
      <div class="text-gray-600 text-[.875rem]">Want to support us in bringing Mastercraft Bamboo Monitor Risor out in the world?</div>
      <Tier on:click={()=>{$thanksShow=true;$show=false}} bind:backer={$backer} title="Pledge with no reward" description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email." />
      {#each tiers as {title, subtitle, description, left, min}}
        <Tier bind:backer={$backer} {title} {subtitle} {description} {left} {min} disabled={left<=0} />
      {/each}
    </form>
  </Container>
</div>