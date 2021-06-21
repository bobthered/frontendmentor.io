<script>
  // props ( external )
  export let toggleMenu;
  export let show;

  // props ( internal )
  const bg = 'bg-gradient-to-b from-transparent to-black'
  const display = 'lg:hidden';
  const height = 'h-screen'
  const left = 'left-0'
  const position = 'fixed';
  const top = 'top-0'
  const transition = 'transition duration-200';
  const width = 'w-screen';
  const zIndex = 'z-10'

  // props ( dynamic )
  $: pointerEvents = `${show?'pointer-events-auto':'pointer-events-none'}`;
  $: opacity = `${show?'opacity-50':'opacity-0'}`;
  $: classes = `${bg} ${display} ${height} ${left} ${opacity} ${pointerEvents} ${position} ${top} ${transition} ${width} ${zIndex} ${$$props.class !== undefined ? $$props.class : ''}`
</script>

<div on:click={toggleMenu} class={classes}></div>
