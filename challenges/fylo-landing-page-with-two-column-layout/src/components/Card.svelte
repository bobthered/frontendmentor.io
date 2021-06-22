<script>
  // props ( external )
  export let bg       = 'bg-white'
  export let flex     = 'flex flex-col';
  export let padding  = 'px-[26px] py-[20px]'
  export let position = 'relative';
  export let ring     = '';
  export let rounded  = 'rounded';
  export let shadow   = 'shadow-xl';
  export let theme    = 'default';

  // props ( dynamic )
  $: themeClasses = theme === 'default' ? '' : ''
  $: classes = `${bg} ${flex} ${padding} ${position} ${ring} ${rounded} ${shadow} ${themeClasses} ${$$props.class !== undefined ? $$props.class :''}`;
</script>

<div class={classes}>
  <slot/>
</div>