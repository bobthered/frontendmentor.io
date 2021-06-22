<script>
  // props ( external )
  export let margin = 'mx-auto';
  export let padding = 'px-[24px]';
  export let width = 'w-full lg:w-[1328px]';
</script>

<div class='{margin} {padding} {width} {$$props.class !== undefined ? $$props.class :''}'><slot/></div>