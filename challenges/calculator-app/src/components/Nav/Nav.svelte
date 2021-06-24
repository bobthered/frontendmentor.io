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
  const left          = 'left-[50%] lg:left-auto'
  const padding       = 'px-[1.5rem] lg:p-0'
  const pointerEvents = 'pointer-events-none';
  const position      = 'absolute lg:relative';
  const top           = 'top-[100px] lg:top-auto'
  const transform     = 'transform translate-x-[-50%] lg:translate-x-0';
  const transition    = 'transition duration-200'
  const width         = 'w-screen lg:w-auto';
  const zIndex        = 'z-30'

  // props ( dynamic );
  $: opacity = `${show?'opacity-100':'opacity-0'} lg:opacity-100`;
  $: classes = `${flex} ${left} ${opacity} ${padding} ${pointerEvents} ${position} ${top} ${transform} ${transition} ${width} ${zIndex} ${$$props.class !== undefined ? $$props.class : ''}`;
</script>

<Hamburger bind:show {toggleMenu} />
<Overlay bind:show {toggleMenu} />

<div class={classes}>
  <NavWrapper bind:show {toggleMenu} />
</div>