<script>
  // components
  import Container from "../Container.svelte";
</script>

<div
  class="flex flex-col items-center text-white mt-[13.75rem] relative pt-[14rem] pb-[8rem] w-full lg:mt-[0rem] lg:py-[8rem]">
  <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-body-gradient-1 to-body-gradient-2 rounded-tr-[6rem] rounded-bl-[6rem] overflow-hidden -z-1">
    <img src="./bg-pattern-circles.svg" class="absolute top-[-5rem] left-0 transform scale-[1.5] lg:top-[-30rem] lg:scale-[1] lg:left-[-15rem]"/>
  </div>
  <img src="./illustration-phones.svg" class="absolute top-[-12rem] transform right-[50%] mr-[5rem] w-full lg:w-auto lg:top-1/2 lg:-translate-y-1/2"/>
  <Container>
    <div class="flex flex-col">
    <div class="w-full lg:w-1/2 lg:self-end">
      <div class="text-[2.35rem] leading-[3.1rem] text-center font-semibold z-10 lg:text-left">State of the Art Infrastructure</div>
      <div class="text-center mt-[1.5rem] leading-[1.75rem] lg:text-left">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</div>
    </div>
    </div>
  </Container>
</div>
