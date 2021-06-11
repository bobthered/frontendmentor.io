<script>
  // props ( external )
  export let checked;
</script>

<label class="relative rounded-full cursor-pointer transition duration-200 opacity-100 bg-gradient-to-r from-purple-300 to-purple-500 p-[4px] pr-[28px] hover:opacity-70">
  <input type="checkbox" bind:checked class="absolute top-0 left-0 w-0 opacity-0" />
  <div class="rounded-full w-[24px] h-[24px] bg-white transform transition duration-200 {checked?'translate-x-[100%]':'translate-x-[0%]'}"></div>
</label>