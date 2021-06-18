<script>
  // props ( external )
  export let toggleMenu;
  export let show;
</script>

<div on:click={toggleMenu} class="absolute left-0 cursor-pointer w-[20px] h-[24px] z-40 lg:hidden">
  <div class="absolute w-full h-[2px] bg-opacity-50 transform transition duration-200 top-1/2 left-0 {show?'-translate-y-1/2 rotate-45 bg-black':'translate-y-[-7px] rotate-0 bg-white'}"></div>
  <div class="absolute w-full h-[2px] bg-opacity-50 transform transition duration-200 top-1/2 left-0 translate-y-[-1px] {show?'opacity-0 bg-black':'opacity-100 bg-white'}"></div>
  <div class="absolute w-full h-[2px] bg-opacity-50 transform transition duration-200 top-1/2 left-0 {show?'-translate-y-1/2 -rotate-45 bg-black':'translate-y-[5px] rotate-0 bg-white'}"></div>
</div>