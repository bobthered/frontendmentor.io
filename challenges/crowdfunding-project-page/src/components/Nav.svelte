<script>
  // components
  import Container from './Container.svelte';

  // props
  let links = ['About', 'Discover', 'Get Started'];
  export let show = false;
</script>

<div class="absolute top-[6rem] left-0 w-full transition duration-200 transform font-semibold {show?'opacity-100 pointer-events-auto translate-y-0':'opacity-0 pointer-events-none translate-y-[-1rem]'} lg:opacity-100 lg:pointer-events-auto lg:relative lg:top-auto lg:w-auto lg:text-white lg:font-normal lg:translate-y-0">
  <div class="w-full px-[1.5rem] lg:px-0">
    <div class="rounded bg-white flex flex-col shadow-xl divide-y divide-gray-200 lg:bg-transparent lg:flex-row lg:divide-y-0 lg:shadow-none lg:items-center">
      {#each links as title}
        <a href="#" on:click|preventDefault class="w-full p-[1.5rem] whitespace-nowrap lg:text-[.875rem]">{title}</a>
      {/each}
    </div>
  </div>
</div>