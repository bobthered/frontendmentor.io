<script>
  // components
  import Container from './Container.svelte';
  import Nav from './Nav.svelte';
</script>

<header class="flex w-full justify-center absolute top-0 left-0 py-[2.5rem] z-20 lg:py-[63px]">
  <Container>
    <div class="flex justify-between items-center">
      <img src="./logo.svg" class="w-[144px] lg:w-[192px]" />
      <Nav />
    </div>
  </Container>
</header>