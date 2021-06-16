<script>
  // component
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';
</script>

<section class="relative py-[97px] text-white lg:py-[56px]">
  <div class="bg-violet absolute top-0 left-0 w-full h-full -z-1 overflow-hidden">
    <img alt="Boost BG" src="./bg-boost-mobile.svg" class="absolute top-0 left-0 w-full h-full -z-1 lg:hidden" />
    <img alt="Boost BG" src="./bg-boost-desktop.svg" class="absolute top-0 left-0 w-full h-full -z-1 hidden lg:block" />
  </div>
  <Container>
    <div class="flex flex-col items-center">
      <div class="text-center text-[26.5px] font-bold lg:text-[38px]">Boost your links today</div>
      <Button class="mt-[23px] lg:mt-[29px]">Get Started</Button>
    </div>
  </Container>
</section>