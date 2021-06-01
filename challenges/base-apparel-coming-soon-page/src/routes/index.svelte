<script>
  // css
  import "../css/style.css";
</script>

<svelte:head>
  <title>Base Apparel Coming Soon Page - Frontendmentor.io</title>
</svelte:head>

<main class="flex flex-col font-josefin-sans items-center">
  <div
    class="hidden fixed top-0 left-0 w-screen h-screen lg:block bg-cover"
    style="background-image:url(./bg-pattern-desktop.svg); z-index:-1" />
  <img
    src="./hero-desktop.jpg"
    class="hidden top-0 right-0 min-h-screen fixed lg:block" />
  <div class="flex flex-col lg:w-[1175px] lg:items-start">
    <header class="px-8 py-8 lg:py-16">
      <img class="w-[6.25rem] lg:w-[10rem]" src="./logo.svg" alt="Logo" />
    </header>
    <img src="./hero-mobile.jpg" class="lg:hidden" />
    <div class="flex flex-col items-center px-8 py-[4rem] lg:items-start">
      <div
        class="flex flex-col text-[2.5rem] leading-[2.625rem] tracking-[.25em] uppercase text-center lg:text-left lg:text-[4.1rem] lg:leading-[4.25rem] lg:w-[20rem] lg:mt-[.5rem]">
        <div class="font-light text-red-1">We're</div>
        <div class="font-bold">Coming Soon</div>
      </div>
      <div
        class="text-red-1 text-[.875rem] text-center mt-[1rem] lg:text-left lg:text-[1rem] lg:w-[27.75rem] lg:mt-[1.25rem] lg:leading-[1.75rem]">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </div>
      <form
        class="rounded-full ring ring-1 ring-red-1 w-full mt-[2.25rem] flex flex-row lg:mt-[2.6rem]"
        on:submit|preventDefault>
        <input
          type="email"
          class="flex-grow py-3 px-6 bg-transparent text-red-1 placeholder-red-1 placeholder-opacity-50 outline-none text-[.875rem] lg:px-[2rem] lg:py-[1rem]"
          placeholder="Email Address" />
        <button
          type="submit"
          class="bg-gradient-to-r rounded-full px-6 from-gradient-from to-gradient-to lg:px-[2.7rem]"
          style="box-shadow:0 1rem 2rem 0 hsl(0,36%,70%)"><img
            src="./icon-arrow.svg"
            alt="Arrow" /></button>
      </form>
    </div>
  </div>
</main>
