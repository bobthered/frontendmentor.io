<script>
  // components
  import IntersectionObserver from "./IntersectionObserver.svelte";
  import Image from "./Image.svelte";

  // props
  export let src;
  export let alt;
</script>

<IntersectionObserver once={true} let:intersecting>
  {#if intersecting}
    <Image {alt} {src} />
  {/if}
</IntersectionObserver>
