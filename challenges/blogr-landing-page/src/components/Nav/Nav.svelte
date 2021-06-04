<script>
  // components
  import { Arrow } from "../Icons";
  import { Button } from "../Button";

  // handlers
  const setCurrent = (title) => (current = current === title ? "" : title);

  // props
  import links from './links.js';
  let current = "";
  export let show = true;
  $: classes = show
    ? "opacity-100 pointer-events-auto translate-y-0"
    : "opacity-0 pointer-events-none -translate-y-4";
</script>

<nav
  class="absolute top-0 left-0 transition duration-200 w-full mt-[8rem] px-[1.5rem] transform {classes} lg:relative lg:mt-0 lg:opacity-100 lg:pointer-events-auto lg:p-0 lg:flex-grow lg:translate-y-0">
  <div
    class="flex flex-col bg-white bg-opacity-100 items-center p-[2rem] rounded shadow-xl w-full space-y-[1.5rem] lg:bg-transparent lg:flex-row lg:shadow-none lg:space-y-0 lg:flex-grow lg:p-0 lg:justify-between">
    <div
      class="flex flex-col space-y-[1.5rem] w-full lg:space-y-0 lg:flex-row lg:w-auto lg:space-x-[1.5rem]">
      {#each links as { title, submenu }}
        <a
          href="#"
          on:click|preventDefault={() => setCurrent(title)}
          class="text-body font-semibold text-[1.15rem] items-center space-y-[1.5rem] justify-center flex flex-col w-full text-center hover:underline lg:text-white lg:space-y-0 lg:relative">
          <div class="flex space-x-[.5rem] items-center">
            <div>{title}</div>
            <div class="text-cta-light transform transition duration-200 lg:text-white {title===current?'rotate-180':'rotate-0'}">
              <Arrow />
            </div>
          </div>
        <div
        class="w-full rounded flex flex-col p-[2rem] bg-gray-200 space-y-[1rem] transform {current === title ? 'block' : 'hidden'} lg:absolute lg:top-[2rem] lg:left-0 lg:-translate-x-0 lg:w-[12rem] lg:shadow-xl lg:bg-white">
        {#each submenu as subtitle}
          <a
            href="#"
            on:click|preventDefault
            class="text-body font-semibold w-full text-[1rem] text-center lg:text-left">{subtitle}</a>
        {/each}
      </div>
        </a>
      {/each}
    </div>
    <div class="w-full h-px bg-gray-200 lg:hidden" />
    <div class="flex flex-col w-[10rem] space-y-[.5rem] lg:w-[15rem] lg:flex-row lg:space-y-0 lg:space-x-[.5rem]">
      <Button theme="header-secondary">Login</Button>
      <Button theme="header-primary">Sign Up</Button>
    </div>
  </div>
</nav>
