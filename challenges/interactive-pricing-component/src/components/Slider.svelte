<script>
  // props
  export let step;
</script>
<div class="relative w-full h-[.5rem] mt-[2.25rem] lg:order-3 lg:mt-[2.25rem]">
  <div class="rounded-full h-full w-full bg-gray-100 overflow-hidden">
    <div class="bg-green-light h-full rounded-full" style="width:{step/4*100}%"></div>
  </div>
  <input
    type="range"
    min="0"
    max="4"
    bind:value={step}
    step="1"
    class="appearance-none outline-none bg-transparent w-full absolute top-0 left-0 rounded-full h-[.5rem] webkit-slider-thumb:bg-green webkit-slider-thumb:rounded-full webkit-slider-thumb:h-[2.5rem] webkit-slider-thumb:w-[2.5rem] webkit-slider-thumb:appearance-none webkit-slider-thumb:shadow-slider-thumb webkit-slider-thumb:bg-slider-thumb webkit-slider-thumb:bg-no-repeat webkit-slider-thumb:bg-center webkit-slider-thumb:cursor-pointer" />
</div>