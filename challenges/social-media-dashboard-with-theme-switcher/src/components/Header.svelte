<script>
  // components
  import Checkbox from './Checkbox.svelte';
  
  // props
  export let darkMode;
</script>

<div class="flex flex-col w-full lg:flex-row lg:justify-between">
  <div class="flex flex-col w-full">
    <div class="text-[1.5rem] font-bold lg:text-[1.75rem]">Social Media Dashboard</div>
    <div class="text-light-text-1 text-[.875rem] font-bold dark:text-dark-text-1">Total Followers: 23,004</div>
  </div>
  <div class="my-[1.25rem] w-full h-[1px] bg-light-text-1 lg:hidden"></div>
  <div class="flex justify-between items-center text-light-text-1 text-[.875rem] font-bold lg:space-x-[.5rem] dark:text-dark-text-1">
    <div class="whitespace-nowrap">Dark Mode</div>
    <Checkbox bind:checked={darkMode} />
  </div>
</div>