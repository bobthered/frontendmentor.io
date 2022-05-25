<script>
  // imports
  import { base } from '$app/paths';
  import lightboxStore from '@stores/lightbox';
  import { onMount } from 'svelte';

  // helpers
  const toggleLightbox = () => ($lightboxStore.show = !$lightboxStore.show);

  // props (internal)
  let classes = {};
  let elem;
  let mounted = false;
  let imageClickHandler;
  let width = 0;

  // props (external)
  export let lightbox = false;

  // props (dynamic)
  $: if (Number.isInteger($lightboxStore.index) && mounted) {
    if ($lightboxStore.index < 0) $lightboxStore.index = 3;
    if ($lightboxStore.index > 3) $lightboxStore.index = 0;
    elem.scrollTo($lightboxStore.index * width, 0);
  }
  $: if (!lightbox) {
    classes = {
      container: 'lg:min-w-[444px] max-w-[444px]',
      controls: {
        common:
          'lg:hidden outline-none pointer-events-auto shadow-sm absolute top-1/2 w-[40px] h-[40px] transform -translate-y-1/2 flex items-center justify-center rounded-full bg-white ring ring-transparent focus:ring-gray-900/[.3]',
        prev: 'left-[1rem]',
        next: 'right-[1rem]'
      },
      image:
        'hidden absolute cursor-pointer rounded-[1rem] top-0 left-0 lg:flex w-full h-full items-center justify-center transition duration-200 bg-orange/[.8] opacity-0 hover:opacity-100',
      thumbnailContainer: 'hidden lg:flex justify-between mt-[34px]'
    };
    imageClickHandler = toggleLightbox;
  }
  $: if (lightbox) {
    classes = {
      container: `min-w-[550px] max-w-[550px] ${
        !$lightboxStore.show ? 'pointer-events-none' : 'pointer-events-auto'
      }`,
      controls: {
        common: `outline-none shadow-xm absolute top-1/2 w-[60px] h-[60px] transform -translate-y-1/2 flex items-center justify-center rounded-full bg-white ring ring-transparent focus:ring-gray-900/[.3] ${
          !$lightboxStore.show ? 'pointer-events-none' : 'pointer-events-auto'
        }`,
        prev: 'left-0 -translate-x-1/2',
        next: 'right-0 translate-x-1/2'
      },
      image: 'hidden',
      thumbnailContainer: 'flex justify-between mt-[34px] max-w-[450px] mx-auto'
    };
    imageClickHandler = () => {};
  }

  // lifecycle
  onMount(() => (mounted = true));
</script>

<div class={classes.container}>
  <div bind:clientWidth={width} class="relative w-full lg:rounded-[1rem]">
    <div class="lg:rounded-[1rem] overflow-hidden">
      <div
        bind:this={elem}
        class="flex snap-x scroll-smooth snap-mandatory overflow-x-auto lg:overflow-hidden"
      >
        {#each Array(4) as _, i}
          <img
            alt="Product Image {i + 1}"
            class="snap-center"
            src="{base}/image-product-{i + 1}.jpg"
          />
        {/each}
      </div>
    </div>
    <div
      class="absolute z-[1] top-0 left-0 w-full h-full flex justify-between items-center pointer-events-none"
    >
      <button
        class="{classes.controls.common} {classes.controls.prev}"
        on:click={() => {
          $lightboxStore.index--;
        }}
      >
        <img alt="Previous" class="" src="{base}/icon-previous.svg" />
      </button>
      <button
        class="{classes.controls.common} {classes.controls.next}"
        on:click={() => {
          $lightboxStore.index++;
        }}
      >
        <img alt="Next" class="" src="{base}/icon-next.svg" />
      </button>
    </div>
    <div class={classes.image} on:click={imageClickHandler}>
      <img alt="Enlarge" class="pointer-events-none w-[64px]" src="{base}/icon-eye.svg" />
    </div>
  </div>
  <div class={classes.thumbnailContainer}>
    {#each Array(4) as _, i}
      <div
        class="w-[88px] relative group block rounded-[.375rem] transition duration-200 ring ring-transparent {$lightboxStore.index ===
        i
          ? 'ring-orange'
          : 'cursor-pointer'}"
        on:click={() => {
          $lightboxStore.index = i;
        }}
      >
        <img
          alt="Product Image {i + 1}"
          class="w-full rounded-[.375rem]"
          src="{base}/image-product-{i + 1}-thumbnail.jpg"
        />
        <div
          class="absolute top-0 left-0 w-full h-full rounded-[.375rem] bg-white transition duration-200 {$lightboxStore.index ===
          i
            ? 'opacity-[.5]'
            : 'opacity-0 group-hover:opacity-[.5]'}"
        />
      </div>
    {/each}
  </div>
</div>
