<script>
  // _imports
  import { base } from '$app/paths';
  import routes from '../../data/routes';

  // components
  import Button from '../Button.svelte';
  import Hamburger from './Hamburger.svelte';
  import Overlay from './Overlay.svelte';

  // handlers
  const toggleMenu = () => show = !show;

  // props ( external )
  export let show = false;

  // props ( internal )
  const transitionDelay = 100;
</script>

<Hamburger bind:show {toggleMenu} />
<Overlay bind:show {toggleMenu} />

<div class="absolute w-screen top-[96px] left-[50%] transform translate-x-[-50%] z-30 px-[1.5rem] transition duration-200 pointer-events-none {show?'opacity-100':'opacity-0'} lg:opacity-100 lg:relative lg:w-auto lg:top-auto lg:left-auto lg:p-0 lg:translate-x-0 lg:flex-grow">
  <div class="rounded-lg relative shadow-xl flex flex-col transform transition duration-200 justify-center bg-opacity-100 bg-violet font-bold text-white text-[18px] py-[36px] px-[24px] space-y-[20px] {show?'translate-y-0 pointer-events-auto':'translate-y-[-1rem] pointer-events-none'} lg:flex-row lg:bg-transparent lg:shadow-none lg:items-center lg:text-[18px] lg:pointer-events-auto lg:translate-y-0 lg:p-0 lg:text-white lg:space-y-0">
    {#each routes.filter(route=>route.nav) as {title}, i}
      <a rel="external" on:click|preventDefault={toggleMenu} href="{base}/{title.toLowerCase()}" class="rounded-full py-[6px] w-full transform transition duration-200 text-center py-[10px] bg-white bg-opacity-0 hover:bg-opacity-30 {show?'translate-x-0 opacity-100':'translate-x-[-1rem] opacity-0'} lg:opacity-100 lg:translate-x-0 lg:px-[15.5px] lg:translate-x-0 lg:text-gray-400 lg:hover:text-gray-900 lg:w-auto lg:text-[15px]" style="transition-delay:{(i*transitionDelay)+200}ms">{title}</a>
    {/each}
    <div class="w-full bg-white bg-opacity-10 h-[1px]"></div>
    <div class="flex flex-col space-y-[1rem] lg:flex-row lg:space-y-0 lg:space-x-[0rem]">
      <Button class="transform transition duration-200 ring-white {show?'translate-x-0 opacity-100':'translate-x-[-1rem] opacity-0'} lg:opacity-100 lg:translate-x-0 lg:text-gray-400 lg:ring-gray-900 lg:ring-opacity-0 lg:focus:ring-opacity-30 lg:text-[15.5px]" style="transition-delay:{(routes.length*transitionDelay)+200}ms" on:click={toggleMenu} href="{base}/login" theme="transparent">Login</Button>
      <Button class="transform transition duration-200 {show?'translate-x-0 opacity-100':'translate-x-[-1rem] opacity-0'} lg:opacity-100 lg:translate-x-0 lg:text-[15.5px]" style="transition-delay:{((routes.length+1)*transitionDelay)+200}ms" on:click={toggleMenu} href="{base}/signup">Sign Up</Button>
    </div>
  </div>
</div>