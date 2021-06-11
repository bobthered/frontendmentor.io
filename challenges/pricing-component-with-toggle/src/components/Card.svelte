<script>
  // props ( external )
  export let padding = 'p-[30px] lg:py-[54px]'
  export let rounded = "rounded-xl";
  export let theme = "white"

  // props ( dynamic )
  $: themeClasses = theme === 'white' ? 'bg-white' : 
                    theme === 'purple' ? 'bg-gradient-to-r from-purple-300 to-purple-500 text-white' : ''
</script>

<div class="w-full flex flex-col shadow-xl {padding} {rounded} {themeClasses} {$$props.class}">
  <slot/>
</div>