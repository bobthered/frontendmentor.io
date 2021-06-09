<script>
  // components
  import Container from '../components/Container.svelte';
</script>

<div class="w-full relative bg-blue py-[40px] lg:py-[22px]">
  <img src="./bg-section-top-mobile-1.svg" class="absolute w-full top-[0] left-0 transform translate-y-[-100%] lg:hidden" />
  <img src="./bg-section-top-mobile-2.svg" class="absolute w-full bottom-[0] left-0 transform translate-y-[100%] rotate-180 lg:hidden" />
  <img src="./bg-section-top-desktop-1.svg" class="absolute w-full top-[0] left-0 transform translate-y-[-100%] hidden lg:block" />
  <img src="./bg-section-top-desktop-2.svg" class="absolute w-full bottom-[0] left-0 transform translate-y-[100%] rotate-180 hidden lg:block" />
  <Container>
    <div class="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between">
      <img src="./illustration-grow-together.svg" class="w-[260px] lg:order-2 lg:w-[500px]" />
      <div class="flex flex-col items-center lg:order-1 lg:items-start lg:w-[550px]">
        <div class="font-heading text-[20px] mt-[80px] lg:text-left lg:text-[40px]">Grow Together</div>
        <div class="text-center text-[14px] mt-[14px] px-[10px] lg:text-left lg:text-[16px] lg:pr-[20px]">Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</div>
      </div>
    </div>
  </Container>
</div>