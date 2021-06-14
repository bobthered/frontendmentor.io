<script>
  // components
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';

  // props ( internal )
  let currentIndex = 0;
  const features = [
    {tab:'Simple Bookmarking', img:'illustration-features-tab-1.svg', title:'Bookmark in one click', description:'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'},
    {tab:'Speedy Searching', img:'illustration-features-tab-2.svg', title:'Intelligent search', description:'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'},
    {tab:'Easy Sharing', img:'illustration-features-tab-3.svg', title:'Share your boomkarks', description:'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'},
  ];
</script>

<section class="overflow-hidden lg:mt-[-70px]">
  <Container>
    <div class="flex flex-col items-center">
      <div class="text-blue-dark font-medium text-[24px] leading-[52px] text-center lg:text-[32px]">Features</div>
      <div class="text-[15px] leading-[25px] text-gray text-center lg:text-[18px] lg:leading-[28px] lg:w-[540px] lg:mt-[16px]">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</div>
    </div>
    <div class="flex flex-col border-t-[1px] border-b-[1px] border-opacity-30 border-gray divide-y divide-gray divide-opacity-30 mt-[40px] lg:border-t-0 lg:flex-row lg:w-[730px] lg:divide-y-0 lg:mx-auto">
      {#each features as {tab}, i}
        <div on:click={()=>currentIndex = i} class="relative cursor-pointer py-[16px] text-[17px] transition duration-200 text-center {currentIndex===i?'text-blue-dark':'text-gray'} lg:w-1/3 lg:py-[28px]">
          {tab}
          <div class="absolute bottom-0 left-[50%] transform transition duration-200 translate-x-[-50%] bg-red w-[150px] h-[4px] {currentIndex===i?'scale-x-[1]':'scale-x-[0]'} lg:w-full"></div>
        </div>
      {/each}
    </div>
  </Container>

  <div class="relative flex w-[300%] transition duration-200 transform mt-[72px] lg:mt-0" style="transform: translateX(-{currentIndex*100/3}%)">
    {#each features as {img, title, description}}
      <div class="flex flex-col relative overflow-x-hidden overflow-y-hidden w-1/3 lg:py-[128px]">
        <div class="mb-[68px] relative w-full flex flex-col items-center transform lg:absolute lg:left-[0%] lg:top-[50%] lg:translate-y-[-50%] lg:w-[49.05%] lg:items-end">
          <div class="absolute -z-1 bg-blue rounded-r-full left-[0%] top-[18%] h-[100%] w-[90%]"></div>
          <img src="./{img}" class="w-[312px] lg:w-auto lg:h-[346px]" />
        </div>
        <Container class="lg:justify-end lg:flex">
          <div class="lg:w-[40%] flex flex-col lg:items-start">
            <div class="text-blue-dark font-medium text-[24px] leading-[52px] text-center lg:text-[32px] lg:text-left">{title}</div>
            <div class="text-[15px] leading-[25px] text-gray text-center lg:text-[18px] lg:leading-[28px] lg:mt-[16px] lg:text-left">{description}</div>
            <Button class="hidden lg:block lg:mt-[34px]">More Info</Button>
          </div>
        </Container>
      </div>
    {/each}
  </div>
</section>