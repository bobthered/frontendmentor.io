<script>
  // _imports
  import { onMount } from 'svelte';

  // css
  import 'flickity/css/flickity.css';

  // props ( external )
  export let autoPlay = true;
  export let initialIndex = 0;
  export let pageDots = true;
  export let prevNextButtons = true;
  export let wrapAround = true;

  // props ( internal )
  let controller;
  let elem;

  onMount(async () => {
    const response = await import('flickity');
    const Flickity = response.default
    controller = new Flickity(elem, {
      autoPlay,
      initialIndex,
      pageDots,
      prevNextButtons,
      wrapAround,
    });
  })
</script>

<style>
  :global(.flickity-page-dots) {
    bottom: 44px;
  }
  :global(.flickity-page-dots .dot) {
    background-color: transparent;
    border:1px solid hsl(12,88%,59%);
    height:8px;
    margin:0 2.5px;
    width:8px;
  }
  :global(.flickity-page-dots .dot.is-selected) {
    background-color:hsl(12,88%,59%);
  }
  @media (min-width: 1440px) {
    :global(.flickity-page-dots) {
      display:none;
    }
  }
</style>

<div bind:this={elem} class={$$props.class !== undefined ? $$props.class : ''}>
  <slot/>
</div>