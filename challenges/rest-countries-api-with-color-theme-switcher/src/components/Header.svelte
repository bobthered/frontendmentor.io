<script>
  // components
  import Container from './Container.svelte';
  import Darkmode from './Darkmode';
</script>

<header class="w-full py-[29px] shadow-md bg-light-bg dark:bg-dark-bg z-20 lg:py-[22px]">
  <Container>
    <div class="flex justify-between items-center">
      <div class="font-extrabold text-[14px] lg:text-[24px]">Where in the world?</div>
      <Darkmode />
    </div>
  </Container>
</header>