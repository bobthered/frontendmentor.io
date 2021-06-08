<script>
  // components
  import Header from '../components/Header.svelte';
  
  // css
  import '../css/style.css';
  
  // sections
  import About from '../sections/About.svelte';
  import Creations from '../sections/Creations.svelte';
  import Footer from '../sections/Footer.svelte';
  import Hero from '../sections/Hero.svelte';
</script>

<svelte:head>
  <title>Loopstudios Landing Page - Frontendmentor.io</title>
</svelte:head>

<main class="relative flex flex-col items-center justify-center min-h-screen">
  <!-- <img src="./design/mobile-design.jpg" class="absolute top-0 left-0 w-[375px] h-[3217px] opacity-20 -z-1 lg:hidden" /> -->
  <!-- <img src="./design/desktop-design.jpg" class="absolute top-0 left-0 w-[1440px] h-[2896px] opacity-20 -z-1 hidden lg:block" /> -->
  <!-- <img src="./design/mobile-menu.jpg" class="absolute top-0 left-0 w-[375px] h-[667px] opacity-20 -z-1 lg:hidden" /> -->
  <Header />
  <Hero />
  <About />
  <Creations />
  <Footer />
</main>