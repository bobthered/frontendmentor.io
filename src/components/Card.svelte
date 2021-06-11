<script>
  // props ( external )
  export let padding = 'p-[1rem]'
  export let rounded = 'rounded-xl';
  export let shadow = '';
  export let theme = 'default';

  // props ( dynamic )
  $: themeClasses = theme === 'default' ? '' : ''
</script>

<div class="ring ring-1 ring-red-500 flex flex-col bg-opacity-0 {padding} {rounded} {shadow} {themeClasses} {$$props.class}">
  <slot/>
</div>