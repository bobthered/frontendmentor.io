<script>
  // imports
  import { base } from '$app/paths';
  import Carousel from '@components/Carousel.svelte';
  import lightboxStore from '@stores/lightbox';

  // helpers
  const toggleLightbox = () => ($lightboxStore.show = !$lightboxStore.show);
</script>

<div
  class="fixed top-0 left-0 w-screen h-screen z-[2] bg-black/[.7] transition duration-100 {!$lightboxStore.show
    ? 'opacity-0 pointer-events-none'
    : 'opacity-100 pointer-events-auto'}"
  on:click={toggleLightbox}
/>
<div
  class="fixed top-0 pointer-events-none left-0 w-screen h-screen z-[2] flex items-center justify-center transition duration-100 {!$lightboxStore.show
    ? 'opacity-0'
    : 'opacity-100'}"
>
  <div
    class="flex flex-col {!$lightboxStore.show
      ? 'opacity-0 pointer-events-none'
      : 'opacity-100 pointer-events-auto'}"
  >
    <button
      class="outline-none self-end w-[40px] h-[40px] mr-[-8px] rounded-[.25rem] transition duration-200 ring ring-transparent flex items-center justify-center focus:ring-orange/[.3]"
      on:click={toggleLightbox}
    >
      <img alt="Close" class="w-[24px]" src="{base}/icon-close-lightbox.svg" />
    </button>
    <Carousel lightbox={true} />
  </div>
</div>
