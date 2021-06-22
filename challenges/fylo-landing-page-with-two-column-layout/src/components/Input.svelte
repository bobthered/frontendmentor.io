<script>
  // props ( external )
  export let backgroundColor = 'bg-white';
  export let boxShadow       = '';
  export let fontWeight      = 'font-medium';
  export let outline         = 'outline-none focus:outline-none';
  export let padding         = 'px-[20px] py-[10px]'
  export let placeholder     = '';
  export let ring            = 'ring ring-opacity-0 ring-blue-dark focus:ring-opacity-30 ring-offset ring-offset-1 ring-offset-blue-dark';
  export let rounded         = 'rounded';
  export let shadow          = 'shadow';
  export let style           = '';
  export let textAlign       = '';
  export let textColor       = '';
  export let textSize        = 'text-[13.25px] lg:text-[16px]';
  export let transition      = 'transition duration-200';
  export let type            = '';
  export let whitespace      = 'whitespace-nowrap';
  export let width           = 'w-full'
  export let value;

  // props ( dynamic )
  $: classes = `${backgroundColor} ${boxShadow} ${fontWeight} ${outline} ${padding} ${ring} ${rounded} ${shadow} ${textAlign} ${textColor} ${textSize} ${transition} ${whitespace} ${width} ${$$props.class !== undefined ? $$props.class : ''}`;
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