<script>
  // components
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';
  // css
  import '../css/style.css';
</script>

<main class="relative flex flex-col text-gray-900 font-semibold">
  <Header />
  <slot/>
  <Footer />
</main>