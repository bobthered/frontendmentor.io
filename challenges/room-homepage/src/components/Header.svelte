<script>
  // components
  import Container from "./Container.svelte";
  import Logo from "./Logo.svelte";
  import Nav from "./Nav";

  // props ( internal )
  const flex = 'flex';
  const justifyContent = 'justify-center';
  const left = 'left-0';
  const padding = 'py-[48px]'
  const position = 'absolute';
  const textColor = 'text-white';
  const top = 'top-0';
  const width = 'w-full';
  const zIndex = 'z-20'

  // props ( dynamic )
  $: classes = `${flex} ${justifyContent} ${left} ${padding} ${position} ${textColor} ${top} ${width} ${zIndex} ${$$props.class !== undefined ? $$props.class : ''}`;
</script>

<header class={classes}>
  <Container>
    <div class="relative flex justify-center items-center lg:justify-start lg:space-x-[40px]">
      <Logo class="w-[62px]" />
      <Nav />
    </div>
  </Container>
</header>
