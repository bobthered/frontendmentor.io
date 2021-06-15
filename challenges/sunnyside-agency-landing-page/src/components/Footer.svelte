<script>
  // _imports
  import links from '../data/links';

  // components
  import Container from '../components/Container.svelte';
  import {Facebook, Instagram, Twitter, Pinterest} from '../components/Icons';
  import Logo from '../components/Logo.svelte';

  // props ( internal )
  const gallery = [ 'milkbottles', 'orange', 'cone', 'sugar-cubes']
  const socials = [
    {component:Facebook, href:'http://facebook.com'},
    {component:Instagram, href:'http://instagram.com'},
    {component:Twitter, href:'http://twitter.com'},
    {component:Pinterest, href:'http://pinterest.com'},
  ]
</script>

<section class="grid grid-cols-2 mt-[28px] lg:mt-0 lg:grid-cols-4">
  {#each gallery as image}
    <img alt="{image}" src="./mobile/image-gallery-{image}.jpg" class="lg:hidden" />
    <img alt="{image}" src="./desktop/image-gallery-{image}.jpg" class="hidden lg:block" />
  {/each}
</section>

<footer class="text-cyan-dark bg-cyan py-[66px] lg:py-[80px]">
  <Container>
    <div class="flex flex-col items-center">
      <Logo class="w-[168px]" />
      <div class="flex justify-center space-x-[30px] mt-[30px]">
        {#each links as link}
          <a href="./{link.toLowerCase()}" on:click|preventDefault class="text-[18px] px-[12px] py-[10px] transition duration-200 hover:text-white">{link}</a>
        {/each}
      </div>
      <div class="flex justify-center space-x-[28px] mt-[76px]">
        {#each socials as {component, href}}
          <a {href} on:click|preventDefault rel="external" class="transition duration-200 hover:text-white">
            <svelte:component this={component} class="w-[20px]" />
          </a>
        {/each}
      </div>
    </div>
  </Container>
</footer>