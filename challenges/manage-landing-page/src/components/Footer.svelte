<script>
  // _imports
  import { base } from '$app/paths';
  import routes from '../data/routes'
  import socials from '../data/socials';

  // components
  import Button from './Button.svelte';
  import Container from './Container.svelte';
  import Input from './Input.svelte';
  import Logo from './Logo.svelte';
  import Section from './Section.svelte';
</script>

<footer class="flex flex-col text-white">
  <Section padding="py-[92px] lg:py-[60px]" position="relative">
    <div class="w-full h-full top-0 left-0 absolute -z-1 bg-orange overflow-hidden">
      <img alt="Simplify Background" src="./bg-simplify-section-mobile.svg" class="absolute top-1/2 left-0 transform -translate-y-1/2 -z-1 lg:hidden" />
      <img alt="Simplify Background" src="./bg-simplify-section-desktop.svg" class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -z-1 -translate-x-1/2 hidden lg:block" />
    </div>
    <Container>
      <div class="flex flex-col items-center lg:flex-row lg:justify-between">
        <div class="text-[38px] leading-[50px] text-center font-bold w-[320px] lg:text-left lg:w-[540px] lg:text-[39px]">Simplify how your team works today.</div>
        <Button theme="white" class="mt-[28px] lg:mt-0">Get Started</Button>
      </div>
    </Container>
  </Section>
  <Section padding="py-[50px] bg-blue-900" class="ring ring-1 ring-orange">
    <Container>
      <div class="flex flex-col items-center lg:grid lg:grid-cols-footer">
        <form on:submit|preventDefault class="flex items-center space-x-[8px] lg:order-3">
          <Input class="flex-grow" placeholder="Updates in your inbox..." />
          <Button boxShadow="" type="submit">Go</Button>
        </form>
        <div class="grid grid-flow-col grid-rows-4 gap-x-[24px] grid-cols-2 mt-[50px] lg:order-2 lg:row-span-2 lg:mt-0">
          {#each routes as {title}}
            <a on:click|preventDefault class="px-[8px] py-[5px] leading-[25px] transition duration-200 hover:text-orange" href="{base}/{title.toLowerCase().replace(/\s/g,'-')}">{title}</a>
          {/each}
        </div>
        <div class="flex justify-center space-x-[34px] mt-[43px] lg:order-4 lg:space-x-[12px] lg:justify-start">
          {#each socials as {component, href}}
            <a class="transition duration-200 hover:text-orange" on:click|preventDefault {href}>
              <svelte:component this={component} class="w-[32px] h-[32px] lg:w-[22px] lg:h-[22px]" />
            </a>
          {/each}
        </div>
        <div class="mt-[52px] lg:order-1 lg:mt-0">
          <Logo class="w-[160px] lg:w-[152px]" />
        </div>
        <div class="text-white text-opacity-50 text-[12.5px] mt-[54px] lg:order-5 lg:text-right">Copyright 2020. All Rights Reserved</div>
      </div>
    </Container>
  </Section>
</footer>