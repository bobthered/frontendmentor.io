<script>
  // components
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';

  // css
  import '../css/style.css';

  // sections
  import Articles from '../sections/Articles.svelte';
  import Hero from '../sections/Hero.svelte';
  import Why from '../sections/Why.svelte';
</script>

<svelte:head>
  <title>Easybank Landing Page - Frontendmentor.io</title>
</svelte:head>


<main class="relative flex flex-col items-center justify-center min-h-screen text-blue bg-gray-50">
  <Header />
  <Hero />
  <Why />
  <Articles />
  <Footer />
</main>