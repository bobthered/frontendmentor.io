<script>
  // components
  import Facebook from '../components/IconFacebook.svelte';
  import Instagram from '../components/IconInstagram.svelte';
  import Twitter from '../components/IconTwitter.svelte';

  // css
  import '../css/style.css';

  // props
  const socialIcons = [Facebook, Twitter, Instagram]
</script>

<svelte:head>
  <title>Huddle Landing Page with a Single Introductory Section - Frontendmentor.io</title>
</svelte:head>

<!-- <img src="./design/desktop-design.jpg" class="fixed top-0 left-0 w-[1440px] h-[800px] -z-1" /> -->

<main class="flex flex-col text-white items-center justify-center min-h-screen">
  <div class="fixed top-0 left-0 w-screen h-screen -z-1 bg-violet bg-cover lg:hidden" style="background-image:url(./bg-mobile.svg)"></div>
  <div class="fixed top-0 left-0 w-screen h-screen -z-1 bg-violet bg-cover hidden lg:block" style="background-image:url(./bg-desktop.svg)"></div>
  <div class="w-full flex flex-col px-[2.3rem] py-[2rem] items-center lg:w-[1376px] lg:py-0">
    <img src="./logo.svg" class="w-[8rem] self-start lg:w-[13.5rem]" />
      <div class="flex flex-col items-center lg:flex-row lg:space-x-[3.5rem] lg:items-start">
        <img src="./illustration-mockups.svg" class="mt-[3.75rem]" />
      <div class="flex flex-col items-center lg:mt-[4rem] lg:w-[520px] lg:items-start">
        <div class="text-center font-heading text-[1.5rem] leading-[2rem] font-semibold mt-[4rem] lg:text-[2.5rem] lg:leading-[3.75rem] lg:text-left">Build The Community Your Fans Will Love</div>
        <div class="text-center mt-[1rem] lg:text-left lg:text-[1.125rem] lg:mt-[1.5rem]">Huddle re-imagines the way we build communities.  You have a voice, but so does your audience.  Create connections with your users as you engage in genuine discussion.</div>
        <a href="#" class="rounded-full px-[4.8rem] py-[.75rem] text-[.75rem] text-violet bg-white shadow-lg transition duration-200 mt-[1.5rem] hover:text-white hover:bg-magenta lg:text-[1.125rem] lg:mt-[1.3rem] lg:px-[3.75rem] lg:py-[.9rem]">Register</a>
      </div>
    </div>
    <div class="flex space-x-[.75rem] mt-[4rem] lg:self-end lg:mt-[3rem] lg:space-x-[1.1rem]">
      {#each socialIcons as component}
        <a href="#" class="rounded-full p-[.4rem] border border-white transition duration-200 text-white hover:text-magenta hover:border-magenta lg:p-[.65rem]">
          <svelte:component this={component} class="w-[.75rem] h-[.75rem] lg:w-[1.1rem] lg:h-[1.1rem]" />
        </a>
      {/each}
    </div>
  </div>
</main>