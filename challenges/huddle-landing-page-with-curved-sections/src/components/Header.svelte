<script>
  // components
  import Button from './Button.svelte';
</script>

<header class="flex w-full justify-center absolute top-0 left-0 py-[24px] z-20 lg:py-[78px]">
  <div class="w-full mx-auto px-[1.5rem] lg:w-[1340px]">
    <div class="flex justify-between items-center">
      <img src="./logo.svg" class="w-[96px] lg:w-[242px]" />
      <Button on:click={e=>e.preventDefault()} size="small" theme="outline">Try it Free</Button>
    </div>
  </div>
</header>