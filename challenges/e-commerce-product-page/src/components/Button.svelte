<script>
  // props (external)
  export let color = 'orange';
  export let colorClasses = '';

  // props (dynamic)
  $: if (color === 'gray-300')
    colorClasses =
      'bg-gray-300 text-white shadow-gray-300/[.1] focus:ring-gray-300/[.3] hover:bg-gray-300/[.7] focus:bg-gray-300/[.7]';
  $: if (color === 'gray-500')
    colorClasses =
      'bg-gray-500 text-white shadow-gray-500/[.1] focus:ring-gray-500/[.3] hover:bg-gray-500/[.7] focus:bg-gray-500/[.7]';
  $: if (color === 'orange')
    colorClasses =
      'bg-orange text-white shadow-orange/[.1] focus:ring-orange/[.3] hover:bg-orange/[.7] focus:bg-orange/[.7]';
  $: if (color === 'red')
    colorClasses =
      'bg-red-500 text-white shadow-red-500/[.1] focus:ring-red-500/[.3] hover:bg-red-500/[.7] focus:bg-red-500/[.7]';
</script>

<button
  class="w-full shadow-xl ring ring-transparent flex justify-center space-x-[1rem] font-bold rounded-[.5rem] mt-[18px] py-[14px] px-[26px] transition duration-200 {colorClasses}"
  on:click
>
  <slot />
</button>
