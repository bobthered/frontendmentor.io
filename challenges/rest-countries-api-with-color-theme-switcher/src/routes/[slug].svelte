<script context="module">
  import { base } from '$app/paths';

  export async function load({page}) {
    const slug = page.params.slug;
    return {
      props: {
        slug
      }
    }
  }
</script>
<script>
  // components
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';
  import { ArrowNarrowLeft } from '../components/Icons';

  // props
  export let slug;
  let borders = [];
  $: country = [...$countries].filter(obj=>obj.name.toLowerCase().replace(/\s/g,'-') === slug)[0];
  $: if ( country !== undefined ) {
    if ( typeof country.topLevelDomain === 'object') {

      country.population = country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      country.topLevelDomain = country.topLevelDomain.join(', ');
      country.currencies = country.currencies.map(currency=>currency.name).join(', ');
      country.languages = country.languages.map(language=>language.name).join(', ');
      country.mutated = true;
    }
    borders = [...$countries].filter(obj=>country.borders.includes(obj.alpha3Code));
  }
  const info1 = [
    {title:'Native Name', key:'nativeName'},
    {title:'Population', key:'population'},
    {title:'Region', key:'region'},
    {title:'Sub Region', key:'subregion'},
    {title:'Capital', key:'capital'},
  ]
  const info2 = [
    {title:'Top Level Domain', key:'topLevelDomain'},
    {title:'Currencies', key:'currencies'},
    {title:'Languages', key:'languages'},
  ]

  // store
  import countries from './countriesStore.js';
</script>

<svelte:head>
  <title>{country !== undefined ? country.name + ' - ' : ''}REST Countries API with Color Theme Switcher - Frontendmentor.io</title>
</svelte:head>

<Container>
  <div class="flex justify-start mt-[16px] px-[12px] lg:mt-[32px] lg:px-0">
    <Button href="{base}"><ArrowNarrowLeft class="w-[20px] h-[20px]" /><div>Back</div></Button>
  </div>
  {#if country !== undefined}
    <div class="flex flex-col mt-[64px] px-[12px] lg:px-0 lg:mt-[80px] lg:flex-row lg:justify-between lg:items-center">
      <img src="{country.flag}" class="lg:w-[560px]" />
      <div class="flex flex-col mt-[44px] lg:mt-0 lg:w-[600px]">
        <div class="font-bold text-[22px] lg:text-[32px]">{country.name}</div>
        <div class="flex flex-col lg:grid lg:grid-cols-2 text-[14px] leading-[32px] lg:text-[16px] lg:mt-[18px]">
          <div class="flex flex-col mt-[14px] lg:mt-0">
            {#each info1 as {title, key}}
              {#if country[key] !== ''}
                <div><span class="font-semibold">{title}: </span>{country[key]}</div>
              {/if}
            {/each}
          </div>
          <div class="flex flex-col mt-[32px] lg:mt-0">
            {#each info2 as {title, key}}
              {#if country[key] !== ''}
                <div><span class="font-semibold">{title}: </span>{country[key]}</div>
              {/if}
            {/each}
          </div>
        </div>
        <div class="flex flex-col mt-[33px] lg:flex-row lg:items-start lg:space-x-[16px]">
          <div class="font-semibold whitespace-nowrap">Border Countries:</div>
          <div class="flex justify-start flex-wrap mt-[16px] ml-[-8px] lg:mt-0">
            {#if borders.length === 0}
              None
            {:else}
              {#each borders as {name}}
                <Button href="{base}/{name.toLowerCase().replace(/\s/g,'-')}" class="ml-[8px] mb-[8px] whitespace-no-wrap" size="small">{name}</Button>
              {/each}
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/if}
</Container>