<script>
  // components
  import Hamburger from './Hamburger.svelte';
  import Overlay from './Overlay.svelte';
  import NavWrapper from './NavWrapper.svelte';

  // handlers
  const toggleMenu = () => show = !show;

  // props ( external )
  export let show = false;

  // props ( internal )
  const flex          = '';
  const left          = ''
  const padding       = 'px-[1.5rem] lg:p-0'
  const pointerEvents = 'pointer-events-none';
  const position      = 'relative';
  const top           = ''
  const transform     = '';
  const transition    = 'transition duration-200'
  const width         = '';
  const zIndex        = ''

  // props ( dynamic );
  $: opacity = ``;
  $: classes = `${flex} ${left} ${opacity} ${padding} ${pointerEvents} ${position} ${top} ${transform} ${transition} ${width} ${zIndex} ${$$props.class !== undefined ? $$props.class : ''}`;
</script>

<NavWrapper bind:show {toggleMenu} />