<script>
  // components
  import Header from '$components/Header.svelte';

  // css
  import '$css/style.css';
</script>

<svelte:head>
  <meta name="description" content="" />
  <meta name="theme-color" content="#fff" />
</svelte:head>

<main class="relative flex flex-col">
  <Header />
  <slot/>
</main>