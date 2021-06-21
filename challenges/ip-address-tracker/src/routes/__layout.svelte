<script>

  // css
  import '../css/style.css';
  import 'leaflet/dist/leaflet.css';
</script>

<svelte:head>
  <meta name="description" content="IP Address Tracker" />
  <meta name="theme-color" content="#ffffff" />
</svelte:head>

<main class="relative flex flex-col text-[18px] text-gray-900 min-h-screen h-screen">
  <slot/>
</main>