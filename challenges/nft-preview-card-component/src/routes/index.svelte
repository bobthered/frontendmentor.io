<script>
  // imports
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>NFT Preview Card Component - Frontendmentor.io</title>
</svelte:head>

<main class="w-screen h-screen flex items-center justify-center p-[1.5rem] opacity-[1]">
  <div
    class="rounded-[1.5rem] p-[1.5rem] bg-blue-800/[100] flex flex-col space-y-[1.5rem] shadow-2xl shadow-blue-900 w-full lg:max-w-[350px]"
  >
    <a href="{base}/" on:click|preventDefault class="group rounded overflow-hidden relative">
      <img src="{base}/image-equilibrium.jpg" alt="Equilibrium" class="w-full" />
      <div
        class="absolute top-0 left-0 w-full h-full transition duration-200 flex items-center justify-center bg-cyan/[.8] opacity-[0] group-hover:opacity-[1]"
      >
        <img src="{base}/icon-view.svg" alt="View" class="select-none" />
      </div>
    </a>
    <a
      href="{base}/"
      on:click|preventDefault
      class="text-[1.5rem] leading-[1.5rem] font-bold text-white underline-none transition duration-200 hover:text-cyan"
      >Equilibrium #3429</a
    >
    <p class="">Our equilibrium collection promotes balance and calm.</p>
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-[.5rem] text-cyan">
        <img src="{base}/icon-ethereum.svg" alt="Ethereum" />
        <span class="font-bold">0.041 ETH</span>
      </div>
      <div class="flex items-center space-x-[.5rem]">
        <img src="{base}/icon-clock.svg" alt="Clock" />
        <span>3 days left</span>
      </div>
    </div>
    <div class="w-full bg-blue-700 h-[1px] block" />
    <div class="flex items-center space-x-[1rem]">
      <img
        src="{base}/image-avatar.png"
        alt="Avatar"
        class="rounded-full w-[2rem] ring-1 ring-white"
      />
      <div>
        Creation of <a
          href="{base}/"
          class="text-white no-underline inline-block transition duration-200 hover:text-cyan"
          >Jules Wyvern</a
        >
      </div>
    </div>
  </div>
</main>
