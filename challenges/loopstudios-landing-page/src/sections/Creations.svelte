<script>
  // components
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';
  import ImageLoader from '../components/ImageLoader.svelte';

  // props
  const creations = [
    {title:'Deep Earth', image:'deep-earth'},
    {title:'Night Arcade', image:'night-arcade'},
    {title:'Soccer Team VR', image:'soccer-team'},
    {title:'The<br>Grid', image:'grid'},
    {title:'From Up Above VR', image:'from-above'},
    {title:'Pocket Borealis', image:'pocket-borealis'},
    {title:'The Curiosity', image:'curiosity'},
    {title:'Make It Fisheye', image:'fisheye'},
  ]
</script>

<div class="flex justify-center w-full pb-[98px] lg:py-[29px] lg:pb-[190px]">
  <Container>
    <div class="flex flex-col items-center w-full lg:flex-row lg:flex-wrap lg:justify-between">
      <div class="font-heading text-[2rem] leading-[2rem] uppercase text-center lg:text-left lg:text-[3rem] lg:order-1">Our Creations</div>
      <div class="grid grid-cols-1 gap-[24px] w-full mt-[3rem] lg:order-3 lg:grid-cols-4 lg:grid-rows-2 lg:mt-[84px] lg:gap-[30px]">
        {#each creations as {title, image}}
          <div class="relative group cursor-pointer">
            <div class="lg:hidden">
              <ImageLoader src="./mobile/image-{image}.jpg" alt={title} class="group-hover:opacity-30" />
            </div>
            <div class="hidden lg:block">
              <ImageLoader src="./desktop/image-{image}.jpg" alt={title} class="hidden lg:block group-hover:opacity-30" />
            </div>
            <div class="absolute top-0 left-0 p-[20px] pr-[180px] pt-[52px] text-[1.5rem] leading-[1.5rem] text-white font-heading uppercase min-w-full min-h-full bg-gradient-to-r from-black to-transparent bg-opacity-20 flex items-end group-hover:from-transparent group-hover:text-black lg:pl-[40px] lg:pb-[34px] lg:pr-[2rem] lg:text-[33px] lg:leading-[2rem] lg:bg-gradient-to-t">{@html title}</div>
          </div>
        {/each}
      </div>
      <Button on:click={e=>e.preventDefault()} class="mt-[34px] lg:order-2 lg:mt-0">See All</Button>
    </div>
  </Container>
</div>