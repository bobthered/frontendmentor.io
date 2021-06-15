<script>
  // props ( external )
  export let padding = "px-[1.5rem]"
  export let width = "w-full lg:w-[1120px]"
</script>

<div class="mx-auto {padding} {width} {$$props.class !== undefined ? $$props.class :''}"><slot/></div>