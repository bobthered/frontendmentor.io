<script>
  // props ( internal )
  const classes = 'rounded bg-white px-[16px] py-[12px] text-blue-dark outline-none ring ring-opacity-0 transition duration-200 ring-white focus:ring-opacity-30'

  // props ( external )
  export let type = 'input'
  export let value = '';
</script>

{#if type === 'email'}
  <input type="email" class='{classes} {$$props.class}' bind:value />
{:else if type === 'password'}
  <input type="password" class='{classes} {$$props.class}' bind:value />
{:else if type === 'number'}
  <input type="number" class='{classes} {$$props.class}' bind:value />
{:else}
  <input type="input" class='{classes} {$$props.class}' bind:value />
{/if}