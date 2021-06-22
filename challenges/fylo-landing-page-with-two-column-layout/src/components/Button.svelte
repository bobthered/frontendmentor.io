<script>
  // components
  import { Arrow } from '$components/Icons';

  // props ( external )
  export let bgOpacity  = 'bg-opacity-100 hover:bg-opacity-70';
  export let boxShadow  = '';
  export let fontWeight = 'font-bold';
  export let href       = '#';
  export let outline    = 'outline-none focus:outline-none';
  export let padding    = 'px-[20px] py-[10px] lg:px-[48px]'
  export let ring       = 'ring ring-opacity-0 focus:ring-opacity-30';
  export let rounded    = 'rounded';
  export let textAlign  = 'text-center';
  export let textColor  = '';
  export let textSize   = 'text-[13.25px]';
  export let theme      = 'default';
  export let transition = 'transition duration-200';
  export let type       = '';
  export let shadow     = 'shadow';
  export let style      = '';
  export let whitespace = 'whitespace-nowrap';

  // props ( dynamic )
  $: themeClasses = theme === 'default' ? 'bg-blue text-white ring-blue' : 'text-cyan ring-cyan';
  $: if ( type === 'arrow' ) {
    padding = 'px-[20px] py-[10px] lg:px-[48px] lg:pl-0'
    textSize = 'text-[12px] lg:text-[16px]'
    theme = 'arrow';
    shadow = '';
  }
  $: classes = `${bgOpacity} ${boxShadow} ${fontWeight} ${outline} ${padding} ${ring} ${rounded} ${shadow} ${textAlign} ${textColor} ${textSize} ${themeClasses} ${transition} ${whitespace} ${$$props.class !== undefined ? $$props.class : ''}`;
</script>

{#if type === 'link'}
  <a {href} on:click|preventDefault class={classes} style={style !== undefined ? style : ''}><slot/></a>
{:else if type === 'submit'}
  <button type="submit" class={classes} style={style !== undefined ? style : ''}><slot/></button>
{:else if type === 'arrow'}
  <button class="flex justify-center items-center space-x-[8px] {classes}" style={style !== undefined ? style : ''}><div><slot/></div><div class="rounded-full bg-cyan text-white p-[0px]"><Arrow class="w-[20px] h-[20px]" /></div></button>
{:else}
  <button class={classes} style={style !== undefined ? style : ''}><slot/></button>
{/if}