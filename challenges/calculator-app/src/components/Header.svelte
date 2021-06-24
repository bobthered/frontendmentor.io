<script>
  // components
  import Button from "./Button.svelte";
  import Container from "./Container.svelte";

  // handlers
  const updateTheme = i => $theme = `theme-${i+1}`

  // stores
  import theme from '$stores/theme';

  // props ( dynamic )
  $: toggleTranslateX = $theme === 'theme-1' ? 'translate-x-[0px]' :
                        $theme === 'theme-2' ? 'translate-x-[22px]' : 'translate-x-[44px]';
</script>

<header
  class="flex w-full justify-center z-20 text-text-primary">
  <Container>
    <div class="flex justify-between items-center">
      <div class="text-[31px]">calc</div>
      <div class="flex items-end text-[12px] space-x-[27px]">
        <div class="uppercase" style="letter-spacing:.1em">Theme</div>
        <div class="flex flex-col space-y-[4px]">
          <div class="flex justify-center">
            {#each Array(3) as _, i}
              <div class="flex-grow text-center">{i+1}</div>
            {/each}
          </div>
          <div class="flex relative rounded-full">
            <div class="absolute -z-1 top-0 left-0 rounded-full bg-skin-toggle-bg w-full h-full"></div>
            <div class="absolute -z-1 transform transition duration-200 top-[3px] left-[3px] p-[8px] rounded-full bg-skin-equal-bg {toggleTranslateX}"></div>
            {#each Array(3) as _, i}
              <Button on:click={()=>updateTheme(i)} type="toggle"></Button>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </Container>
</header>
