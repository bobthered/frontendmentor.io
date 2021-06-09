<script>
  // components
  import Button from './Button.svelte';
  import Container from './Container.svelte';
  import Nav from './Nav.svelte';
</script>

<header class="flex w-full justify-center absolute top-0 bg-white bg-opacity-100 left-0 py-[20px] z-20 lg:py-[0]">
  <Container>
    <div class="flex justify-between items-center">
      <img src="./logo.svg" class="w-[140px] lg:w-[139px]" />
      <Nav />
      <Button on:click={e=>e.preventDefault()} class="hidden lg:block">Request Invite</Button>
    </div>
  </Container>
</header>