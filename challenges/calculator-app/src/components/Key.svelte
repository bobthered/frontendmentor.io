<script>
  // components
  import Button from '$components/Button.svelte';

  // handlers
  const blurHandler = () => focus = false;
  const focusHandler = () => focus = true;

  // props ( internal )
  let elem;
  let focus = false;

  // props ( external )
  export let bgColor = 'bg-skin-key-bg';
  export let shadowColor = 'bg-skin-key-shadow';
  export let textColor = 'text-skin-text-keys';
  export let textSize = 'text-[30px]';
  export let text;

  // props ( dynamic )
  $: translateY = focus ? 'animate-key-focus' : ''
</script>

<Button on:click bind:this={elem} on:focus={focusHandler} on:blur={blurHandler} rounded="rounded" type="key" class="overflow-hidden relative flex flex-grow {textColor} {textSize} {$$props.class !== undefined ? $$props.class : ''}">
  <div class="absolute bottom-0 {shadowColor} left-0 w-full h-[8px]"></div>
  <div class="pb-[4px] flex flex-grow h-full">
    <div class="{bgColor} rounded flex flex-grow items-center justify-center transform transition duration-200 {translateY}">
      {text}
    </div>
  </div>
</Button>