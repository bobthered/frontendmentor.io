<script>
  // props ( external )
  export let href = '#';
  export let padding = 'px-[2rem] py-[1rem]'
  export let rounded = 'rounded-full';
  export let style = '';
  export let shadow = '';
  export let theme = 'default';

  // props ( dynamic )
  $: themeClasses = theme === 'default' ? '' : 
                    theme === 'yellow' ? 'bg-yellow text-gray-900 ring-yellow' : 
                    theme === 'header' ? 'bg-yellow text-gray-900 ring-yellow lg:bg-white lg:ring-opacity-0 lg:ring-white lg:hover:bg-opacity-30 hover:text-white' : '';
</script>

<a {href} on:click|preventDefault class="ring ring-opacity-0 focus:ring-opacity-30 transition duration-200 outline-none font-serif uppercase text-[15px] text-center {padding} {rounded} {shadow} {themeClasses} {$$props.class !== undefined ? $$props.class :''}" {style}><slot/></a>