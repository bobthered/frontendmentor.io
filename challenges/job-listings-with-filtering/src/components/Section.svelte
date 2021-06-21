<script>
  // props ( external )
  export let padding  = 'py-[56px]';
  export let position = '';

  // props ( dynamic )
  $: classes = `${padding} ${position} ${$$props.class !== undefined ? $$props.class : ''}`;
</script>

<section class={classes}>
  <slot/>
</section>