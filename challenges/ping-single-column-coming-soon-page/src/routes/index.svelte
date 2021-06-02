<script>
  // components
  import Facebook from "../components/IconFacebook.svelte";
  import Instagram from "../components/IconInstagram.svelte";
  import Twitter from "../components/IconTwitter.svelte";

  // css
  import "../css/style.css";

  // handlers
  const submitHandler = (e) => {
    valid = false;
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    )
      valid = true;
      console.log(valid);
  };

  // props
  let email = "";
  let socialIcons = [Facebook, Twitter, Instagram];
  let valid = false;
  $: inputClass = valid
    ? "border-blue placeholder-blue ring-blue"
    : "border-red placeholder-red ring-red";
</script>

<svelte:head>
  <title>Ping Single Column Coming Soon Page - Frontendmentor.io</title>
</svelte:head>

<main
  class="bg-white flex flex-col px-[1.75rem] py-[5.25rem] items-center">
  <img src="./logo.svg" class="w-[3.4rem] lg:w-[5.5rem]" />
  <div class="text-center text-[1.4rem] mt-[2.25rem] lg:text-[3rem] lg:mt-[2.6rem]">
    We are launching
    <span class="font-bold">soon!</span>
  </div>
  <div class="text-center text-[.75rem] mt-[.8rem] lg:text-[1.25rem] lg:mt-[.5rem]">
    Subscribe and get notified
  </div>
  <form
    on:submit|preventDefault={submitHandler}
    class="flex flex-col w-[280px] mt-[2rem] space-y-[.75rem] lg:flex-row lg:space-y-0 lg:space-x-[1rem] lg:w-[638px] lg:mt-[2.25rem] items-start">
    <div class="flex flex-col lg:flex-grow space-y-[.25rem]">
      <input
        type="email"
        placeholder="Your email address..."
        bind:value={email}
        class="bg-transparent rounded-full border px-[2rem] py-[.55rem] text-black text-[.75rem] transition duration-200 outline-none ring ring-opacity-0 {inputClass} hover:border-opacity-75 focus:ring-opacity-30 lg:flex-grow lg:text-[1rem] lg:py-[1rem]" />
      {#if !valid}
      <div class="text-center text-red text-[.75rem] lg:pl-[2rem] lg:text-left">Please provide a valid email address</div>
      {/if}
    </div>
    <button
      type="submit"
      class="bg-blue border border-blue text-white rounded-full px-[2rem] py-[.55rem] text-[.75rem] shadow outline-none transition duration-200 ring ring-blue ring-opacity-0 whitespace-nowrap focus:outline-none hover:opacity-75 focus:ring-opacity-30 lg:text-[1rem] lg:py-[1rem] lg:px-[3.9rem]">Notify
      Me</button>
  </form>
  <img class="mt-[4.5rem] lg:w-[638px] lg:mt-[5.25rem]" src="./illustration-dashboard.png" />
  <div class="flex space-x-[.75rem] mt-[7.5rem] lg:mt-[4.5rem]">
    {#each socialIcons as icon}
      <div
        class="border border-gray border-opacity-30 p-[.5rem] rounded-full text-blue transition duration-200 cursor-pointer hover:bg-blue hover:text-white">
        <svelte:component this={icon} class="w-[.8rem] h-[.8rem]" />
      </div>
    {/each}
  </div>
  <a href="#" class="text-center opacity-50 mt-[1.5rem] text-[.62rem] lg:text-[.75rem]">
    © Copyright Ping. All rights reserved.
  </a>
</main>
