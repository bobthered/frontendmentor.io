<script>
  // components
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';
</script>

<div class="relative w-full flex flex-col items-center max-w-screen">
  <div class="absolute top-0 left-0 w-full h-[1500px] z-10 overflow-hidden pointer-events-none">
    <img src="./bg-intro-mobile.svg" class="absolute top-0 left-0 w-full -z-1 lg:hidden" />
    <img src="./bg-intro-desktop.svg" class="absolute top-[-10rem] left-[50%] ml-[-6rem] -z-1 hidden w-[1200px] transform lg:block" />
    <img src="./image-mockups.png" class="w-[342px] absolute top-[-56px] left-1/2 transform -translate-x-1/2 -z-1 lg:w-auto lg:translate-x-0 lg:ml-[5rem] lg:top-[-40px]" />
  </div>
  <Container>
    <div class="flex flex-col pt-[386px] pb-[88px] lg:w-[440px] lg:py-[250px] lg:pb-[172px]">
      <div class="text-center text-[38px] leading-[48px] lg:text-left lg:text-[53.75px] lg:leading-[64px]">Next generation digital banking</div>
      <div class="text-center text-gray-500 text-[14.5px] leading-[25px] mt-[14px] lg:text-left lg:text-[17.25px] lg:leading-[28px] lg:mt-[24px]">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</div>
      <Button on:click={e=>e.preventDefault()} class="self-center mt-[28px] lg:self-start lg:mt-[34px]">Request Invite</Button>
    </div>
  </Container>
</div>