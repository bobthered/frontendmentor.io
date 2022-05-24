<script>
  // imports
  import data from '../routes/data.json';
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  // helpers
  const calculateHeight = (amount) => `${Math.ceil((150 * amount) / max)}px`;
  const updateBar = () => {
    bars[index].current = bars[index].amount;
    index++;
    if (index < data.length) setTimeout(updateBar, 50);
  };

  // props (internal)
  let bars = [...data].map((bar) => {
    bar.current = 0;
    return bar;
  });
  let index = 0;

  // props (dynamic)
  $: max = Math.max(...data.map(({ amount }) => amount));

  // lifecycle
  onMount(() => {
    updateBar();
  });
</script>

<div class="pt-[1rem] grid gap-[.75rem] grid-cols-7 lg:gap-[1.5rem] min-h-[192px]">
  {#each bars as { day, current }}
    <div class="group flex-grow flex flex-col justify-end items-center space-y-[.5rem]">
      {#if current !== 0}
        <div
          class="relative w-full cursor-pointer rounded-[.25rem] transition duration-200 {current ===
          max
            ? 'bg-cyan hover:bg-cyan/[.5]'
            : 'bg-red hover:bg-red/[.5]'}"
          style="height: {calculateHeight(current)}"
          transition:slide
        >
          <div
            class="absolute transition duration-200 transform top-[-.5rem] left-1/2 -translate-x-1/2 -translate-y-full bg-brown-900 text-orange rounded-[.25rem] px-[.5rem] py-[.25rem] z-[1] pointer-events-none opacity-0 group-hover:opacity-[1] lg:text-[18px]"
          >
            ${current}
          </div>
        </div>
      {/if}
      <div class="text-[12px] text-brown-300">{day}</div>
    </div>
  {/each}
</div>
