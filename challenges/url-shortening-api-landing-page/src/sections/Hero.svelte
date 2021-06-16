<script>
  // component
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';
</script>

<section class="relative pt-[474px] pb-[172px] overflow-hidden max-w-screen lg:pt-[236px] lg:pb-[230px]">
  <div class="absolute -z-1 top-[110px] left-1/2 transform translate-x-[-50%] ml-[85px] w-[500px] lg:ml-[110px] lg:top-[166px] lg:w-[730px] lg:translate-x-0">
    <img alt="Working Illustration" src="./illustration-working.svg" />
  </div>
  <Container>
    <div class="flex flex-col items-center lg:w-[600px] lg:items-start">
      <div class="text-[40px] leading-[48px] font-bold text-center lg:text-[76px] lg:leading-[90px] lg:text-left">More than just shorter links</div>
      <div class="text-gray-400 text-center mt-[12px] leading-[30px] lg:text-[22px] lg:text-left lg:leading-[36px] lg:mt-[0]">Build your brand's recognition and get detailed insights on how your links are performing.</div>
      <Button class="mt-[36px] lg:mt-[40px]">Get Started</Button>
    </div>
  </Container>
</section>