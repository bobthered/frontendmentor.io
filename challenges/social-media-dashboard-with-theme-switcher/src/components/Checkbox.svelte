<script>
  // props
  export let checked = false;
  $: labelClasses = checked ? 'from-dark-toggle-1 to-dark-toggle-2' : 'from-light-toggle to-light-toggle';
  $: handleClasses = checked ? 'translate-x-0' : 'translate-x-[1.5rem]'
</script>

<label class="relative rounded-full cursor-pointer p-[.25rem] pr-[1.75rem] transition duration-200 bg-gradient-to-r {labelClasses}">
  <input type="checkbox" bind:checked class="absolute w-0 opacity-0" />
  <div class="w-[1.25rem] h-[1.25rem] transition duration-200 transform rounded-full bg-light-bg dark:bg-dark-bg {handleClasses}"></div>
</label>