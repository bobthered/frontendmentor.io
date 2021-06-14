<script>
  // _imports
  import { onMount } from 'svelte'

  // props ( external )
  export let alt
  export let transition = 'transition duration-200';
  export let src

  // props ( private )
  let loaded = false
  let thisImage;

  // props ( dynamic )
  $: transitionClasses = loaded ? 'opacity-100' : 'opacity-0';
  

  onMount(() => {
    thisImage.onload = () => {
      loaded = true
    }
  }) 

</script>

<img {src} {alt} class="{transition} {transitionClasses} {$$props.class !== undefined ? $$props.class :''}" bind:this={thisImage} />