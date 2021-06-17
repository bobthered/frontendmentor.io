<script>
  // props ( external )
  export let bgOpacity  = 'bg-opacity-100 hover:bg-opacity-70';
  export let boxShadow  = 'shadow-orange';
  export let fontWeight = 'font-medium';
  export let href       = '#';
  export let outline    = 'outline-none focus:outline-none';
  export let padding    = 'px-[30px] py-[11px]'
  export let ring       = 'ring ring-opacity-0 focus:ring-opacity-30';
  export let rounded    = 'rounded-full';
  export let textAlign  = 'text-center';
  export let textColor  = 'text-white';
  export let textSize   = 'text-[14px]';
  export let theme      = 'default';
  export let transition = 'transition duration-200';
  export let type       = '';
  export let style      = '';
  export let whitespace = 'whitespace-nowrap';

  // props ( dynamic )
  $: themeClasses = theme === 'default' ? 'bg-orange ring-orange text-white' : 
                    theme === 'white' ? 'bg-white ring-white text-orange hover:text-opacity-50':'';
  $: if ( theme === 'white' ) {
    bgOpacity = 'bg-opacity-100';
    boxShadow = 'shadow-lg'
  }
  $: classes = `${bgOpacity} ${boxShadow} ${fontWeight} ${outline} ${padding} ${ring} ${rounded} ${textAlign} ${textColor} ${textSize} ${themeClasses} ${transition} ${whitespace} ${$$props.class !== undefined ? $$props.class : ''}`;
</script>

{#if type === 'link'}
  <a {href} on:click|preventDefault class={classes} style={style !== undefined ? style : ''}><slot/></a>
{:else if type === 'submit'}
  <button type="submit" class={classes} style={style !== undefined ? style : ''}><slot/></button>
{:else}
  <button class={classes} style={style !== undefined ? style : ''}><slot/></button>
{/if}