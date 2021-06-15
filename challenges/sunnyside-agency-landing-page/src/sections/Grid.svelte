<script>
  // component
  import ButtonUnderline from '../components/ButtonUnderline.svelte';
  import IntersectionObserver from '../components/IntersectionObserver.svelte';
</script>

<section class="flex flex-col w-full lg:grid lg:grid-cols-2 lg:items-center">
  <img alt="Transform" src="./mobile/image-transform.jpg" class="lg:hidden" />
  <div class="bg-yellow lg:order-2 hidden lg:block">
    <img alt="Transform" src="./desktop/image-transform.jpg" />
  </div>
  <IntersectionObserver once={true} let:intersecting class="lg:order-1 overflow-hidden">
    <div class="pt-[62px] pb-[49px] px-[24px] flex flex-col items-center lg:items-end transition duration-1000 delay-500 transform {intersecting?'lg:translate-x-0 lg:opacity-100':'lg:translate-x-[-2rem] lg:opacity-0'}">
      <div class="font-serif font-black text-[32px] leading-[40px] text-center lg:text-left lg:text-[40px] lg:w-[532px] lg:leading-[48px] lg:pr-[100px]">Transform your brand</div>
      <div class="text-gray-500 text-center text-[18px] leading-[30px] mt-[22px] lg:text-left lg:w-[532px] lg:text-[17.75px] lg:mt-[32px] lg:pr-[75px]">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</div>
      <ButtonUnderline theme="yellow" class="mt-[18px] lg:mt-[28px] lg:mr-[375px]">Learn More</ButtonUnderline>
    </div>
  </IntersectionObserver>
  <img alt="Stand Out" src="./mobile/image-stand-out.jpg" class="lg:hidden" />
  <div class="bg-red lg:order-3 hidden lg:block">
    <img alt="Stand Out" src="./desktop/image-stand-out.jpg" class="ml-auto" />
  </div>
  <IntersectionObserver once={true} let:intersecting class="lg:order-4 overflow-hidden">
    <div class="pt-[62px] pb-[49px] px-[24px] flex flex-col items-center lg:items-start transition duration-1000 delay-500 transform {intersecting?'lg:translate-x-0 lg:opacity-100':'lg:translate-x-[2rem] lg:opacity-0'}">
      <div class="font-serif font-black text-[32px] leading-[40px] text-center lg:text-left lg:text-[40px] lg:w-[532px] lg:leading-[48px] lg:pl-[86px]">Stand out to the right audience</div>
      <div class="text-gray-500 text-center text-[18px] leading-[30px] mt-[22px] lg:text-left lg:w-[532px] lg:text-[17.75px] lg:mt-[32px] lg:pl-[86px]">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</div>
      <ButtonUnderline theme="red" class="mt-[18px] lg:mt-[28px] lg:ml-[62px]">Learn More</ButtonUnderline>
    </div>
  </IntersectionObserver>
  <div class="bg-cyan flex justify-end lg:order-5">
    <div class="relative text-cyan-dark ml-auto">
      <img alt="Graphic Design" src="./mobile/image-graphic-design.jpg" class="lg:hidden"/>
      <img alt="Graphic Design" src="./desktop/image-graphic-design.jpg" class="hidden lg:block"/>
      <IntersectionObserver once={true} let:intersecting>
        <div class="absolute bottom-0 left-0 w-full px-[20px] pb-[61px] transition duration-1000 delay-500 transform {intersecting?'lg:translate-y-0 lg:opacity-100':'lg:translate-y-[2rem] lg:opacity-0'}">
          <div class="font-serif font-black text-[28px] leading-[40px] text-center">Graphic Design</div>
          <div class="text-center text-[15.5px] leading-[27px] mt-[22px] lg:w-[340px] mx-auto">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention.</div>
        </div>
      </IntersectionObserver>
    </div>
  </div>
  <div class="bg-blue flex lg:order-6">
    <div class="relative text-blue-dark">
      <img alt="Photography" src="./mobile/image-photography.jpg" class="lg:hidden"/>
      <img alt="Photography" src="./desktop/image-photography.jpg" class="hidden lg:block"/>
      <IntersectionObserver once={true} let:intersecting>
        <div class="absolute bottom-0 left-0 w-full px-[20px] pb-[61px] transition duration-1000 delay-500 transform {intersecting?'lg:translate-y-0 lg:opacity-100':'lg:translate-y-[2rem] lg:opacity-0'}">
          <div class="font-serif font-black text-[28px] leading-[40px] text-center">Photography</div>
          <div class="text-center text-[15.5px] leading-[27px] mt-[22px] lg:w-[340px] mx-auto">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</div>
        </div>
      </IntersectionObserver>
    </div>
  </div>
</section>