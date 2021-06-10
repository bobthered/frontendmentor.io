<script>
  // components
  import { ChevronDown, X } from './Icons';

  // handlers
  const setCurrent = item => {
    current = item;
    toggleOpen();
  }
  const toggleOpen = () => open = !open;

  // props
  export let current;
  export let items;
  let open = false;
  export let placeholder;
</script>

<div class="relative text-[12px] lg:text-[14px]">
  <div tabindex="0" on:click={toggleOpen} class="cursor-pointer z-20 relative ring ring-light-text ring-opacity-0 transition duration-200 py-[16px] px-[24px] outline-none rounded bg-light shadow-md w-full focus:ring-opacity-10 dark:ring-opacity-0 dark:ring-dark-text focus:dark:ring-opacity-10 dark:bg-dark  lg:py-[18px]">
    <div class="flex space-x-[.5rem] items-center">
      {#if current === ''}
        {placeholder}
      {:else}
        <X on:click={()=>{current=''; toggleOpen()}} class="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]" />
        <div>{current}</div>
      {/if}
    </div>
    <ChevronDown class="absolute right-[16px] top-1/2 transition duration-200 transform translate-y-[-50%] w-[20px] h[20px] {open?'rotate-180':'rotate-0'}" />
  </div>
  <div class="z-20 rounded bg-light shadow-md w-full absolute top-[56px] transform transition duration-200 left-0 flex flex-col py-[10px] {open?'opacity-100 translate-y-0 pointer-events-auto':'opacity-0 translate-y-[-16px] pointer-events-none'} dark:bg-dark lg:top-[62px]">
    {#each items as item}
      <div on:click={()=>setCurrent(item)} class="cursor-pointer px-[24px] py-[3px] lg:py-[3.5px]">{item}</div>
    {/each}
  </div>
</div>
<div on:click={toggleOpen} class="fixed top-0 left-0 w-screen h-screen z-10 {open?'pointer-events-auto':'pointer-events-none'}"></div>