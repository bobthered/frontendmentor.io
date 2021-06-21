<script>
  // 
  // props ( external )
  export let toggleMenu;
  export let show;
</script>

<div on:click={toggleMenu} class="relative cursor-pointer w-[24px] h-[24px] lg:hidden">
  <div class="absolute w-full h-[3px] bg-blue transform transition duration-200 top-1/2 left-0 {show?'-translate-y-1/2 rotate-45':'translate-y-[-9px] rotate-0'}"></div>
  <div class="absolute w-full h-[3px] bg-blue transform transition duration-200 top-1/2 left-0 translate-y-[-1px] {show?'opacity-0':'opacity-100'}"></div>
  <div class="absolute w-full h-[3px] bg-blue transform transition duration-200 top-1/2 left-0 {show?'-translate-y-1/2 -rotate-45':'translate-y-[6px] rotate-0'}"></div>
</div>