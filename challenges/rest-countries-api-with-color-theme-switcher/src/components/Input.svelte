<script>
  // props
  export let padding = 'py-[16px] px-[24px] pl-[75px] lg:py-[18px]';
  export let value = '';
</script>

<input type="text" bind:value class="ring ring-light-text ring-opacity-0 transition duration-200 outline-none rounded bg-transparent shadow-md w-full text-[12px] focus:ring-opacity-10 dark:ring-opacity-0 dark:ring-dark-text focus:dark:ring-opacity-10 dark:bg-dark lg:text-[14px] {padding}" placeholder="Search for a country..." />