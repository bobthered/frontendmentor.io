<script>
  // components
  import Billing from "../components/Billing.svelte";
  import Button from "../components/Button.svelte";
  import Card from "../components/Card.svelte";
  import Container from "../components/Container.svelte";
  import Divider from "../components/Divider.svelte";
  import Features from "../components/Features.svelte";
  import Pageviews from "../components/Pageviews.svelte";
  import Pricing from "../components/Pricing.svelte";
  import Slider from "../components/Slider.svelte";

  // css
  import "../css/style.css";

  // props
  let billing = 'Monthly';
  const pricingOptions = [
    {pageviews: '10K', monthly: 8},
    {pageviews: '50K', monthly:12 },
    {pageviews: '100K', monthly:16 },
    {pageviews: '500K', monthly:24 },
    {pageviews: '1M', monthly:36 },
  ]
  let step = 2;
  $: checked = billing === 'Monthly' ? false : true;
  $: discount = checked ? .75 : 1;
  $: monthly = (pricingOptions[step].monthly * discount).toFixed(2);
  $: pageviews = pricingOptions[step].pageviews;
</script>

<svelte:head>
  <title>Interactive Pricing Component - Frontendmentor.io</title>
</svelte:head>

<main class="relative flex flex-col items-center py-[5.5rem] lg:py-[6.5rem]">
  <img src="./bg-pattern.svg" class="absolute top-0 left-0 h-[400px] object-cover -z-1 lg:w-full lg:h-auto" />
  <Container>
    <div class="relative flex flex-col text-blue items-center space-y-[.7rem]">
      <img src="./pattern-circles.svg" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-1" />
      <div class="text-[1.25rem] font-extrabold lg:text-[1.75rem]">
        Simple, traffic-based pricing
      </div>
      <div class="text-blue-light text-center text-[.83rem] lg:text-[.97rem]">
        Sign-up for our 30 day trial.<br class="lg:hidden" />No credit card required
      </div>
    </div>
    <Card class="mt-[5rem]">
      <div class="flex flex-col w-full space-y-[2.25rem] items-center">
        <div class="flex flex-col w-full items-center lg:flex-row lg:flex-wrap">
          <Pageviews {pageviews} />
          <Slider bind:step />
          <Pricing {monthly} />
        </div>
        <Billing bind:checked/>
        <Divider />
        <div class="flex flex-col w-full space-y-[2.25rem] items-center lg:flex-row lg:space-y-0 lg:justify-between">
          <Features />
          <Button on:click={e=>e.preventDefault()}>Start my trial</Button>
        </div>
      </div>
    </Card>
  </Container>
</main>
