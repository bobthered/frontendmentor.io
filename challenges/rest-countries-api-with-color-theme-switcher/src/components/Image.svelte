<script>
  // _imports
  import { onMount } from 'svelte'

  // props
  export let alt
  let loaded = false
  export let src
  let thisImage
  export let transition = 'transition duration-200';
  $: transitionClasses = loaded ? 'opacity-100' : 'opacity-0';

  onMount(() => {
    thisImage.onload = () => {
      loaded = true
    }
  }) 

</script>

<img {src} {alt} class="{transition} {transitionClasses} {$$props.class}" bind:this={thisImage} />