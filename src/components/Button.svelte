<script>
  // props ( external )
  export let href = '#';
  export let padding = 'px-[2rem] py-[1rem]'
  export let rounded = 'rounded-full';
  export let shadow = '';
  export let theme = 'default';

  // props ( dynamic )
  $: themeClasses = theme === 'default' ? '' : '';
</script>

<a {href} on:click class="ring ring-1 ring-red-500 text-center {padding} {rounded} {shadow} {themeClasses} {$$props.class !== undefined ? $$props.class :''}"><slot/></a>