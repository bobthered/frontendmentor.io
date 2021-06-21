<script>
  // _imports
  import { slide } from 'svelte/transition';

  // components
  import Card from '../components/Card.svelte';
  import Container from '../components/Container.svelte';
  import Section from '../components/Section.svelte';
  import StatElement from '../components/StatElement.svelte';

  // props ( external )
  export let init;
  export let stats;
</script>

<Section padding="" position="relative" class="h-[0px] z-500">
  <Container>
    {#if init}
      <div transition:slide>
        <Card bind:init flex="flex flex-col lg:grid lg:grid-cols-4" class="z-10 transform translate-y-[-50%] mt-[14px] space-y-[15px] lg:space-y-0 lg:mt-0 lg:divide-x lg:divide-x-gray">
          <StatElement label='IP Address' value={stats.ipAddress} />
          <StatElement label='Location' value={stats.location} />
          <StatElement label='Timezone' value={stats.timezone} />
          <StatElement label='ISP' value={stats.isp} />
        </Card>
      </div>
    {/if}
  </Container>
</Section>