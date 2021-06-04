<script>
  // components
  import Container from './Container.svelte';

  // props
  import links from './Nav/links.js';
</script>

<div class="flex flex-col bg-footer-dark text-footer w-full rounded-tr-[6rem] items-center overflow-hidden py-[5rem]">
  <Container>
    <div class="flex flex-col w-full items-center space-y-[5rem] lg:grid lg:grid-cols-4 lg:space-y-0 lg:items-start">
      <img src='./logo.svg' />
      {#each links as {title, submenu}}
        <div class="flex flex-col space-y-[2rem]">
          <div class="text-center w-full text-white font-semibold text-[1.15rem] lg:text-left">{title}</div>
          <div class="flex flex-col items-center w-full">
            {#each submenu as subtitle}
              <a href="#" on:click|preventDefault class="w-full text-center text-[1.15rem] py-[.25rem] hover:underline lg:text-left">{subtitle}</a>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </Container>
</div>