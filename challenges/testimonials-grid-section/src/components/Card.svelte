<script>
  // props
  export let theme = "white";
  export let style;
  $: themeClasses = theme === 'violet' ? 'bg-violet text-white' : 
                    theme === 'gray-700' ? 'bg-gray-700 text-white' :
                    theme === 'white' ? 'bg-white text-gray-700 shadow-xl' :
                    theme === 'gray-900' ? 'bg-gray-900 text-white' : ''
</script>

<div class="relative rounded-xl py-[1.5rem] px-[2rem] pb-[2rem] overflow-hidden flex flex-col space-y-[1rem] items-stretch bg-opacity-100 {themeClasses} {$$props.class}" {style}>
  <slot/>
</div>