<script>
  // _imports
  import links from '../data/links';

  // components
  import Container from './Container.svelte';
  import { Facebook, Twitter } from './Icons';
  import Logo from './Logo.svelte';

  // props ( internal )
  let socials = [
    {component: Facebook, href:'http://facebook.com'},
    {component: Twitter, href:'http://twitter.com'},
  ]
</script>

<footer class="bg-blue-dark text-white py-[38px] lg:py-[21px]">
  <Container>
    <div class="flex flex-col items-center lg:flex-row lg:justify-between">
      <div class="flex flex-col items-center lg:flex-row lg:flex-grow lg:space-x-[48px]">
        <Logo icon="#fff" logo="hsl(231, 69%, 60%)" words="#fff" class="w-[148px] lg:w-[180px]"/>
        <div class="w-full flex flex-col mt-[22px] lg:flex-row lg:mt-0" style="letter-spacing:.125em">
          {#each links as link}
            <a href="#" on:click|preventDefault class="text-center transition duration-200 uppercase py-[14px] text-[15px] hover:text-red focus:text-red lg:px-[20px] lg:text-[13px]">{link}</a>
          {/each}
        </div>
      </div>
      <div class="flex space-x-[44px] self-center mt-[30px] lg:mt-0 lg:space-x-[36px]">
        {#each socials as {component, href}}
          <a {href} rel="external" on:click|preventDefault class="flex items-center transition duration-200 justify-center text-white hover:text-red outline-none focus:text-red transform">
            <svelte:component this={component} class="h-[24px]" />
          </a>
        {/each}
      </div>
    </div>
  </Container>
</footer>