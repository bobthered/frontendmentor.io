<script>
  // components
  import Container from "./Container.svelte";
  import Logo from "./Logo.svelte";
  import Nav from "./Nav";
</script>

<header
  class="flex w-full justify-center absolute top-0 left-0 py-[12px] z-20 lg:py-[66px]">
  <Container>
    <div class="flex justify-between items-center">
      <Logo class="w-[80px] lg:w-[166px]" />
      <Nav />
    </div>
  </Container>
</header>
