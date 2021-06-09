<script>
  // _imports
  import _links from '../data/links';

  // components
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';
  import { Facebook, Youtube, Twitter, Pinterest, Instagram } from '../components/Icons';

  // props
  $: links = [..._links.slice(1), 'Support', 'Privacy Policy']
  const socials = [
    { component: Facebook, href: 'http://facebook.com'},
    { component: Youtube, href: 'http://youtube.com'},
    { component: Twitter, href: 'http://twitter.com'},
    { component: Pinterest, href: 'http://pinterest.com'},
    { component: Instagram, href: 'http://instagram.com'}
  ]
</script>

<div class="flex justify-center py-[39px] bg-blue w-full lg:py-[48px]">
  <Container>
    <div class="flex flex-col lg:flex-row">
      <div class="flex flex-col items-center lg:items-start lg:justify-between">
        <img src="./logo-footer.svg" />
        <div class="flex space-x-[15px] mt-[32px] lg:mt-[20px] lg:space-x-[13.25px]">
          {#each socials as {component, href}}
            <a {href} on:click|preventDefault rel="external" class="transition duration-200 text-white hover:text-green">
              <svelte:component this={component} class="w-[25px] lg:w-[20px]" />
            </a>
          {/each}
        </div>
      </div>
      <div class="flex flex-col mt-[20px] lg:mt-0 lg:grid lg:grid-cols-2 lg:ml-[132px]">
        {#each links as link}
          <a on:click|preventDefault href="/{link.toLowerCase().replace(/\s/g,'-')}" class="text-white text-center text-[14.75px] py-[6px] transition duration-200 hover:text-green lg:text-left lg:w-[190px]">{link.replace('About', 'About Us')}</a>
        {/each}
      </div>
      <div class="flex flex-col text-white items-center mt-[27px] lg:mt-0 lg:flex-grow lg:items-end">
        <Button on:click={e=>e.preventDefault()}>Request Invite</Button>
        <div class="text-center text-[14.5px] mt-[26px]">© Easybank. All Rights Reserved</div>
      </div>
    </div>
  </Container>
</div>