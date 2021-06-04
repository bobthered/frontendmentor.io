<script>
  // components
  import { Button } from '../Button';
  import Container from '../Container.svelte';
</script>
<!-- hero -->
<div class="flex justify-center text-white w-full relative overflow-hidden rounded-bl-[6rem]">
  <Container>
    <div class="flex flex-col items-center pt-[12.35rem] pb-[9.75rem] lg:pt-[15.75rem]">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cta-gradient-1 to-cta-gradient-2 -z-1"></div>
      <div class="absolute top-0 left-0 w-full h-full -z-1" style="background-image:url(./bg-pattern-intro.svg); background-size:350%; background-position:-20rem -15rem;"></div>
      <div class="text-[2.1rem] leading-[2.95rem] text-center font-semibold lg:text-[3.75rem]">A modern publishing platform</div>
      <div class="text-center text-[1.125rem] leading-[1.45rem] mt-[.85rem] lg:text-[1.25rem] lg:mt-[1.75rem]">Grow your audience and build your online brand</div>
      <div class="flex space-x-[1rem] mt-[2.8rem] w-full lg:w-[20rem]">
        <Button>Start for Free</Button>
        <Button theme="outline">Learn More</Button>
      </div>
    </div>
  </Container>
</div>