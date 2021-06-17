<script>
  // sections
  import Hero from '../sections/Hero.svelte';
  import WhatsDifferent from '../sections/WhatsDifferent.svelte';
  import WhatTheyveSaid from '../sections/WhatTheyveSaid.svelte';
</script>

<svelte:head>
  <meta name="description" content="Manage Landing Page" />
  <meta name="theme-color" content="#f25f3a" />
  <title>Manage Landing Page - Frontendmentor.io</title>
</svelte:head>

<div class="absolute top-0 right-0 -z-1 w-screen">
  <img alt="Pattern Image" src="./bg-tablet-pattern.svg" class="absolute top-[-50px] w-[400px] w-full left-1/2 transform translate-x-[-50%] ml-[50px] lg:w-[700px] lg:ml-[440px]" />
  <img alt="Pattern Image" src="./bg-tablet-pattern.svg" class="absolute top-[550px] w-[250px] left-1/2 transform translate-x-[-50%] ml-[170px] lg:w-[700px] lg:ml-[-740px] lg:w-[350px] lg:top-[1120px]" />
</div>
<Hero />
<WhatsDifferent />
<WhatTheyveSaid />