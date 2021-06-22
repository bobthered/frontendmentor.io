<script>
  // _imports
  import routes from '$data/routes';

  // components
  import Link from './Link.svelte';

  // props ( external )
  export let show;
  export let toggleMenu;

  // props ( internal )
  const alignItems      = 'lg:items-center';
  const bg              = 'bg-opacity-100 bg-white lg:bg-transparent'
  const flex            = 'flex flex-col lg:flex-row';
  const fontSize        = 'text-[16px]'
  const fontWeight      = 'font-medium'
  const justifyContent  = 'justify-center'
  const padding         = 'py-[30px] px-[24px] lg:p-0'
  const position        = 'relative';
  const rounded         = 'rounded-lg';
  const shadow          = 'shadow-xl lg:shadow-none';
  const space           = ''
  const textColor       = 'text-blue'
  const transition      = 'transition duration-200'
  
  // props ( dynamic )
  $: pointerEvents = `${show?'pointer-events-auto':'pointer-events-none'} lg:pointer-events-auto`;
  $: transform = `transform ${show?'translate-y-0':'translate-y-[-1rem]'} lg:translate-y-0`;
  $: classes = `${alignItems} ${bg} ${flex} ${fontSize} ${fontWeight} ${justifyContent} ${padding} ${pointerEvents} ${position} ${rounded} ${shadow} ${space} ${textColor} ${transition} ${transform} ${$$props.class !== undefined ? $$props.class : ''}`;
</script>

<div class={classes}>
  {#each routes.filter(route=>route.nav) as {title}, i}
    <Link bind:show {toggleMenu} {title} {i} />
  {/each}
</div>