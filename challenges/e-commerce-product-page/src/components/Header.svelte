<script>
  // imports
  import Avatar from '@components/Avatar.svelte';
  import Cart from '@components/Cart.svelte';
  import Logo from '@components/Logo.svelte';
  import Nav from '@components/Nav.svelte';
</script>

<header class="flex items-center bg-white sticky top-0 relative z-[2] px-[24px]">
  <div
    class="flex items-center flex-grow max-w-[1110px] mx-auto lg:border-b lg:border-gray-300 pt-[11px] pb-[17px] lg:py-0"
  >
    <div class="flex items-center flex-grow relative">
      <Nav />
      <Logo />
    </div>
    <div class="flex items-center">
      <Cart />
      <Avatar />
    </div>
  </div>
</header>
