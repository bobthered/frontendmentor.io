<script>
  // components
  import { Header } from '../components/Header';
  import { First, Hero, Second, Third } from '../components/Sections';
  import Footer from '../components/Footer.svelte';
  
  // css
  import '../css/style.css';
</script>

<svelte:head>
  <title>Blogr Landing Page - Frontendmentor.io</title>
</svelte:head>

<main class="flex justify-center min-h-screen font-overpass">
  <div class="flex flex-col items-center w-full">
    <Header />
    <Hero />
    <First />
    <Second />
    <Third />
    <Footer />
  </div>
</main>