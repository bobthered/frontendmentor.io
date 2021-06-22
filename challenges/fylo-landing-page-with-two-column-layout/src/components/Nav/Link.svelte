<script>
  // _imports
  import { base } from '$app/paths';

  // props ( external )
  export let title;
  export let toggleMenu;

  // props ( internal )
  const lineHeight       = 'leading-[25px]'
  const padding          = 'py-[11px] px-[12.5px] lg:px-[28.75px]'
  const rounded          = 'rounded-full';
  const textAlign        = 'text-center'
  const textColor        = '';
  const textSize         = ''
  const transition       = 'transition duration-200'
  const width            = ''
  
  // props ( dynamic )
  $: opacity         = ``;
  $: transform       = ``;
  $: transitionDelay = ``;
  $: classes         = `${lineHeight} ${padding} ${opacity} ${rounded} ${textAlign} ${textSize} ${textColor} ${transition} ${transitionDelay} ${transform} ${width} ${$$props.class !== undefined ? $$props.class : ''}`;
</script>

<a on:click|preventDefault={toggleMenu} href='{base}/{title.toLowerCase().replace(/\s/g,'-')}' class={classes}>{title}</a>