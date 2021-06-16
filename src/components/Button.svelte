<script>
  // props ( external )
  export let fontWeight = 'font-normal';
  export let href       = '#';
  export let outline    = 'outline-none';
  export let padding    = 'px-[2rem] py-[10px]'
  export let ring       = 'ring ring-opacity-0 focus:ring-opacity-30';
  export let rounded    = 'rounded-full';
  export let shadow     = '';
  export let textAlign  = 'text-center';
  export let theme      = 'default';
  export let transition = 'transition duration-200';
  export let type       = 'link';
  export let style      = '';
  export let whitespace = 'whitespace-nowrap';

  // props ( dynamic )
  $: themeClasses = theme === 'default' ? 'ring-opacity-30' : '';
  $: classes = `${fontWeight} ${outline} ${padding} ${ring} ${rounded} ${shadow} ${textAlign} ${themeClasses} ${transition} ${whitespace-nowrap} ${$$props.class !== undefined ? $$props.class : ''}`;
</script>

{#if type === 'link'}
  <a {href} on:click|preventDefault class={classes} style={style !== undefined ? style : ''}><slot/></a>
{:else if type === 'submit'}
  <button type="submit" class={classes} style={style !== undefined ? style : ''}><slot/></button>
{:else}
  <button class={classes} style={style !== undefined ? style : ''}><slot/></button>
{/if}