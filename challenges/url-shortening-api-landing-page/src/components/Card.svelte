<script>
  // props ( external )
  export let padding = 'p-[34px] pt-[74px] lg:p-[30px] lg:pt-[78px]'
  export let rounded = 'rounded-xl';
  export let shadow = '';
  export let theme = 'default';

  // props ( dynamic )
  $: themeClasses = theme === 'default' ? '' : ''
</script>

<div class="relative bg-white flex flex-col {padding} {rounded} {shadow} {themeClasses} {$$props.class !== undefined ? $$props.class :''}">
  <slot/>
</div>