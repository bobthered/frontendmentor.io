<script>
  // components
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';
</script>

<div class="w-full">
  <Container>
    <div class="flex flex-col items-center py-[242px] lg:py-[342px]">
      <div class="font-heading text-[24px] text-center lg:text-[40px]">Ready To Build Your Community?</div>
      <Button on:click={e=>e.preventDefault()} class="mt-[40px]">Get Started For Free</Button>
    </div>
  </Container>
</div>