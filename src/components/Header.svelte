<script>
  // components
  import Button from "./Button.svelte";
  import Container from "./Container.svelte";
  import Logo from "./Logo.svelte";
  import Nav from "./Nav";
</script>

<header
  class="flex w-full justify-center absolute top-0 left-0 py-[38px] z-20 lg:py-[54px]">
  <Container>
    <div class="flex justify-between items-center">
      <Logo class="w-[110px] lg:w-[146px]" />
      <Nav />
      <Button class="hidden lg:inline-block">Get Started</Button>
    </div>
  </Container>
</header>
