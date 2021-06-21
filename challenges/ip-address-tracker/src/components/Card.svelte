<script>
  // props ( external )
  export let bg       = 'bg-white'
  export let flex     = 'flex flex-col';
  export let padding  = 'p-[20px] lg:py-[32px] lg:px-0'
  export let position = 'relative';
  export let ring     = '';
  export let rounded  = 'rounded-xl';
  export let shadow   = 'shadow-xl';
  export let theme    = 'default';

  // props ( dynamic )
  $: themeClasses = theme === 'default' ? '' : ''
  $: classes = `${bg} ${flex} ${padding} ${position} ${ring} ${rounded} ${shadow} ${themeClasses} ${$$props.class !== undefined ? $$props.class :''}`;
</script>

<div class={classes}>
  <slot/>
</div>