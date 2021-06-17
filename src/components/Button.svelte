<script>
  // props ( external )
  export let bgOpacity  = 'bg-opacity-100 hover:bg-opacity-70';
  export let boxShadow  = '';
  export let fontWeight = 'font-medium';
  export let href       = '#';
  export let outline    = 'outline-none focus:outline-none';
  export let padding    = 'px-[30px] py-[11px]'
  export let ring       = 'ring ring-opacity-0 focus:ring-opacity-30';
  export let rounded    = 'rounded-full';
  export let textAlign  = 'text-center';
  export let textColor  = '';
  export let textSize   = '';
  export let theme      = 'default';
  export let transition = 'transition duration-200';
  export let type       = '';
  export let style      = '';
  export let whitespace = 'whitespace-nowrap';

  // props ( dynamic )
  $: themeClasses = theme === 'default' ? 'bg-transparent' : '';
  $: classes = `${bgOpacity} ${boxShadow} ${fontWeight} ${outline} ${padding} ${ring} ${rounded} ${textAlign} ${textColor} ${textSize} ${themeClasses} ${transition} ${whitespace} ${$$props.class !== undefined ? $$props.class : ''}`;
</script>

{#if type === 'link'}
  <a {href} on:click|preventDefault class={classes} style={style !== undefined ? style : ''}><slot/></a>
{:else if type === 'submit'}
  <button type="submit" class={classes} style={style !== undefined ? style : ''}><slot/></button>
{:else}
  <button class={classes} style={style !== undefined ? style : ''}><slot/></button>
{/if}