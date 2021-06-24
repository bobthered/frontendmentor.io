<script>
  // css
  import '$css/style.css';

  // stores
  import theme from '$stores/theme';
</script>

<svelte:head>
  <meta name="description" content="Calculator App" />
  <meta name="theme-color" content="#fff" />
</svelte:head>

<main class="font-bold {$theme}">
  <div class="bg-skin-bg py-[24px] min-h-screen flex flex-col text-skin-text-primary">
    <slot/>
  </div>
</main>