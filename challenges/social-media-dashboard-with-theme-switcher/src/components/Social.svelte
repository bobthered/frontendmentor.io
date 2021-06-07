<script>
  // components
  import Card from './Card.svelte';
  import { ArrowDown } from './Icons';

  // props
  const socials = [
    {theme:'facebook', tag:'@nathanf', followers:'1987', type:'Followers', daily:12},
    {theme:'twitter', tag:'@nathanf', followers:'1044', type:'Followers', daily:99},
    {theme:'instagram', tag:'@realnathanf', followers:'11k', type:'Followers', daily:1099},
    {theme:'youtube', tag:'Nathan F.', followers:'8239', type:'Subscribers', daily:-144},
  ]
</script>

<div class="flex flex-col w-full space-y-[1rem] mt-[2rem] lg:grid lg:grid-cols-4 lg:gap-[1.5rem] lg:space-y-0 lg:mt-[2.5rem]">
  {#each socials as {theme, tag, followers, type, daily}}
    <Card {theme}>
      <div class="flex space-x-[.5rem] items-center mt-[.25rem]">
        <img src="./icon-{theme}.svg" class="w-[20px]" />
        <div class="text-light-text-1 font-bold text-[.75rem] dark:text-dark-text-1">{tag}</div>
      </div>
      <div class="text-[3.5rem] font-bold mt-[1.25rem] leading-[4rem]">{followers}</div>
      <div class="uppercase text-light-text-1 text-[.75rem] dark:text-dark-text-1" style="letter-spacing:.3rem">{type}</div>
      <div class="flex space-x-[.5rem] items-center mt-[1.3rem] mb-[.3rem] {daily<0?'text-red':'text-green'}">
        <ArrowDown class="w-[8px] transform {daily<0?'rotate-0':'rotate-180'}"/>
        <div class="font-bold text-[.75rem]">{daily} Today</div>
      </div>
    </Card>
  {/each}
</div>