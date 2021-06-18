<script>
  // props ( external )
  export let backgroundColor = 'bg-white';
  export let boxShadow       = '';
  export let fontWeight      = 'font-medium';
  export let outline         = 'outline-none focus:outline-none';
  export let padding         = 'px-[30px] py-[11px]'
  export let placeholder     = '';
  export let ring            = 'ring ring-opacity-0 ring-white focus:ring-opacity-30';
  export let rounded         = 'rounded-full';
  export let shadow          = '';
  export let textAlign       = '';
  export let textColor       = '';
  export let textSize        = '';
  export let transition      = 'transition duration-200';
  export let type            = '';
  export let style           = '';
  export let whitespace      = 'whitespace-nowrap';
  export let value;

  // props ( dynamic )
  $: classes = `${backgroundColor} ${boxShadow} ${fontWeight} ${outline} ${padding} ${ring} ${rounded} ${shadow} ${textAlign} ${textColor} ${textSize} ${transition} ${whitespace} ${$$props.class !== undefined ? $$props.class : ''}`;
</script>

{#if type === 'email'}
  <input type="email" bind:value class={classes} {placeholder} style={style !== undefined ? style : ''}/>
{:else if type === 'number'}
  <input type="number" bind:value class={classes} {placeholder} style={style !== undefined ? style : ''}/>
{:else if type === 'password'}
  <input type="password" bind:value class={classes} {placeholder} style={style !== undefined ? style : ''}/>
{:else}
  <input type="text" bind:value class={classes} {placeholder} style={style !== undefined ? style : ''}/>
{/if}