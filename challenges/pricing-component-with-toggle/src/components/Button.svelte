<script>
  // props ( external )
  export let theme = "default";

  // props ( dynamic )
  $: themeClasses = theme === "default" ? "from-purple-300 to-purple-500 text-white ring-purple-500 hover:text-purple-500" : 
                    theme === 'white' ? 'from-white to-white text-purple-500 ring-white hover:text-white' :'';
  // $: themeClasses = theme === "default" ? "ring ring-1 ring-purple-500" : '';
</script>

<div class="cursor-pointer bg-gradient-to-r rounded w-full px-[2rem] py-[10px] ring ring-1 ring-opacity-0 hover:ring-opacity-100 hover:from-transparent hover:to-transparent transition duration-200 text-center uppercase text-[15px] {themeClasses} {$$props.class}"><slot/></div>