<script>
  // components
  import Button from '$components/Button.svelte';
  import Input from '$components/Input.svelte';

  // props ( external )
  export let buttonClasses = '';
  export let buttonText = 'Get Started';
  export let flex  = 'flex flex-col'
  export let inputRing = 'ring ring-opacity-0 ring-blue-dark focus:ring-opacity-30 ring-offset ring-offset-1 ring-offset-blue-dark';
  export let space = 'space-y-[18px]'
  export let width = 'w-[300px]'
</script>

<form on:submit|preventDefault class="{flex} {space} {width} {$$props.class !== undefined ? $$props.class : ''}">
  <Input ring={inputRing} type="email" placeholder="Enter you email..." />
  <Button type="submit" class={buttonClasses}>{buttonText}</Button>
</form>