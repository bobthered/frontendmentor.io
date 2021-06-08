<script>
  // components
  import Container from '../components/Container.svelte';
  import ImageLoader from '../components/ImageLoader.svelte';
</script>

<div class="flex justify-center py-[6rem] w-full lg:py-[10rem]">
  <Container>
    <div class="relative flex flex-col w-full items-center">
      <ImageLoader src="./mobile/image-interactive.jpg" alt="Interactive" class="lg:hidden" />
      <ImageLoader src="./desktop/image-interactive.jpg" alt="Interactive" class="hidden lg:block" />
      <div class="flex flex-col w-full items-center lg:absolute lg:right-0 lg:bottom-0 lg:bg-white lg:w-[540px] lg:pl-[95px] lg:pt-[48px]">
        <div class="font-heading text-[2rem] leading-[2rem] text-center uppercase mt-[3rem] lg:text-[3rem] lg:leading-[3rem] lg:text-left">The Leader in Interactive VR</div>
        <div class="text-gray-500 text-[15px] leading-[25px] text-center px-[1rem] mt-[1rem] lg:text-left lg:px-0 lg:mt-[26px]">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</div>
      </div>
    </div>
  </Container>
</div>