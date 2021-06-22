<script>
  // components
  import Header from '$components/Header.svelte';

  // css
  import '$css/style.css';
</script>

<svelte:head>
  <meta name="theme-color" content="#f25f3a" />
</svelte:head>

<main class="relative flex flex-col">
  <Header />
  <slot/>
</main>