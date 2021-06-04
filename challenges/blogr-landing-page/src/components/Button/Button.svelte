<script>
  // props
  export let theme = 'default';

  $: classes = theme === 'outline' ? 'bg-transparent text-white border border-white hover:bg-white hover:text-cta' : 
               theme === 'default' ? 'bg-white text-cta border border-white hover:bg-opacity-30 hover:text-white':
               theme === 'transparent' ? 'bg-transparent text-body' :
               theme === 'gradient' ? 'bg-gradient-to-r from-cta-gradient-1 to-cta-gradient-2 text-white' : 
               theme === 'header-primary' ? 'bg-gradient-to-r from-cta-gradient-1 to-cta-gradient-2 text-white lg:from-white lg:to-white lg:text-cta hover:bg-opacity-30':
               theme === 'header-secondary' ? 'bg-transparent text-body lg:text-white' : '';
</script>
<a href="#" class="rounded-full px-[1rem] py-[.7rem] font-ubuntu font-bold whitespace-nowrap w-full outline-none text-center transition duration-200 ring ring-white ring-opacity-0 {classes} focus:ring-opacity-30"><slot/></a>