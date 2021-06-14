<script>
  // _imports
  import { slide } from 'svelte/transition';

  // components
  import { ChevronDown } from './Icons';

  // props ( external )
  export let containerClasses = 'border-gray border-opacity-30 border-b-[1px]';
  export let descriptionClasses = 'text-gray leading-[30px] py-[18px]';
  export let handleClasses = 'py-[21px] lg:py-[20px]';
  export let items;
</script>

{#each items as {title, description, visible}}
  <div class="flex flex-col {containerClasses}">
    <div on:click={()=>visible = !visible} class="flex justify-between items-center cursor-pointer {handleClasses}">
      <div>{title}</div>
      <ChevronDown class="transform transition duration-200 {visible?'rotate-180 text-red':'rotate-0 text-blue'}" />
    </div>
    {#if visible}
      <div transition:slide class={descriptionClasses}>{description}</div>
    {/if}
  </div>
{/each}