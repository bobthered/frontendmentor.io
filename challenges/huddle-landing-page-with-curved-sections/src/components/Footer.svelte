<script>
  // components
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';
  import { Facebook, Instagram, Twitter } from '../components/Icons';

  // props
  const contacts = [
    {icon:'phone', text:'Phone: +1-543-123-4567',href:'tel:5431234567'},
    {icon:'email', text:'example@company.com',href:'mailto:example@company.com'},
  ]
  const socials = [
    {component:Facebook, href:'http://facebook.com', hoverClass:'hover:text-facebook'},
    {component:Instagram, href:'http://instagram.com', hoverClass:'hover:text-instagram-1'},
    {component:Twitter, href:'http://twitter.com', hoverClass:'hover:text-twitter'},
  ]
</script>

<div class="relative w-full text-blue bg-cyan mt-[62px] py-[58px]">
  <img src="./bg-footer-top-mobile.svg" class="absolute top-0 left-0 w-full transform translate-y-[-100%]"/>
  <Container>
    <div class="flex flex-col lg:flex-row lg:justify-between">
      <div class="flex flex-col lg:order-2 lg:w-[500px]">
        <div class="font-bold uppercase text-[20px]">Newsletter</div>
        <div class="text-[14.75px] leading-[24px] mt-[12px] lg:w-[350px] lg:mt-[26px]">To receive tips on how to grow your community, sign up to our weekly newsletter. We'll never send you spam or pass on your email address</div>
        <form on:submit|preventDefault class="flex flex-col lg:flex-row lg:space-x-[24px] lg:w-full">
          <input type="email" class="bg-white text-cyan rounded mt-[35px] appearance-none p-[12px] outline-none lg:flex-grow" />
          <Button type="submit" size="large" class="self-end mt-[14px] lg:mt-0">Subscribe</Button>
        </form>
      </div>
      <div class="flex flex-col mt-[104px] lg:mt-0 lg:order-1 lg:w-[400px]">
        <img src="./logo-footer.svg" class="w-[200px] lg:w-[220px]" />
        <div class="text-[14.5px] leading-[24px] mt-[16px] lg:mt-[26px]">Lorem ipsum dolar sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultricies quis sem.</div>
        <div class="grid gap-[16px] items-center mt-[40px] lg:mt-[26px]" style="grid-template-columns: 24px auto">
          {#each contacts as {icon, text, href}}
            <img src="./icon-{icon}.svg" />
            <a {href} on:click|preventDefault class="transition duration-200">{text}</a>
          {/each}
        </div>
        <div class="flex space-x-[20px] mt-[50px] lg:mt-[76px]">
          {#each socials as {component, href, hoverClass}}
            <a {href} on:click|preventDefault rel="external" class="transition duration-200 text-blue {hoverClass}">
              <svelte:component this={component} class="w-[24px] lg:w-[32px]" />
            </a>
          {/each}
        </div>
      </div>
    </div>
  </Container>
</div>