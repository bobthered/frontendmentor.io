<script>
  // _imports
  import { getContext } from 'svelte';

  // components
  import Card from '../components/Card.svelte';
  import Container from '../components/Container.svelte';
  import Dropdown from '../components/Dropdown.svelte';
  import { Search } from '../components/Icons';
  import Input from '../components/Input.svelte';

  // props
  let region = '';
  let regions = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania'
  ];
  let search = '';

  $: filteredCountries = search !== '' ? [...$countries].filter(country=>country.name.toLowerCase().includes(search.toLowerCase())) :
                         region === '' ? $countries : $countries.filter(country=>country.region === region);

  // store
  import countries from './countriesStore.js';
  import darkMode from '../components/Darkmode/store';
</script>

<svelte:head>
  <title>REST Countries API with Color Theme Switcher - Frontendmentor.io</title>
</svelte:head>

<Container>
  <div class="flex flex-col space-y-[38px] lg:flex-row lg:space-y-0 lg:justify-between">
    <div class="relative text-light-input dark:text-dark-input lg:w-[480px]">
      <Input bind:value={search} />
      <Search class="w-[20px] h-[20px] absolute top-1/2 transform translate-y-[-50%] left-[31px]" />
    </div>
    <div class="w-[200px]">
      <Dropdown bind:current={region} bind:items={regions} placeholder="Filter by Region" />
    </div>
  </div>
  <div class="grid gap-[56px] px-[38px] mt-[32px] lg:grid-cols-4 lg:px-0 lg:gap-x-[72px] lg:gap-y-[90px] lg:mt-[48px]">
    {#each filteredCountries as {flag : src, name, population, region: countryRegion, capital}}
      <Card>
        <a href="./{name.toLowerCase().replace(/\s/g,'-')}">
          <img {src} />
          <div class="flex flex-col p-[25px] text-[14px] leading-[24px]">
            <div class="font-bold text-[18px] leading-[22px]">{name}</div>
            <div class="mt-[16px]"><span class="font-semibold">Population: </span>{population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
            <div class=""><span class="font-semibold">Region: </span>{countryRegion}</div>
            <div class=""><span class="font-semibold">Captal: </span>{capital}</div>
          </div>
        </a>
      </Card>
    {/each}
  </div>
</Container>