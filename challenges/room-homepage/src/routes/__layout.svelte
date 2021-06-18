<script>
  // components
  import Header from '../components/Header.svelte';

  // css
  import '../css/style.css';
</script>

<svelte:head>
  <meta name="theme-color" content="#000000" />
</svelte:head>

<main class="relative flex flex-col text-[12px] font-medium lg:h-screen lg:max-w-screen lg:max-h-screen lg:overflow-hidden lg:grid lg:grid-rows-main">
  <Header />
  <slot/>
</main>