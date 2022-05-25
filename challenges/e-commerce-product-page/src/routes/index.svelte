<script>
  // imports
  import Carousel from '@components/Carousel.svelte';
  import Description from '@components/Description.svelte';
  import Header from '@components/Header.svelte';
  import Lightbox from '@components/Lightbox.svelte';
  import Main from '@components/Main.svelte';
  import lightboxStore from '@stores/lightbox';

  // handlers
  const keyDownHandler = (e) => {
    const { keyCode } = e;
    if (keyCode === 37) $lightboxStore.index--;
    if (keyCode === 39) $lightboxStore.index++;
  };
</script>

<svelte:head>
  <title>Fall Limited Edition Sneakers - E-Commerce Product Page - Frontendmentor.io</title>
</svelte:head>

<svelte:window on:keydown={keyDownHandler} />

<Main>
  <Header />
  <div
    class="lg:py-[90px] flex flex-col max-w-[1012px] mx-auto lg:items-center lg:space-x-[126px] lg:flex-row"
  >
    <Carousel />
    <Description />
  </div>

  <Lightbox />
</Main>
