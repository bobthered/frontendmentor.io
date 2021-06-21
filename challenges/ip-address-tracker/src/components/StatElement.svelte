<script>
  // props ( external )
  export let label;
  export let value;
</script>

<div class="flex flex-col items-center space-y-[4px] lg:items-start lg:px-[32px]">
  <div class="uppercase text-[12px] text-gray font-medium lg:text-[15px]">{label}</div>
  <div class="text-[20px] font-medium lg:text-[25.6px] lg:leading-[32px]">{value}</div>
</div>