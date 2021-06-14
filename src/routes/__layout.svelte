<script>
  // css
  import '../css/style.css';
</script>

<main class="relative flex flex-col">
  <slot/>
  <img src="./design/mobile-design.jpg" class="absolute top-0 left-0 w-[375px] h-[800px] opacity-20 -z-1 lg:hidden" />
  <img src="./design/desktop-design.jpg" class="absolute top-0 left-0 w-[1440px] h-[800px] opacity-20 -z-1 hidden lg:block" />
</main>