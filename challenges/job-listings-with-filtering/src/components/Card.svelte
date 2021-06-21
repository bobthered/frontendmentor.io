<script>
  // props ( external )
  export let bg       = 'bg-white'
  export let isFeatured;
  export let flex     = 'flex flex-col';
  export let padding  = ''
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
  {#if isFeatured}
    <div class="absolute w-[4px] h-full bg-cyan-600 top-0 left-0 rounded-tl rounded-bl"></div>
  {/if}
  <slot/>
</div>