<script>
  // props
  export let padding = ''
  export let shadow = '';
</script>

<div class="rounded flex flex-col overflow-hidden bg-white {shadow} {padding} {$$props.class}">
  <slot/>
</div>