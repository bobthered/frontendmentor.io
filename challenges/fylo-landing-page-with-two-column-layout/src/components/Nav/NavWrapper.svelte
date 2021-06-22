<script>
  // _imports
  import routes from '$data/routes';

  // components
  import Link from './Link.svelte';

  // props ( external )
  export let show;
  export let toggleMenu;

  // props ( internal )
  const alignItems      = 'items-center';
  const bg              = ''
  const flex            = 'flex';
  const fontSize        = 'text-[12px] lg:text-[16px]'
  const fontWeight      = ''
  const justifyContent  = 'justify-center'
  const padding         = ''
  const position        = 'relative';
  const rounded         = '';
  const shadow          = '';
  const space           = ''
  const textColor       = 'text-blue-desaturated'
  const transition      = 'transition duration-200'
  
  // props ( dynamic )
  $: pointerEvents = ``;
  $: transform = `transform translate-x-[12.5px] lg:translate-x-[28.75px]`;
  $: classes = `${alignItems} ${bg} ${flex} ${fontSize} ${fontWeight} ${justifyContent} ${padding} ${pointerEvents} ${position} ${rounded} ${shadow} ${space} ${textColor} ${transition} ${transform} ${$$props.class !== undefined ? $$props.class : ''}`;
</script>

<div class={classes}>
  {#each routes.filter(route=>route.nav) as {title}, i}
    <Link bind:show {toggleMenu} {title} {i} />
  {/each}
</div>