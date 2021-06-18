<script>
  // props ( external )
  export let bg       = 'bg-transparent'
  export let flex     = 'flex flex-col';
  export let padding  = 'p-[20px]'
  export let position = 'relative';
  export let ring     = 'ring ring-1';
  export let rounded  = 'rounded';
  export let shadow   = '';
  export let theme    = 'default';

  // props ( dynamic )
  $: themeClasses = theme === 'default' ? '' : ''
  $: classes = `${bg} ${flex} ${padding} ${position} ${ring} ${rounded} ${shadow} ${themeClasses} ${$$props.class !== undefined ? $$props.class :''}`;
</script>

<div class={classes}>
  <slot/>
</div>