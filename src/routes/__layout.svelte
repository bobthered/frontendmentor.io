<script>
  // components
  import Header from '../components/Header.svelte';

  // css
  import '../css/style.css';
</script>

<main class="relative flex flex-col">
  <Header />
  <slot/>
</main>