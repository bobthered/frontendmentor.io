<script>
  // imports
  import { base } from '$app/paths';
  import Clients from '@components/Clients.svelte';
  import Header from '@components/Header.svelte';
</script>

<svelte:head>
  <title>Intro Section with Dropdown Navigation - Frontendmentor.io</title>
</svelte:head>

<main class="flex flex-col relative">
  <Header />
  <div class="flex flex-col lg:flex-row lg:mx-auto lg:max-w-[1180px] lg:py-[48px] lg:items-end">
    <img alt="Hero" class="py-[5px] lg:hidden lg:order-1" src="{base}/image-hero-mobile.png" />
    <img
      alt="Hero"
      class="w-[480px] hidden lg:block lg:order-3"
      src="{base}/image-hero-desktop.png"
    />
    <div
      class="flex flex-col items-center space-y-[1.5rem] px-[1rem] py-[52px] lg:order-2 lg:px-0 lg:items-start lg:pl-[35px] lg:space-y-[6.4375rem] lg:py-0"
    >
      <div
        class="flex flex-col space-y-[1.5rem] items-center lg:items-start lg:space-y-[3.4375rem]"
      >
        <h1 class="font-bold text-[2.20rem] leading-[1.5rem] lg:text-[78px] lg:leading-[80px]">
          Make <br class="hidden lg:block" /> remote work
        </h1>
        <p
          class="text-gray-500 text-center text-[1rem] leading-[1.625rem] lg:pr-[200px] lg:text-left lg:text-[18px]"
        >
          Get your team in sync, no matter your location. Streamline processes, create team rituals,
          and watch productivity soar.
        </p>
        <button
          class="rounded-[1rem] py-[.75rem] px-[1.375rem] lg:px-[28px] transition duration-200 font-bold bg-gray-900 text-gray-50 outline-none ring-offset-1 ring-offset-gray-900 ring ring-transparent hover:bg-transparent focus:bg-transparent hover:text-gray-900 focus:text-gray-900 focus:ring-gray-900/[.3] lg:text-[18px] "
          >Learn more</button
        >
      </div>
      <Clients />
    </div>
  </div>
</main>
