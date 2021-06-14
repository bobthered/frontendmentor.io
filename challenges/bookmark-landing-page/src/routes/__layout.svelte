<script>
  // components
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';

  // css
  import '../css/style.css';
</script>


<main class="relative flex flex-col min-h-screen">
  <Header />
  <slot/>
  <Footer />
</main>