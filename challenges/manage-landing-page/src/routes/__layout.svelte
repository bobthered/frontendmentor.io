<script>
  // components
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';

  // css
  import '../css/style.css';
</script>

<style>
  :global(::selection) {
    background-color:hsl(12, 88%, 59%);
    color: #fff;
  }
</style>

<svelte:head>
  <meta name="theme-color" content="#f25f3a" />
</svelte:head>

<main class="relative flex flex-col max-w-screen text-blue overflow-hidden">
  <Header />
  <slot/>
  <Footer />
</main>