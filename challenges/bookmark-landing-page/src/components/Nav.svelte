<script>
  // _imports
  import links from '../data/links';

  // components
  import Button from './Button.svelte';
  import { Facebook, Twitter } from './Icons';

  // handlers
  const toggleMenu = () => show = !show;

  // props ( internal )
  let bg;
  let socials = [
    {component: Facebook, href:'http://facebook.com'},
    {component: Twitter, href:'http://twitter.com'},
  ]

  // props ( external )
  export let show = false;

  // props ( dynamic )
  $: if ( show ) {
    bg= 'bg-white';
  } else {
    bg = 'bg-blue-dark';
  }
</script>

<div on:click={toggleMenu} class="relative cursor-pointer w-[18px] h-[24px] lg:hidden">
  <div class="absolute w-full h-[3px] {bg} transform transition duration-200 top-1/2 left-0 {show?'-translate-y-1/2 rotate-45':'translate-y-[-8px] rotate-0'}"></div>
  <div class="absolute w-full h-[3px] {bg} transform transition duration-200 top-1/2 left-0 translate-y-[-2px] {show?'opacity-0':'opacity-100'}"></div>
  <div class="absolute w-full h-[3px] {bg} transform transition duration-200 top-1/2 left-0 {show?'-translate-y-1/2 -rotate-45':'translate-y-[4px] rotate-0'}"></div>
</div>

<div class="fixed top-0 left-0 w-screen h-screen justify-between -z-1 flex flex-col pt-[106px] pb-[48px] bg-blue-dark text-white px-[32px] transition duration-200 uppercase text-[20px] leading-[21px] tracking-widest {show?'opacity-90 pointer-events-auto':'opacity-0 pointer-events-none'} lg:opacity-100 lg:pointer-events-auto lg:relative lg:bg-transparent lg:flex-row lg:text-blue lg:w-auto lg:h-auto lg:z-auto lg:p-0 lg:text-[13px]">
  <div class="flex flex-col lg:flex-row lg:items-center">
    {#each links as link, i}
      <a rel="external" on:click|preventDefault href="./{link.toLowerCase()}" class="border-t border-white border-opacity-10 py-[22px] w-full transform text-center transition duration-200 hover:text-red {show?'translate-x-0 opacity-100':'translate-x-[-1rem] opacity-0'} lg:opacity-100 lg:translate-x-0 lg:py-[9px] lg:px-[24px]" style="transition-delay:{i*50}ms">{link}</a>
    {/each}
    <div class="flex flex-col border-t border-white border-opacity-10 py-[22px] lg:py-0 transform transition duration-200 {show?'translate-x-0 opacity-100':'translate-x-[-1rem] opacity-0'} lg:translate-x-0 lg:opacity-100 lg:ml-[20px]" style="transition-delay:{links.length*50}ms">
      <Button on:click={e=>e.preventDefault()} fontWeight="font-normal" text="text-[20px] lg:text-[15px] lg:font-normal" theme="header">Login</Button>
    </div>
  </div>
  <div class="flex space-x-[24px] self-center lg:hidden">
    {#each socials as {component, href}}
      <a {href} rel="external" on:click|preventDefault class="flex items-center transition duration-200 justify-center text-white hover:text-red outline-none focus:text-red transform {show?'translate-x-0 opacity-100':'translate-x-[-1rem] opacity-0'}" style="transition-delay:{(links.length+1)*50}ms">
        <svelte:component this={component} class="h-[24px]" />
      </a>
    {/each}
  </div>
</div>