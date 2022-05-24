<script>
  // imports
  import { base } from '$app/paths';
  import { slide } from 'svelte/transition';

  // handlers
  const toggleNav = () => (showNav = !showNav);

  // props (internal)
  const links = [
    {
      open: false,
      text: 'Features',
      subnav: [
        { icon: 'icon-todo', text: 'Todo List' },
        { icon: 'icon-calendar', text: 'Calendar' },
        { icon: 'icon-reminders', text: 'Reminders' },
        { icon: 'icon-planning', text: 'Planning' }
      ]
    },
    {
      open: false,
      text: 'Company',
      subnav: [{ text: 'History' }, { text: 'Our Team' }, { text: 'Blog' }]
    },
    { text: 'Careers' },
    { text: 'About' }
  ];
  let showNav = false;
</script>

<nav class="flex items-center justify-end flex-grow">
  <a
    class="py-[.4375rem] outline-none ring ring-transparent focus:ring-gray-900/[.3] lg:hidden"
    href="{base}/"
    on:click|preventDefault={toggleNav}
  >
    <img alt="Menu" class="" src="{base}/icon-menu.svg" />
  </a>
  <div
    on:click={toggleNav}
    class="fixed top-0 left-0 w-screen h-screen transition duration-200 bg-black/[.7] z-[1] lg:hidden lg:opacity-0 lg:pointer-events-none {showNav
      ? 'opacity-100 pointer-events-auto'
      : 'opacity-0 pointer-events-none'}"
  />
  <aside
    class="fixed top-0 right-0 bg-gray-50 flex flex-col transition duration-200 transform min-h-screen px-[1.5rem] py-[19px] min-w-[240px] space-y-[1rem] z-[1] lg:relative lg:right-auto lg:translate-x-0 lg:min-w-0 lg:flex-grow lg:bg-transparent lg:py-0 lg:px-0 lg:space-y-0 lg:flex-row lg:justify-between lg:min-h-0 {showNav
      ? 'translate-x-0'
      : 'translate-x-full'}"
  >
    <a
      class="self-end outline-none ring ring-transparent focus:ring-gray-900/[.3] lg:hidden"
      href="{base}/"
      on:click|preventDefault={toggleNav}
    >
      <img alt="Close Menu" class="" src="{base}/icon-close-menu.svg" />
    </a>
    <div
      class="flex flex-col pt-[9px] pb-[6px] lg:p-0 lg:flex-row lg:text-[14px] lg:space-x-[34px]"
    >
      {#each links as { text, open = false, subnav = undefined }}
        {#if subnav !== undefined}
          <div class="flex flex-col space-y-[1rem] lg:relative">
            <a
              href="{base}/"
              on:click|preventDefault={() => (open = !open)}
              class="flex space-x-[1rem] py-[9px] items-center outline-none text-gray-500 transition duration-200 ring ring-transparent hover:text-gray-900 focus:text-gray-900 focus:ring-gray-900/[.3]"
            >
              <div>
                {text}
              </div>
              {#if subnav !== undefined}
                <img
                  alt="Arrow"
                  class="transition duration-200 transform {open ? 'rotate-180' : 'rotate-0'}"
                  src="{base}/icon-arrow-down.svg"
                />
              {/if}
            </a>
            {#if open}
              <div
                class="flex flex-col py-[2px] lg:absolute lg:left-0 lg:bottom-[-10px] lg:transform lg:translate-y-full lg:bg-gray-50 lg:rounded-[1rem] lg:shadow-xl lg:shadow-gray-900/[.1] lg:p-[8px]"
                transition:slide
              >
                {#if subnav !== undefined}
                  {#each subnav as item}
                    <a
                      href="{base}/"
                      class="flex items-center space-x-[1rem] px-[1.5rem] py-[8.5px] transition duration-200 text-gray-500 outline-none ring ring-transparent hover:text-gray-900 focus:text-gray-900 focus:ring-gray-900/[.3]"
                    >
                      {#if item.hasOwnProperty('icon')}
                        <img alt={item.text} class="w-[18px]" src="{base}/{item.icon}.svg" />
                      {/if}
                      <div class="text-[16.5px] whitespace-nowrap lg:text-[14px]">{item.text}</div>
                    </a>
                  {/each}
                {/if}
              </div>
            {/if}
          </div>
        {/if}
        {#if subnav === undefined}
          <a
            on:click|preventDefault
            href="{base}/"
            class="flex flex-col py-[9px] space-y-[1rem] outline-none text-gray-500 transition duration-200 ring ring-transparent hover:text-gray-900 focus:text-gray-900 focus:ring-gray-900/[.3]"
          >
            {text}
          </a>
        {/if}
      {/each}
    </div>
    <div
      class="flex flex-col space-y-[6px] lg:flex-row lg:items-center lg:space-y-0 lg:space-x-[20px]"
    >
      <button
        class="px-[22px] text-[14px] rounded-[10px] ring ring-transparent outline-none transition duration-200 py-[9px] text-gray-500 hover:text-gray-900 focus:text-gray-900 focus:ring-gray-900/[.3]"
        >Login</button
      >
      <button
        class="px-[22px] text-[14px] rounded-[10px] ring ring-transparent outline-none ring-offset-1 transition duration-200 ring-offset-gray-500 py-[9px] text-gray-500 hover:text-gray-900 focus:text-gray-900 focus:ring-offset-gray-900 focus:ring-gray-900/[.3]"
        >Register</button
      >
    </div>
  </aside>
</nav>
