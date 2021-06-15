<script>
  // _imports
  import links from '../data/links';

  // components
  import Button from './Button.svelte';
  import { Triangle } from './Icons';

  // handlers
  const toggleMenu = () => show = !show;

  // props ( external )
  export let show = false;

  // props ( internal )
  const transitionDelay = 100;
</script>

<div on:click={toggleMenu} class="relative cursor-pointer w-[24px] h-[24px] lg:hidden">
  <div class="absolute w-full h-[2px] bg-white transform transition duration-200 top-1/2 left-0 {show?'-translate-y-1/2 rotate-45':'translate-y-[-9px] rotate-0'}"></div>
  <div class="absolute w-full h-[2px] bg-white transform transition duration-200 top-1/2 left-0 -translate-y-1/2 {show?'opacity-0':'opacity-100'}"></div>
  <div class="absolute w-full h-[2px] bg-white transform transition duration-200 top-1/2 left-0 {show?'-translate-y-1/2 -rotate-45':'translate-y-[7px] rotate-0'}"></div>
</div>

<div on:click={toggleMenu} class="fixed top-0 left-0 z-10 h-screen w-screen bg-transparent transition duration-200 {show?'pointer-events-auto':'pointer-events-none'} lg:hidden"></div>

<div class="absolute w-screen top-[106px] left-[50%] transform translate-x-[-50%] z-30 px-[1.5rem] transition duration-200 pointer-events-none {show?'opacity-100':'opacity-0'} lg:opacity-100 lg:relative lg:w-auto lg:top-auto lg:left-auto lg:p-0 lg:translate-x-0">
  <div class="relative shadow-xl flex flex-col transform transition duration-200 justify-center items-center bg-white text-gray-500 text-[20px] p-[24px] {show?'translate-y-0 pointer-events-auto':'translate-y-[-1rem] pointer-events-none'} lg:flex-row lg:bg-transparent lg:shadow-none lg:items-center lg:text-[18px] lg:pointer-events-auto lg:translate-y-0 lg:p-0 lg:text-white">
    <Triangle class="text-white absolute w-[24px] top-[-24px] right-0 lg:hidden" />
    {#each links as link, i}
      <a rel="external" on:click|preventDefault={toggleMenu} href="/{link.toLowerCase()}" class="rounded-full py-[6px] w-full transform transition duration-200 text-center py-[13px] bg-white bg-opacity-0 hover:bg-opacity-30 {show?'translate-x-0 opacity-100':'translate-x-[-1rem] opacity-0'} lg:opacity-100 lg:translate-x-0 lg:px-[24px] lg:translate-x-0" style="transition-delay:{(i*transitionDelay)+200}ms">{link}</a>
    {/each}
    <div class="mt-[20px] transform transition duration-200 {show?'translate-x-0 opacity-100':'translate-x-[-1rem] opacity-0'} lg:opacity-100 lg:m-0 lg:translate-x-0 lg:ml-[24px]" style="transition-delay:{(links.length*transitionDelay)+200}ms">
      <Button on:click={toggleMenu} href="./contact" theme="header">Contact</Button>
    </div>
  </div>
</div>