<script>
  // props
  export let href = "#";
</script>

<a {href} on:click class="ring ring-1 ring-red-500 rounded-full px-[2rem] py-[1rem] text-center {$$props.class}"><slot/></a>