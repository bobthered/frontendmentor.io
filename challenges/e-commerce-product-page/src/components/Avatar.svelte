<script>
  // imports
  import { base } from '$app/paths';
</script>

<nav class="">
  <a
    class="p-[8px] mr-[-9px] flex items-center justify-center outline-none rounded-full ring ring-transparent ring-offset-2 ring-offset-orange/0 transtion duration-200 focus:ring-orange/[.3] lg:w-auto lg:h-auto hover:ring-offset-orange lg:p-0"
    href="{base}/"
    on:click|preventDefault
  >
    <img alt="Avatar" class="w-[24px] lg:w-[50px]" src="{base}/image-avatar.png" />
  </a>
</nav>
