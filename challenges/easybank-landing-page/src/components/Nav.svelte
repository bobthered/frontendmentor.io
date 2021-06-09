<script>
  // _imports
  import links from '../data/links';

  // handlers
  const toggleMenu = () => show = !show;

  let show = false;
</script>

<div on:click={toggleMenu} class="relative cursor-pointer w-[24px] h-[24px] lg:hidden">
  <div class="absolute w-full h-[1px] bg-blue transform transition duration-200 top-1/2 left-0 {show?'-translate-y-1/2 rotate-45':'translate-y-[-5px] rotate-0'}"></div>
  <div class="absolute w-full h-[1px] bg-blue transform transition duration-200 top-1/2 left-0 {show?'opacity-0':'opacity-100'}"></div>
  <div class="absolute w-full h-[1px] bg-blue transform transition duration-200 top-1/2 left-0 {show?'-translate-y-1/2 -rotate-45':'translate-y-[5px] rotate-0'}"></div>
</div>

<div on:click={toggleMenu} class="absolute top-[64px] left-0 w-full h-screen bg-gradient-to-b from-blue to-transparent -z-1 transition duration-200 {show?'opacity-70 pointer-events-auto':'opacity-0 pointer-events-none'} lg:opacity-0 lg:pointer-events-none"></div>

<div class="absolute top-[88px] left-0 w-full transition duration-200 transform  pointer-events-none {show?'opacity-100 translate-y-0':'opacity-0 translate-y-[-18px]'} lg:relative lg:top-auto lg:left-auto lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto">
  <div class="px-[1.5rem]">
    <div class="rounded flex flex-col bg-white shadow-xl p-[18px] pointer-events-auto lg:bg-transparent lg:shadow-none lg:rounded-none lg:p-0">
      <div class="flex flex-col items-center lg:flex-row lg:justify-center">
      {#each links as link, i}
        <a rel="external" on:click|preventDefault={toggleMenu} href="/{link.toLowerCase().replace('home', '')}" class="relative text-[18px] py-[9px] w-full text-center group lg:text-[14px] lg:w-auto lg:px-[16px] lg:py-[28px]">
          <div>{link}</div>
          <div class="absolute bottom-0 left-0 w-full bg-gradient-to-r from-green to-cyan h-[3px] transform transition duration-200 scale-x-[0] lg:group-hover:scale-x-[1]"></div>
        </a>
      {/each}
      </div>
    </div>
  </div>
</div>