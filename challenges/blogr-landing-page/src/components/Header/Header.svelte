<script>
  // components
  import Container from '../Container.svelte';
  import {Nav}from '../Nav';

  // handlers
  const clickHandler = () => show = !show;

  // props
  let show = false;
</script>

<!-- header -->
<header class="flex py-[3.5rem] justify-center w-full absolute top-0 left-0 z-10 lg:py-[4rem]">
  <Container>
    <div class="flex justify-between">
      <div class="flex items-center lg:space-x-[4rem] lg:flex-grow">
        <img src="./logo.svg" class="w-[82px] lg:w-[102px]" />
        <Nav bind:show/>
      </div>
      <a href="#" on:click|preventDefault={clickHandler} class="w-[2rem] h-[2rem] relative lg:hidden">
        <div class="w-full h-[2px] block bg-white absolute top-1/2 left-0 transition duration-200 transform -translate-y-1/2 {show?'rotate-45':'mt-[-8px]'}"></div>
        <div class="w-full h-[2px] block bg-white absolute top-1/2 left-0 transition duration-200 transform -translate-y-1/2 {show?'opacity-0':'opacity-100'}"></div>
        <div class="w-full h-[2px] block bg-white absolute top-1/2 left-0 transition duration-200 transform -translate-y-1/2 {show?'-rotate-45':'mt-[8px]'}"></div>
      </a>
    </div>
  </Container>
</header>