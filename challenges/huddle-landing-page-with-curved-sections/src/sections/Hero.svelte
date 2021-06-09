<script>
  // components
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';

  // props
  const stats = [
    {icon:'communities', number:'1.4k+', message:'Communities formed'},
    {icon:'messages', number:'2.7m+', message:'Messages Sent'},
  ]
</script>

<div class="py-[162px] lg:py-[350px]">
  <Container>
    <div class="flex flex-col items-center">
      <div class="text-center font-heading font-bold text-[24px] lg:text-[47.9px]">Build The Community Your Fans Will Love</div>
      <div class="text-center text-[14px] mt-[23px] px-[8px] lg:text-[20px] lg:w-[610px]">Huddle re-imagines the way we build communities.  You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</div>
      <Button on:click={e=>e.preventDefault()} class="mt-[48px]">Get Started For Free</Button>
      <img src="./screen-mockups.svg" class="mt-[102px] lg:mt-[110px]" />
      <div class="grid grid-cols-1 mt-[104px] gap-[90px] lg:flex lg:justify-between lg:self-stretch lg:w-[880px] lg:mx-auto lg:mt-[120px]">
        {#each stats as {icon, number, message}}
          <div class="flex flex-col items-center">
            <img src="./icon-{icon}.svg" class="h-[26px] self-start lg:h-[40px]" />
            <div class="font-bold text-[60px] leading-[82px] text-center lg:text-[95px] lg:leading-[128px]">{number}</div>
            <div class="text-[15.5px] text-center mt-[4px] lg:text-[24px] lg:mt-[8px]">{message}</div>
          </div>
        {/each}
      </div>
    </div>
  </Container>
</div>