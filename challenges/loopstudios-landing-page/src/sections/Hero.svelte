<script>
  // components
  import Container from '../components/Container.svelte';
</script>

<div class="relative flex h-[650px] items-center justify-center w-full">
  <img src="./mobile/image-hero.jpg" class="absolute top-0 left-0 object-cover w-full h-full -z-1 lg:hidden" />
  <img src="./desktop/image-hero.jpg" class="absolute top-0 left-0 object-cover w-full h-full -z-1 hidden lg:block" />
  <Container>
    <div class="w-full border border-white p-[1.5rem] text-white uppercase font-heading text-[2.5rem] leading-[2.3rem] selection:bg-pink-500 lg:w-[650px] lg:p-[38px] lg:text-[72px] lg:leading-[70px] lg:mt-[88px]">
      Immersive Experiences That Deliver
    </div>
  </Container>
</div>