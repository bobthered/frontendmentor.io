<script>
  // _imports
  import links from '../data/links';

  // handlers
  const toggleMenu = () => show = !show;

  // props ( external )
  export let show = false;
</script>

<div on:click={toggleMenu} class="relative cursor-pointer w-[24px] h-[24px] lg:hidden">
  <div class="absolute w-full h-[2px] bg-white transform transition duration-200 top-1/2 left-0 {show?'-translate-y-1/2 rotate-45':'translate-y-[-8px] rotate-0'}"></div>
  <div class="absolute w-full h-[2px] bg-white transform transition duration-200 top-1/2 left-0 -translate-y-1/2 {show?'opacity-0':'opacity-100'}"></div>
  <div class="absolute w-full h-[2px] bg-white transform transition duration-200 top-1/2 left-0 {show?'-translate-y-1/2 -rotate-45':'translate-y-[6px] rotate-0'}"></div>
</div>

<div class="fixed top-0 left-0 w-screen h-screen -z-1 flex flex-col justify-center items-start bg-black text-white px-[1.5rem] transition duration-200 font-heading uppercase text-[1.5rem] {show?'opacity-100 pointer-events-auto':'opacity-0 pointer-events-none'} lg:relative lg:opacity-100 lg:pointer-events-auto lg:bg-transparent lg:w-auto lg:h-auto lg:flex-row lg:px-0 lg:normal-case lg:font-sans lg:text-[15px] lg:space-x-[33px] lg:z-auto">
  {#each links as link, i}
    <a rel="external" on:click|preventDefault href="/{link.toLowerCase()}" class="py-[6px] w-full transform transition duration-200 hover:underline {show?'translate-x-0 opacity-100':'translate-x-[-1rem] opacity-0'} lg:opacity-100 lg:translate-x-0" style="transition-delay:{i*50}ms">{link}</a>
  {/each}
</div>