<script>
  // imports
  import { base } from '$app/paths';
  import { slide } from 'svelte/transition';
</script>

<div
  class="rounded-[.75rem] p-[18px] bg-red text-orange flex justify-between items-center lg:p-[32px]"
  transition:slide
>
  <div class="flex flex-col space-y-[.25rem] selection:bg-orange selection:text-red">
    <div class="lg:text-[18px]">My balance</div>
    <div class="font-bold text-[1.625rem] lg:text-[2rem]">$921.48</div>
  </div>
  <img alt="Logo" class="select-none w-[60px] lg:w-auto" src="{base}/logo.svg" />
</div>
