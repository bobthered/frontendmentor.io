<script>
  // props
  export let rounded = 'rounded-full';
  export let size = 'normal';
  $: sizeClasses = size === 'normal' ? 'px-[38px] py-[10px] text-[12px] lg:text-[20px] lg:py-[24px] lg:px-[96px]' :
                   size === 'small' ? 'px-[1rem] py-[.25rem] text-[10px] lg:text-[16px] lg:px-[2rem] lg:py-[7px]' :
                   size === 'large' ? 'px-[42px] py-[12px] text-[16px]' : ''
  export let theme = 'default';
  $: themeClasses = theme === 'default' ? 'bg-pink text-white font-bold hover:bg-pink-light' :
                    theme === 'outline' ? 'bg-transparent text-pink ring ring-1 ring-pink hover:ring-pink-light hover:text-pink-light' : '';
  export let type = 'link';
  $: if (type === 'submit' ) {
    rounded = 'rounded';
    size = 'large';
  }
</script>
{#if type === 'link'}
  <a href="#" on:click class="text-center shadow-md transition duration-200 focus:outline-none {rounded} {sizeClasses} {themeClasses} {$$props.class}"><slot/></a>
{:else if type === 'submit'}
  <button type="submit" class="text-center shadow-md transition duration-200 focus:outline-none {rounded} {sizeClasses} {themeClasses} {$$props.class}"><slot/></button>
{/if}