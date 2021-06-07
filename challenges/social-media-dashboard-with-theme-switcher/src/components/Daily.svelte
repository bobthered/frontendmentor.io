<script>
  // components
  import Card from './Card.svelte';
  import { ArrowDown } from './Icons';

  // props
  const cards = [
    {title:'Page Views', icon:'facebook',number:'87',change:3},
    {title:'Likes', icon:'facebook',number:'52',change:-2},
    {title:'Likes', icon:'instagram',number:'5462',change:2257},
    {title:'Profile Views', icon:'instagram',number:'52k',change:1375},
    {title:'Retweets', icon:'twitter',number:'117',change:303},
    {title:'Likes', icon:'twitter',number:'507',change:553},
    {title:'Likes', icon:'youtube',number:'107',change:-19},
    {title:'Total Views', icon:'youtube',number:'1407',change:-12},
  ]
</script>

<div class="font-bold text-[1.54rem] mt-[2rem]">Overview - Today</div>
<div class="flex flex-col w-full space-y-[1rem] mt-[1.75rem] lg:space-y-0 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-[1.5rem]">
  {#each cards as {title, icon, number, change}}
    <Card>
      <div class="w-full grid grid-cols-2 grid-rows-2">
        <div class="text-light-text-1 font-bold text-[.875rem] leading-[.875rem] dark:text-dark-text-1">{title}</div>
        <div class="flex justify-end items-start"><img src="./icon-{icon}.svg" class="w-[20px]" /></div>
        <div class="font-bold text-[2rem] leading-[2rem] pt-[.32rem]">{number}</div>
        <div class="flex justify-end items-end">
        <div class="flex space-x-[.5rem] items-center justify-end {change<0?'text-red':'text-green'}">
          <ArrowDown class="w-[8px] transform {change<0?'rotate-0':'rotate-180'}"/>
          <div class="font-bold text-[.75rem]">{change}%</div>
        </div>
        </div>
      </div>
    </Card>
  {/each}
</div>