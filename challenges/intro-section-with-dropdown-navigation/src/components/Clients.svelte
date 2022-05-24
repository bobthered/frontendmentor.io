<script>
  // imports
  import { base } from '$app/paths';

  // props (internal)
  const clients = [
    { alt: 'databiz', classes: 'w-[82px]' },
    { alt: 'audiophile', classes: 'w-[52px]' },
    { alt: 'meet', classes: 'w-[66px]' },
    { alt: 'maker', classes: 'w-[59px]' }
  ];
</script>

<div
  class="flex items-center justify-between w-full py-[1.5rem] lg:py-0 lg:justify-start lg:space-x-[40px]"
>
  {#each clients as { alt, classes }}
    <img {alt} class="{classes} lg:w-auto" src="{base}/client-{alt}.svg" />
  {/each}
</div>
