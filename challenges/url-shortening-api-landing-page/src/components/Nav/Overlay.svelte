<script>
  // props ( external )
  export let toggleMenu;
  export let show;
</script>

<div on:click={toggleMenu} class="fixed top-0 left-0 z-10 h-screen w-screen bg-transparent transition duration-200 {show?'pointer-events-auto':'pointer-events-none'} lg:hidden"></div>
