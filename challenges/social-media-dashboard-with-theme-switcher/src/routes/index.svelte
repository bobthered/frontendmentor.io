<script>
  // components
  import Container from '../components/Container.svelte';
  import Daily from '../components/Daily.svelte';
  import Header from '../components/Header.svelte';
  import Social from '../components/Social.svelte';

  // css
  import '../css/style.css';

  // props
  let darkMode = true;
  $: mainClass = darkMode ? 'dark' : '';
</script>

<svelte:head>
  <title>Social Media Dashboard with Theme Switcher - Frontendmentor.io</title>
</svelte:head>


<main class="{mainClass}">
  <div class="relative flex flex-col items-center justify-center py-[2rem] text-light-text-2 min-h-screen transition duration-200 bg-light-bg dark:bg-dark-bg dark:text-dark-text-2">
    <!-- <img src="./design/mobile-design-light.jpg" class="absolute top-0 left-0 w-[375px] h-[2387px] opacity-20 -z-1 lg:hidden" />
    <img src="./design/desktop-design-light.jpg" class="absolute top-0 left-0 w-[1440px] h-[800px] opacity-20 -z-1 hidden lg:block" /> -->
    <div class="absolute w-full h-[275px] bg-light-bg-pattern top-0 left-0 transition duration-200 dark:bg-dark-bg-pattern"></div>
    <Container class="z-10">
      <div class="flex flex-col w-full">
        <Header bind:darkMode />
        <Social />
        <Daily />
      </div>
    </Container>
  </div>
</main>