<script>
  // props
  export let theme = "default"
  const barClasses = {
    facebook : 'from-facebook to-facebook',
    twitter : 'from-twitter to-twitter',
    instagram : 'from-instagram-1 to-instagram-2',
    youtube : 'from-youtube to-youtube',
  }
</script>

<a href="#" on:click|preventDefault class="rounded-lg flex flex-col bg-opacity-100 overflow-hidden transition duration-200 bg-light-card hover:bg-light-card-hover dark:bg-dark-card dark:hover:bg-dark-card-hover {$$props.class}">
  {#if theme !== "default"}
    <div class="w-full h-[4px] bg-gradient-to-r {barClasses[theme]}"></div>
  {/if}
  <div class="p-[1.6rem] flex flex-col w-full items-center">
    <slot/>
  </div>
</a>