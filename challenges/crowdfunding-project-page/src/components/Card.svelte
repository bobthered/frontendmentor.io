<script>
  // props
  export let border = "border-gray-200";
  export let padding = 'p-[1.7rem] lg:p-[3.5rem]';
</script>

<div class="rounded-lg bg-white bg-opacity-100 relative flex flex-col transition duration-200 border {border} items-center opacity-100 {padding} {$$props.class}">
  <slot/>
</div>