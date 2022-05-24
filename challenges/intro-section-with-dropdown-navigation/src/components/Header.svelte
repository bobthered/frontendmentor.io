<script>
  // imports
  import { base } from '$app/paths';
  import Nav from '@components/Nav.svelte';
</script>

<header
  class="flex items-center px-[1rem] py-[19px] lg:px-[2.5rem] lg:py-[22px] lg:sticky lg:top-0 bg-gray-50"
>
  <img alt="snap" class="lg:mt-[8px] lg:mr-[63px]" src="{base}/logo.svg" />
  <Nav />
</header>
