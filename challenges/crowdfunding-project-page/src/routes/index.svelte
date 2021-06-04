<script>
  // components
  import About from '../components/About.svelte';
  import Container from '../components/Container.svelte';
  import Description from '../components/Description.svelte';
  import Header from '../components/Header.svelte';
  import Hero from '../components/Hero.svelte';
  import { Back, Thanks } from '../components/Modals';
  import Stats from '../components/Stats.svelte';

  // css
  import '../css/style.css';
</script>

<svelte:head>
  <title>Crowdfunding Project Page - Frontendmentor.io</title>
</svelte:head>

<main class="flex flex-col justify-center items-center bg-gray-50 bg-opacity-100 pb-[5rem]">
  <Header />
  <Hero />
  <Container size="small" class="space-y-[2rem] lg:space-y-[3rem]">
    <Description />
    <Stats />
    <About />
  </Container>
  <Back />
  <Thanks />
</main>