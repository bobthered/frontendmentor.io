<script>
  // _imports
  import links from '../data/links';

  // components
  import Container from '../components/Container.svelte';

  // props
  const socials = [
    'facebook',
    'twitter',
    'pinterest',
    'instagram'
  ]
</script>

<div class="bg-black flex justify-center py-[56px] text-white w-full lg:py-[42px]">
  <Container>
    <div class="flex flex-col items-center lg:flex-row lg:flex-wrap">
      <img src="./logo.svg" class="w-[144px] lg:order-1" />
      <div class="flex flex-col items-center mt-[24px] w-full lg:flex-row lg:order-3 lg:m-0 lg:w-1/2 lg:space-x-[33px] lg:pt-[16px]">
        {#each links as link}
          <a rel="external" href="/{link.toLowerCase()}" on:click|preventDefault class="text-center w-full py-[8.5px] hover:underline lg:w-auto lg:text-[15px]">{link}</a>
        {/each}
      </div>
      <div class="flex space-x-[16px] items-center mt-[39px] lg:order-2 lg:flex-grow lg:w-1/2 lg:m-0 lg:justify-end">
        {#each socials as social}
          <img src="./icon-{social}.svg" />
        {/each}
      </div>
      <div class="text-[15px] mt-[18px] lg:order-4 lg:text-right lg:mt-[18px] lg:w-1/2">© 2021 Loopstudios. All rights reserved.</div>
    </div>
  </Container>
</div>