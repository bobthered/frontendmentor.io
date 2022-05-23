<script context="module">
  export async function load({ fetch }) {
    const url = 'https://api.adviceslip.com/advice'
    const response = await fetch(url);
    const { slip : {advice, id} } = await response.json();

    return {
      props: { advice, id }
    }
  }
</script>

<script>
  // imports
  import { base } from '$app/paths';
  import { onMount } from 'svelte';

  // helpers
  const animateAdviceTimer = () => {
    adviceLength++;
    tickSpeed = Math.floor((Math.random()*100))+1
    if ( adviceLength < advice.length) setTimeout(animateAdviceTimer, tickSpeed)
  }
  const getRandomAdvice = async () => {
    loaded = false;
    adviceLength = 0;
    const url = 'https://api.adviceslip.com/advice'
    const response = await fetch(url);
    const { slip } = await response.json();
    ({ advice, id } = slip);
    loaded = true;
  }

  // props (internal)
  let adviceLength = 0;
  let loaded = false;
  let tickSpeed = 50

  // props (external)
  export let advice;
  export let id;

  // props (dynamic)
  $: if (loaded) animateAdviceTimer();

  // lifecycle
  onMount(() => {
    loaded = true;
  })
</script>

<svelte:head>
  <title>Advice Generator App - Frontendmentor.io</title>
</svelte:head>

<div class="flex items-center justify-center p-[1rem] min-h-screen min-w-screen">
  <blockquote class="relative flex flex-col items-center rounded-[.5rem] bg-gray-700 shadow-xl shadow-gray-900 w-full max-w-[540px] p-[1.5rem] pt-[3rem] pb-[4rem] space-y-[1.5rem] lg:space-y-[2rem] lg:pb-[4.5rem] lg:rounded-[.75rem]">
    <div class="text-[.75rem] leading-[.75rem] text-green uppercase font-medium tracking-[.2rem] lg:text-[.875rem]">Advice #{id}</div>
    <div class="text-center text-[23.5px] leading-[34px] lg:text-[28px] lg:px-[2rem] lg:leading-[38px]">"{advice.slice(0, adviceLength)}"</div>
    <img alt="Divider" class="select-none lg:hidden" src="{base}/pattern-divider-mobile.svg" />
    <img alt="Divider" class="select-none hidden lg:block" src="{base}/pattern-divider-desktop.svg" />
    <button class="absolute transform transition duration-200 left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full bg-green p-[1.25rem] outline-none shadow-button shadow-transparent ring ring-transparent hover:shadow-green/[.5] focus:shadow-green/[.5] focus:ring-green/[.3]" on:click={getRandomAdvice}>
      <img alt="Dice" class="select-none" src="{base}/icon-dice.svg" />
    </button>
  </blockquote>
</div>