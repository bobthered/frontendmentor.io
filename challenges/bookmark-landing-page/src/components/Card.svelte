<script>
  // props ( external )
  export let padding = 'p-[0rem]'
  export let rounded = 'rounded';
  export let shadow = 'shadow-xl';
  export let theme = 'default';

  // props ( dynamic )
  $: themeClasses = theme === 'default' ? '' : ''
</script>

<div class="bg-white flex flex-col bg-opacity-0 {padding} {rounded} {shadow} {themeClasses} {$$props.class}">
  <slot/>
</div>