<script>
  // _imports
  import { slide } from 'svelte/transition';

  // components
  import Card from '$components/Card.svelte';
  import Container from '$components/Container.svelte';
  import Section from '$components/Section.svelte';

  // handlers
  const clearFilters = () => filters = [];
  const removeFilter = tag => filters = [...filters].filter(f=>f!==tag);

  // props ( external )
  export let filters;
</script>

{#if filters.length > 0}
  <div transition:slide>
    <Section padding="" class="z-10">
      <Container>
        <Card padding="p-[24px]" class="transform translate-y-[-50%]">
          <div class="flex justify-between items-center text-[13px]">
            <div class="flex flex-wrap ml-[-16px] mt-[-16px]">
              {#each filters as filter}
                <div class="flex rounded bg-cyan-50 items-center ml-[16px] mt-[16px] overflow-hidden">
                  <div class="text-cyan-600 font-bold p-[6px] pb-[2px]">{filter}</div>
                  <div on:click={()=>removeFilter(filter)} class="cursor-pointer bg-cyan-600 p-[6px] transition duration-200 hover:bg-cyan-800"><img src="./icon-remove.svg" alt="Remove" /></div>
                </div>
              {/each}
            </div>
            <div on:click={clearFilters} class="rounded cursor-pointer text-gray-500 bg-cyan-600 bg-opacity-0 font-bold p-[6px] pb-[2px] transition duration-200 hover:bg-opacity-100 hover:text-white">Clear</div>
          </div>
        </Card>
      </Container>
    </Section>
  </div>
{/if}