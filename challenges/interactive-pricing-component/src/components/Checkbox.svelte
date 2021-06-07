<script>
  // props
  export let checked = false;
  $: labelClasses = checked ? 'bg-green' : 'bg-gray-200';
  $: handleClasses = checked ? 'translate-x-[100%]' : 'translate-x-[0%]';
</script>

<label class="rounded-full p-[.25rem] cursor-pointer relative transition duration-200 pr-[1.25rem] {labelClasses}">
  <input type="checkbox" class="absolute opacity-0 w-0 h-0" bind:checked />
  <div class="rounded-full w-[1rem] h-[1rem] bg-white transform transition duration-200 {handleClasses}"></div>
</label>