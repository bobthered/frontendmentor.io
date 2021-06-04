<script>
  export let size = 'normal';
  $: classes = size === 'normal' ? 'lg:w-[1158px]' :
               size === 'small' ? 'lg:w-[800px]' : ''
</script>
<div class="w-full px-[1.5rem] {classes} {$$props.class}"><slot/></div>