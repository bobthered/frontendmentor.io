<script>
  // _imports
  import { onMount } from "svelte";

  // props
  export let bottom = 0;
  let container;
  let intersecting = false;
  export let left = 0;
  export let once = false;
  export let right = 0;
  export let top = 0;

  onMount(() => {
    if (typeof IntersectionObserver !== "undefined") {
      const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;

      const observer = new IntersectionObserver(
        (entries) => {
          intersecting = entries[0].isIntersecting;
          if (intersecting && once) {
            observer.unobserve(container);
          }
        },
        {
          rootMargin,
        }
      );

      observer.observe(container);
      return () => observer.unobserve(container);
    }
  });
</script>

<div bind:this={container} class="relative w-full h-full">
  <slot {intersecting} />
</div>
