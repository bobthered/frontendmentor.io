<script>
  // imports
  import { base } from '$app/paths';
  import routes from '../data/routes.js';

  // component
  import Container from '../components/Container.svelte';
  import { Facebook, Twitter, Pinterest, Instagram } from '../components/Icons';
  import Logo from '../components/Logo.svelte';

  // props ( internal )
  const socials = [
    {component:Facebook, href:'http://facebook.com'},
    {component:Twitter, href:'http://twitter.com'},
    {component:Pinterest, href:'http://pinterest.com'},
    {component:Instagram, href:'http://instagram.com'},
  ]
</script>

<footer class="bg-gray-900 py-[52px] text-white lg:py-[78px]">
  <Container>
    <div class="flex flex-col items-center space-y-[48px] lg:flex-row lg:items-start lg:space-y-0 lg:space-x-[62px]">
      <div class="lg:flex-grow">
        <Logo class="w-[120px]" />
      </div>
      <div class="flex flex-col items-center space-y-[32px] text-[15.5px] lg:grid lg:grid-cols-3 lg:space-y-0 lg:items-start lg:gap-[70px]">
        {#each routes.filter(route=>route.footer) as {title, links}}
          <div class="flex flex-col items-center space-y-[18px] lg:items-start">
            <a href="{base}/{title.toLowerCase()}" on:click|preventDefault class="font-bold transition duration-200 hover:text-cyan">{title}</a>
            <div class="flex flex-col items-center lg:items-start">
              {#each links as link}
                <a class="text-gray-400 py-[5px] transition duration-200 hover:text-cyan" href="{base}/{title.toLowerCase()}/{link.toLowerCase().replace(/\s/g,'-')}" on:click|preventDefault>{link}</a>
              {/each}
            </div>
          </div>
        {/each}
      </div>
      <div class="flex space-x-[24px]">
        {#each socials as {component, href}}
          <a class="transition duration-200 hover:text-cyan" {href} on:click|preventDefault rel="external">
            <svelte:component this={component} class="w-[24px] h-[24px]" />
          </a>
        {/each}
      </div>
    </div>
  </Container>
</footer>