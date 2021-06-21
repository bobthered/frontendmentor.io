<script>
  // _imports
  import { base } from '$app/paths';

  // props ( external )
  export let i;
  export let show;
  export let title;
  export let toggleMenu;

  // props ( internal )
  const lineHeight       = 'leading-[25px]'
  const padding          = 'py-[11px] lg:px-[15.5px] lg:px-[16px]'
  const rounded          = 'rounded-full';
  const textAlign        = 'text-center'
  const textColor        = '';
  const textSize         = 'lg:text-[13px]'
  const transition       = 'transition duration-200'
  const width            = 'w-full lg:w-auto'
  const transitionDelays = [
    'delay-300',
    'delay-400',
    'delay-500',
    'delay-600',
    'delay-700',
    'delay-800',
    'delay-900',
    'delay-1000',
    'delay-1100',
    'delay-1200',
  ]
  
  // props ( dynamic )
  $: opacity         = `${show?'opacity-100':'opacity-0'} lg:opacity-100 lg:hover:opacity-50`;
  $: transform       = `transform ${show?'translate-x-0':'translate-x-[-1rem]'} lg:translate-x-0`;
  $: transitionDelay = `${transitionDelays[i]} lg:delay-0`;
  $: classes         = `${lineHeight} ${padding} ${opacity} ${rounded} ${textAlign} ${textSize} ${textColor} ${transition} ${transitionDelay} ${transform} ${width} ${$$props.class !== undefined ? $$props.class : ''}`;
</script>

<a on:click|preventDefault={toggleMenu} href='{base}/{title.toLowerCase().replace(/\s/g,'-')}' class={classes}>{title}</a>