<script>
  // components
  import Container from './Container.svelte';
  import Logo from './Logo.svelte';
  import Nav from './Nav.svelte';

  // props ( internal )
  let icon;
  let logo;
  let show = false;
  let words;

  // props ( dynamic )
  $: if ( show ) {
    icon = 'hsl(229, 31%, 21%)';
    logo = '#fff';
    words = '#fff';
  } else {
    icon = '#fff';
    logo = 'hsl(231, 69%, 60%)';
    words = 'hsl(229, 31%, 21%)';
  }
</script>

<header class="bg-white bg-opacity-[.97] flex w-full justify-center fixed top-0 left-0 py-[2.5rem] z-20 lg:py-[48px]">
  <Container>
    <div class="flex justify-between items-center">
      <Logo {icon} {logo} {words} class="w-[148px]" />
      <Nav bind:show />
    </div>
  </Container>
</header>