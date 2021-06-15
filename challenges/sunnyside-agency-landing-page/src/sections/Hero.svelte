<script>
  // component
  import Container from '../components/Container.svelte';
</script>

<section class="relative pt-[145px] pb-[134px] text-white lg:pt-[206px] lg:pb-[330px]">
  <img alt="Header" src="./mobile/image-header.jpg" class="absolute bottom-0 left-[50%] transform translate-x-[-50%] w-full h-full object-cover -z-1 lg:hidden" />
  <img alt="Header" src="./desktop/image-header.jpg" class="hidden absolute bottom-0 left-[50%] transform translate-x-[-50%] w-full h-full object-cover -z-1 lg:block" />
  <Container>
    <div class="flex flex-col items-center">
      <div class="font-serif text-center text-[40px] leading-[48px] uppercase tracking-wide lg:text-[56px]">We are Creatives</div>
      <img alt="Arrow" src="./icon-arrow-down.svg" class="mt-[50px] lg:mt-[104px]" />
    </div>
  </Container>
</section>