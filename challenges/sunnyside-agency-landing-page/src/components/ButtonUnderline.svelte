<script>
  // props ( external )
  export let href = '#';
  export let padding = 'px-[2rem] py-[1rem]'
  export let rounded = 'rounded-full';
  export let style = '';
  export let shadow = '';
  export let theme = 'default';

  // props ( dynamic )
  $: buttonClasses = theme === 'yellow' ? 'ring-yellow' : 
                     theme === 'red' ? 'ring-red' : '';
  $: lineClasses = theme === 'yellow' ? 'bg-yellow' : 
                   theme === 'red' ? 'bg-red' : '';
</script>

<a {href} on:click|preventDefault class="bg-transparent group relative ring ring-opacity-0 focus:ring-opacity-30 transition duration-200 outline-none font-serif font-black uppercase text-[16px] text-center {buttonClasses} {padding} {rounded} {shadow} {$$props.class !== undefined ? $$props.class :''}" {style}>
  <div class="absolute bottom-[17px] left-0 w-full h-[8px] -z-1 px-[20px] overflow-hidden">
    <div class="w-full h-full transition duration-200 bg-opacity-30 rounded-full group-hover:bg-opacity-100 {lineClasses}"></div>
  </div>
  <slot/>
</a>