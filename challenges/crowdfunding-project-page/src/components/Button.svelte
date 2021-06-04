<script>
  // props
  export let padding = 'px-[1.5rem] py-[.75rem]'
  export let theme = 'default';
  $: classes = theme === 'default' ? 'bg-cyan text-white hover:bg-cyan-dark ring-cyan' : 
               theme === 'secondary' ? 'bg-gray-800 text-gray-300 hover:bg-gray-900 ring-gray-800' : 
               theme === 'tertiary' ? 'bg-gray-100 text-gray-500 hover:bg-gray-200 ring-gray-500' : 
               theme === 'quaternary' ? 'bg-gray-100 text-cyan hover:bg-gray-200 ring-gray-500' : 
               theme === 'disabled' ? 'bg-gray-500 text-white ring-transparent' : '';
</script>
<a href="#" on:click class="text-[.875rem] flex items-center justify-center rounded-full outline-none ring ring-opacity-0 {padding} transition duration-200 font-semibold text-center whitespace-nowrap {classes} {$$props.class} focus:ring-opacity-30"><slot/></a>