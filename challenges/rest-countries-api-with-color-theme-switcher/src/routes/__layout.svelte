<script>
  // _imports
  import { onMount } from 'svelte';

  // components
  import Header from '../components/Header.svelte';

  // css
  import '../css/style.css';

  // store
  import countries from './countriesStore.js';
  import darkMode from '../components/Darkmode/store';

  onMount(async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    $countries = await response.json();
  })
</script>

<main class="w-full {$darkMode ? 'dark' : ''}">
  <div class="relative bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text min-h-screen">
    <Header />
    <div class="py-[24px] lg:py-[48px]">
      <slot />
    </div>
  </div>
</main>