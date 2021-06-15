<script>
  // components
  import Container from './Container.svelte';
  import Logo from './Logo.svelte';
  import Nav from './Nav.svelte';
</script>

<header class="flex w-full justify-center absolute top-0 left-0 py-[32px] z-20 lg:py-[36px]">
  <Container width="w-full lg:w-[1408px]">
    <div class="flex justify-between items-center">
      <Logo class="text-white w-[124px] lg:w-[170px]" />
      <Nav />
    </div>
  </Container>
</header>