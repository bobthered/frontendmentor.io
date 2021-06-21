<script>
  // _imports
  import { slide } from 'svelte/transition';

  // components
  import Card from '../components/Card.svelte';
  import Container from '../components/Container.svelte';
  import Section from '../components/Section.svelte';

  // handlers
  const addFilter = tag => {
    if ( !filters.includes(tag) ) {
      filters = [...filters, tag];
    }
  }

  // props ( external )
  export let filters;
  export let listings;
</script>

<Section padding="py-[56px] lg:py-[66px]" class="bg-cyan-50 bg-opacity-0">
  <Container class="space-y-[42px] lg:space-y-[20px]">
    {#each listings as {company,position,isNew,isFeatured,age,employment,location,tags}}
      <div transition:slide>
        <Card {isFeatured}>
          <div class="flex flex-col px-[24px] py-[32px] relative lg:flex-row lg:items-center lg:py-[34px] lg:px-[40px]">
            <img src="./{company.toLowerCase().replace(/\./g,'').replace(/\s/g,'-')}.svg" alt={company} class="absolute top-0 left-[24px] transform -translate-y-1/2 w-[48px] lg:relative lg:top-auto lg:left-auto lg:translate-y-0 lg:w-auto" />
            <div class="flex flex-col lg:pl-[24px]">
              <div class="flex items-center space-x-[16px]">
                <div class="text-cyan-500 font-bold text-[13px] leading-[23px] lg:text-[14px]">{company}</div>
                {#if isNew}
                  <div class="text-white rounded-full uppercase bg-cyan-600 text-[10px] font-bold pt-[6px] pb-[2px] px-[10px]">New!</div>
                  {/if}
                  {#if isFeatured}
                  <div class="text-white rounded-full uppercase bg-cyan-800 text-[10px] font-bold pt-[6px] pb-[2px] px-[10px]">Featured</div>
                {/if}
              </div>
              <div class="font-bold mt-[10px] lg:text-[18px] transition duration-200 cursor-pointer hover:text-cyan-600">{position}</div>
              <div class="text-gray-500 text-opacity-50 text-[13px] mt-[14px] lg:text-[14.75px] lg:mt-[6px]">{age} • {employment} • {location}</div>
            </div>
            <div class="w-full h-[1px] bg-cyan-500 my-[16px] lg:hidden"></div>
            <div class="flex flex-wrap ml-[-16px] mt-[-16px] flex-grow lg:justify-end">
              {#each tags as tag}
                <div on:click={()=>addFilter(tag)} class="rounded font-bold bg-cyan-50 px-[8px] pt-[6px] pb-[2px] text-cyan-600 ml-[16px] mt-[16px] cursor-pointer text-[13px] transition duration-200 hover:text-white hover:bg-cyan-600">{tag}</div>
              {/each}
            </div>
          </div>
        </Card>
      </div>
    {/each}
  </Container>
</Section>