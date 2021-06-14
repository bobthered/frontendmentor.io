<script>
  // props ( external )
  export let fontWeight = 'lg:font-normal';
  export let href = '#';
  export let padding = 'px-[16px] py-[13px] lg:px-[24px]'
  export let rounded = 'rounded';
  export let shadow = 'shadow-lg';
  export let text = 'text-[15px]';
  export let theme = 'default';

  // props ( dynamic )
  $: themeClasses = theme === 'default' ? 'bg-blue text-white ring-offset-blue ring-blue hover:bg-white hover:text-blue hover:ring-blue' : 
                    theme === 'red' ? 'bg-red text-white ring-offset-red ring-red hover:bg-white hover:text-red hover:ring-red' : 
                    theme === 'outline' ? 'ring-offset-1 ring-offset-white ring-white' : 
                    theme === 'header' ? 'ring-offset-1 ring-offset-white ring-white lg:ring-offset-0 lg:bg-red lg:text-white lg:ring-offset-red lg:ring-red lg:ring-opacity-0 lg:hover:bg-transparent lg:hover:text-red lg:hover:ring-offset-2' : 
                    theme === 'gray' ? 'bg-gray bg-opacity-20 ring-offset-gray ring-gray text-gray hover:bg-white hover:text-gray hover:ring-gray' : '';
  $: if ( theme === 'header') {
    padding = 'px-[16px] py-[13px] lg:px-[24px] lg:py-[9px]';
  }

</script>

<a {href} on:click|preventDefault class="ring ring-opacity-0 focus:ring-opacity-30 text-center whitespace-nowrap transition duration-200 outline-none {fontWeight} {padding} {rounded} {shadow} {text} {themeClasses} {$$props.class}"><slot/></a>