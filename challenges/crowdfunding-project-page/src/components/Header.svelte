<script>
  // components
  import Container from './Container.svelte';
  import Nav from './Nav.svelte';

  // handlers
  const menuClickHandler = () => show = !show;

  // props
  let show = false;
</script>

<header class="flex justify-center absolute top-0 left-0 w-full bg-gradient-to-b from-black to-transparent py-[2rem] z-10">
  <Container>
    <div class="flex justify-between items-center">
      <img src="./logo.svg"/>
      <a href="#" on:click|preventDefault={menuClickHandler} class="relative w-[1.5rem] h-[1.5rem] lg:hidden">
        <div class="bg-white w-full h-[3px] absolute top-[50%] transform translate-y-[-50%] transition duration-200 {show?'mt-0 rotate-45':'rotate-0 mt-[-8px]'}"></div>
        <div class="bg-white w-full h-[3px] absolute top-[50%] transform translate-y-[-50%] transition duration-200 {show?'opacity-0':'opacity-100'}"></div>
        <div class="bg-white w-full h-[3px] absolute top-[50%] transform translate-y-[-50%] transition duration-200 {show?'mt-0 -rotate-45':'rotate-0 mt-[8px]'}"></div>
      </a>
      <Nav bind:show/>
    </div>
  </Container>
</header>