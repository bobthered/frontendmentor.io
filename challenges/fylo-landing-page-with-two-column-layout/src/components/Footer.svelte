<script>
  // _imports
  import { base } from '$app/paths';
  import routes from '$data/routes';
  import socials from '$data/socials';

  // components
  import Container from '$components/Container.svelte';
  import { Facebook, Twitter, Instagram } from '$components/Icons';
  import Logo from '$components/Logo.svelte';

  // props ( internal )
  const linkClasses = 'py-[7px] transition duration-200 hover:text-blue-desaturated';
</script>

<footer class="ring ring-1 py-[58px] text-white bg-blue-dark lg:py-[110px]">
  <Container>
    <div class="flex flex-col">
      <Logo logoFill="#fff" wordFill="#fff" class="w-[180px]" />
      <div class="flex flex-col lg:flex-row lg:items-start lg:mt-[20px]">
        <div class="flex flex-col mt-[39px] space-y-[16px] lg:mt-0 lg:flex-grow">
          <div class="flex items-center space-x-[16px]">
            <img src="./icon-phone.svg" alt="Phone" />
            <div>Phone: +1-543-123-4567</div>
          </div> 
          <div class="flex items-center space-x-[16px]">
            <img src="./icon-email.svg" alt="Mail" />
            <div>example@fylo.com</div>
          </div>
        </div>
        <div class="flex flex-col mt-[48px] lg:mt-[-7px] lg:flex-grow">
          {#each [...routes].filter(r=>!r.nav).splice(0,4) as {title}}
            <a on:click|preventDefault href="{base}/{title.toLowerCase().replace(/\s/g,'-')}" class={linkClasses}>{title}</a>
          {/each}
        </div>
        <div class="flex flex-col mt-[32px] lg:mt-[-7px] lg:flex-grow">
          {#each [...routes].filter(r=>!r.nav).splice(4) as {title}}
            <a on:click|preventDefault href="{base}/{title.toLowerCase().replace(/\s/g,'-')}" class={linkClasses}>{title}</a>
          {/each}
        </div>
        <div class="flex justify-center mt-[44px] space-x-[12px] lg:mt-0 lg:flex-grow lg:justify-start">
          {#each [...socials].filter(s=>['facebook', 'twitter', 'instagram'].includes(s.id)) as {component, href}}
            <a on:click|preventDefault rel="external" {href} class="group rounded-full p-[6px] transition duration-200 ring ring-white ring-opacity-0 outline-none focus:ring-opacity-30 ring-offset ring-offset-1 ring-offset-white hover:ring-offset-blue">
              <svelte:component this={component} class="h-[14px] w-[14px] transition duration-200 group-hover:text-blue" />
            </a>
          {/each}
        </div>
      </div>
    </div>
  </Container>
</footer>