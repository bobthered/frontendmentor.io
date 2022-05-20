<script>
  // imports
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Order Summary Component - Frontendmentor.io</title>
</svelte:head>

<img
  src="{base}/pattern-background-mobile.svg"
  alt="Background"
  class="select-none fixed top-0 left-0 w-full z-[-1] lg:hidden"
/>
<img
  src="{base}/pattern-background-desktop.svg"
  alt="Background"
  class="select-none fixed top-0 left-0 w-full z-[-1] hidden lg:block"
/>
<main class="w-screen h-screen flex items-center justify-center p-[1.5rem]">
  <div
    class="w-full bg-white rounded-[1.5rem] flex flex-col shadow-xl shadow-gray-500 max-w-[450px]"
  >
    <img src="{base}/illustration-hero.svg" alt="Dancing" class="rounded-t-[1.5rem] select-none" />
    <div class="flex flex-col space-y-[1rem] p-[1.5rem] lg:p-[3rem]">
      <h1
        class="text-gray-900 font-bold text-center text-[1.5rem] leading-[1.5rem] lg:text-[1.875rem] lg:leading-[1.875rem]"
      >
        Order Summary
      </h1>
      <p class="text-[15px] text-center px-[1rem] lg:text-[1rem]">
        You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you
        like!
      </p>
      <div class="rounded-[1rem] bg-gray-50 p-[1rem] flex jusity-between items-center">
        <div class="flex items-center space-x-[1rem] flex-grow">
          <div class="rounded-full bg-gray-300 p-[0rem] select-none">
            <img src="{base}/icon-music.svg" alt="Music" />
          </div>
          <div class="flex flex-col space-y-[0rem] text-[.875rem]">
            <div class="text-gray-900 font-bold">Annual Plan</div>
            <div class="">$59.99/year</div>
          </div>
        </div>
        <a
          href="{base}/"
          on:submit|preventDefault
          class="outline-none text-purple-500 underline decoration-solid decoration-purple-500 transition duration-200 text-[.875rem] rounded-[1rem] ring ring-transparent font-bold hover:decoration-purple-500/0 hover:text-purple-400 focus:ring-purple-500/[.3]"
          >Change</a
        >
      </div>
      <div class="flex flex-col space-y-[.5rem] lg:space-y-[1rem]">
        <button
          class="outline-none rounded-[1rem] p-[1rem] bg-purple-500 text-white font-black transition duration-200 ring ring-transparent shadow-xl shadow-purple-500/[.3] selection:bg-white selection:text-purple-500 hover:bg-purple-400 focus:bg-purple-400 focus:ring-purple-500/[.3]"
          >Proceed to Payment</button
        >
        <button
          class="outline-none rounded-[1rem] p-[1rem] bg-transparent text-gray-500 font-black transition duration-200 ring ring-transparent hover:text-gray-900 focus:text-gray-900 focus:ring-gray-900/[.3]"
          >Cancel Order</button
        >
      </div>
    </div>
  </div>
</main>
