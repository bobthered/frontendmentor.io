<script>
  // components
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';
</script>

<section class="flex flex-col py-[140px] relative overflow-hidden lg:py-[272px]">
  <div class="relative w-full flex flex-col items-center transform lg:absolute lg:left-[50%] lg:top-[50%] lg:translate-y-[-50%] lg:w-[50%] lg:items-start">
    <div class="absolute -z-1 left-[20%] top-[23%] h-[82%] w-[80%] bg-blue rounded-l-full lg:top-[32%] lg:h-[75%] lg:left-[28%]"></div>
    <img src="./illustration-hero.svg" class="w-[350px] lg:w-[660px]" />
  </div>
  <Container class="mt-[60px] lg:mt-0">
    <div class="lg:w-[48%]">
      <div class="text-center text-blue-dark text-[30px] leading-[40px] font-medium lg:text-left lg:text-[48px] lg:leading-[52px]">A Simple Bookmark Manager</div>
      <div class="text-center text-gray text-[15px] leading-[25px] mt-[16px] lg:text-left lg:text-[18px] lg:leading-[28px] lg:mt-[25px]">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free</div>
      <div class="flex space-x-[16px] mt-[32px]">
        <Button class="flex-grow lg:flex-grow-0">Get it on Chrome</Button>
        <Button class="flex-grow lg:flex-grow-0" theme="gray">Get it on Firefox</Button>
      </div>
    </div>
  </Container>
</section>