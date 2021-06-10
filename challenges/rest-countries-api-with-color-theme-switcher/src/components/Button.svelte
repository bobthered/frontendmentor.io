<script>
  export let href = "#";
  export let size = "normal";
  $: sizeClasses = size === 'normal' ? "px-[24px] py-[6px] text-[14px] lg:text-[16px] lg:py-[8px] lg:px-[36px]" : 
                   size === 'small' ? 'px-[24px] py-[6px] text-[14px]':''
</script>
<a {href} on:click class="shadow-md bg-light dark:bg-dark rounded text-center flex space-x-[8px] {sizeClasses} {$$props.class}"><slot/></a>