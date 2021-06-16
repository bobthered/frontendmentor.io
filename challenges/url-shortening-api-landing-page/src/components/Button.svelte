<script>
  // props ( external )
  export let href       = '#';
  export let outline    = 'outline-none';
  export let padding    = 'px-[2rem] py-[10px]'
  export let ring       = 'ring ring-opacity-0 focus:ring-opacity-30';
  export let rounded    = 'rounded-full';
  export let shadow     = '';
  export let theme      = 'default';
  export let transition = 'transition duration-200';
  export let type       = 'link';
  export let style      = '';

  // props ( dynamic )
  $: themeClasses = theme === 'default' ? 'bg-cyan bg-opacity-100 ring-cyan text-white hover:bg-opacity-70' : 
                    theme === 'violet' ? 'bg-violet bg-opacit-100 ring-violet text-white hover:bg-opacity-70' :
                    theme === 'transparent' ? 'bg-transparent' : '';
</script>

{#if type === 'link'}
  <a {href} on:click|preventDefault class="text-center font-bold whitespace-nowrap {outline} {padding} {ring} {rounded} {shadow} {transition} {themeClasses} {$$props.class !== undefined ? $$props.class :''}" style={style !== undefined ? style : ''}><slot/></a>
{:else if type === 'submit'}
  <button type="submit" class="text-center font-bold whitespace-nowrap {outline} {padding} {ring} {rounded} {shadow} {transition} {themeClasses} {$$props.class !== undefined ? $$props.class :''}" style={style !== undefined ? style : ''}><slot/></button>
{:else}
  <button class="text-center font-bold whitespace-nowrap {outline} {padding} {ring} {rounded} {shadow} {transition} {themeClasses} {$$props.class !== undefined ? $$props.class :''}" style={style !== undefined ? style : ''}><slot/></button>
{/if}