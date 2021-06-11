<script>
  // components
  import Button from '../components/Button.svelte';
  import Card from '../components/Card.svelte';
  import Container from '../components/Container.svelte';
  import Switch from '../components/Switch.svelte';

  // css
  import '../css/style.css';

  // props ( internal )
  let checked = false;
  const tiers = [
    {rounded: 'rounded-xl lg:rounded-tr-none lg:rounded-br-none', cardPadding: 'p-[30px]', buttonTheme: 'default', divide: 'divide-gray-300 divide-opacity-50', theme:'white', title:'Basic', pricing:{Annually:199.99, Monthly:19.99}, storage:'500 GB', users:2, transfer:3},
    {rounded: 'rounded-xl', cardPadding: 'p-[30px] lg:py-[54px]', buttonTheme: 'white', divide: 'divide-white divide-opacity-30', theme:'purple', title:'Professional', pricing:{Annually:249.99, Monthly:24.99}, storage:'1 TB', users:5, transfer:10},
    {rounded: 'rounded-xl lg:rounded-tl-none lg:rounded-bl-none', cardPadding: 'p-[30px]', buttonTheme: 'default', divide: 'divide-gray-300 divide-opacity-50', theme:'white', title:'Master', pricing:{Annually:399.99, Monthly:39.99}, storage:'2 TB', users:10, transfer:20},
  ]

  // props ( dynamic )
  $: billing = checked ? 'Monthly' : 'Annually';
</script>

<svelte:head>
  <title>Pricing Component with Toggle - Frontendmentor.io</title>
</svelte:head>

<style>
  ::selection {
    background-color:hsl(237, 63%, 64%);
    color: #fff;
  }
</style>

<main class="flex items-center relative font-bold text-gray-700 min-h-screen overflow-hidden">
  <div class="absolute top-0 left-0 w-full h-full bg-gray-50 -z-1"></div>
  <img src="./bg-top.svg" class="absolute top-[-40px] right-[-195px] -z-1 lg:right-[0] lg:top-[0]" />
  <img src="./bg-bottom.svg" class="hidden absolute bottom-[0px] left-[-0px] -z-1 lg:block" />
  <Container>
    <div class="flex flex-col py-[60px]">
      <div class="flex flex-col items-center">
        <div class="text-[32px]">Our Pricing</div>
        <div class="mt-[36px] flex justify-center items-center space-x-[24px] text-gray-300">
          <div>Annually</div>
          <Switch bind:checked />
          <div>Monthly</div>
        </div>
      </div>
      <div class="flex flex-col mt-[80px] space-y-[36px] lg:flex-row lg:space-y-0 lg:mt-[64px] lg:items-center">
        {#each tiers as {rounded, cardPadding, buttonTheme, divide, theme, title, pricing, storage, users, transfer}}
          <Card {theme} padding={cardPadding} {rounded}>
            <div class="flex flex-col divide-y {divide}">
              <div class="flex flex-col pb-[16px]">
                <div class="text-center text-[18px] leading-[28px]">{title}</div>
                <div class="flex items-center justify-center mt-[8px]">
                  <div class="text-[44px]">$</div>
                  <div class="text-[68px]">{pricing[billing].toFixed(2)}</div>
                </div>
              </div>
              <div class="text-center text-[15px] leading-[20px] py-[16px]">{storage} Storage</div>
              <div class="text-center text-[15px] leading-[20px] py-[16px]">{users} Users Allowed</div>
              <div class="text-center text-[15px] leading-[20px] py-[16px]">Send up to {transfer} GB</div>
              <div class="flex pt-[34px]">
                <Button theme={buttonTheme}>Learn More</Button>
              </div>
            </div>
          </Card>
        {/each}
      </div>
    </div>
  </Container>
</main>