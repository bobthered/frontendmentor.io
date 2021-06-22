<script>
  // components
  import Footer from '$components/Footer.svelte';
  import Header from '$components/Header.svelte';

  // css
  import '$css/style.css';
</script>

<svelte:head>
  <meta name="description" content="Fylo Landing Page with Two Column Layout" />
  <meta name="theme-color" content="#fff" />
</svelte:head>

<main class="relative flex flex-col text-blue-desaturated">
  <Header />
  <slot/>
  <Footer />
</main>