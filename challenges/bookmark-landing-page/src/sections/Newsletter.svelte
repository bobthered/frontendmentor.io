<script>
  // components
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';
  import Input from '../components/Input.svelte';

  // props ( internal )
  let email = '';
</script>

<section class="bg-blue text-white py-[66px] mt-[120px] lg:mt-[154px] lg:py-[72px]">
  <Container>
    <form on:submit|preventDefault class="flex flex-col w-full items-center lg:w-[440px] lg:mx-auto">
      <div class="uppercase text-[13px] text-center lg:text-[14px]" style="letter-spacing:.32em">35,000+ Already Joined</div>
      <div class="text-center text-[24px] leading-[28px] mt-[10px] font-medium lg:text-[32px] lg:leading-[40px] lg:mt-[34px]">Stay up-to-date with what we're doing</div>
      <div class="flex flex-col w-full space-y-[16px] mt-[34px] lg:flex-row lg:space-y-0 lg:space-x-[16px]">
        <Input bind:email type="email" class="lg:flex-grow" />
        <Button theme="red">Contact Us</Button>
      </div>
    </form>
  </Container>
</section>