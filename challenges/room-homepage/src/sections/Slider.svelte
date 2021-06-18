<script>
  // components
  import Button from '../components/Button.svelte';
  import Section from '../components/Section.svelte';
  import Slider from '../components/Slider.svelte';

  // handlers
  const prevHandler = () => {
    controller.previous();
  }
  const nextHandler = () => {
    controller.next();
  }

  // props ( internal )
  const config = {
    autoPlay : false,
    pageDots: false,
    prevNextButtons : false,
  }
  let controller;
  const slides = [
    {title:'Discover innovative ways to decorate', description:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."},
    {title:'We are available all across the globe', description:"With stores all over the world. it's easy for you to find furniture for your home or place of business. Locally we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."},
    {title:'Manufactured with the best materials', description:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."},
  ]
</script>

<Section padding="p-0" position="relative">
  <Slider bind:controller {...config}>
    {#each slides as {title, description}, i}
      <div class="flex flex-col w-full lg:grid lg:grid-cols-hero">
        <img alt="Hero {i+1}" src="./mobile-image-hero-{i+1}.jpg" class="lg:hidden" />
        <img alt="Hero {i+1}" src="./desktop-image-hero-{i+1}.jpg" class="hidden object-cover w-full m-0 p-0 lg:inline-block" />
        <div class="px-[32px] pt-[72px] pb-[38px] flex flex-col lg:px-[100px] lg:py-[120px]">
          <div class="text-[26px] leading-[32px] font-semibold lg:text-[37px] lg:leading-[44px]">{title}</div>
          <div class="text-gray text-[11.55px] leading-[20px] mt-[16px] lg:mt-[24px]">{description}</div>
          <Button class="mt-[40px] lg:mt-[22px]">Shop Now</Button>
        </div>
      </div>
    {/each}
  </Slider>
  <div class="absolute top-[96vw] transform translate-y-[-100%] right-[0] flex lg:top-auto lg:right-auto lg:left-[58.333333333333333333333333333333%] lg:translate-y-0 lg:bottom-0">
    <button on:click={prevHandler} class="bg-black py-[19px] px-[23px] ring ring-opacity-0 ring-black transition duration-200 hover:bg-gray-dark focus:ring-opacity-30 focus:outline-none lg:px-[33px] lg:py-[28px]"><img alt="Previous" src="./icon-angle-left.svg" class="w-[10px] lg:w-auto" /></button>
    <button on:click={nextHandler} class="bg-black py-[19px] px-[23px] ring ring-opacity-0 ring-black transition duration-200 hover:bg-gray-dark focus:ring-opacity-30 focus:outline-none lg:px-[33px] lg:py-[28px]"><img alt="Next" src="./icon-angle-right.svg" class="w-[10px] lg:w-auto" /></button>
  </div>
</Section>