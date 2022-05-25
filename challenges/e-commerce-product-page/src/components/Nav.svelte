<script>
  // imports
  import { base } from '$app/paths';

  // helpers
  const toggleNav = () => (showNav = !showNav);

  // props (internal)
  const links = ['Collections', 'Men', 'Women', 'About', 'Contact'];
  let showNav = false;
</script>

<nav class="lg:order-2">
  <a
    class="w-[40px] h-[40px] ml-[-12px] flex items-center justify-center outline-none rounded-[.25rem] ring ring-transparent transtion duration-200 focus:ring-orange/[.3] lg:hidden"
    href="{base}/"
    on:click|preventDefault={toggleNav}
  >
    <img alt="Menu" class="w-[16px]" src="{base}/icon-menu.svg" />
  </a>
  <div
    class="fixed top-0 left-0 w-screen h-screen z-[2] bg-black/[.7] transition duration-200 {!showNav
      ? 'opacity-0 pointer-events-none'
      : 'opacity-100 pointer-events-auto'}"
    on:click={toggleNav}
  />
  <aside
    class="bg-white fixed top-0 left-0 z-[999] min-w-[250px] flex flex-col min-h-screen px-[12px] py-[11px] transition duration-200 transform {!showNav
      ? '-translate-x-full'
      : 'translate-x-0'}"
  >
    <a
      class="w-[40px] h-[40px] flex items-center justify-center outline-none rounded-[.25rem] ring ring-transparent transtion duration-200 focus:ring-orange/[.3]"
      href="{base}/"
      on:click|preventDefault={toggleNav}
    >
      <img alt="Close" class="w-[16px]" src="{base}/icon-close.svg" />
    </a>
    <div class="flex flex-col mt-[28px]">
      {#each links as link}
        <a
          class="font-bold text-[18px] leading-[28px] px-[12px] py-[9px] transition duration-200 outline-none ring ring-transparent focus:ring-orange/[.3] rounded-[.25rem]"
          href="{base}/"
          on:click|preventDefault>{link}</a
        >
      {/each}
    </div>
  </aside>
  <div class="hidden lg:flex ml-[40px]">
    {#each links as link}
      <a
        class="text-[15px] text-gray-500 leading-[28px] px-[16.5px] py-[40px] transition duration-200 outline-none border-b-[4px] border-transparent hover:border-orange hover:text-gray-900 focus:border-orange focus:text-gray-900"
        href="{base}/"
        on:click|preventDefault>{link}</a
      >
    {/each}
  </div>
</nav>
