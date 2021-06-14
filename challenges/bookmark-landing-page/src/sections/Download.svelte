<script>
  // components
  import Button from "../components/Button.svelte";
  import Card from "../components/Card.svelte";
  import Container from "../components/Container.svelte";

  // props ( internal )
  const browsers = [
    { browser: "Chrome", minimumVersion: 62, cardClass: "lg:mt-[0px]" },
    { browser: "Firefox", minimumVersion: 55, cardClass: "lg:mt-[40px]" },
    { browser: "Opera", minimumVersion: 46, cardClass: "lg:mt-[80px]" },
  ];
</script>

<Container class="py-[96px] lg:py-[164px]">
  <div
    class="text-blue-dark font-medium text-[24px] leading-[52px] text-center lg:text-[32px]">
    Download the extension
  </div>
  <div
    class="text-[15px] leading-[25px] text-gray text-center lg:text-[18px] lg:leading-[28px] lg:w-[540px] lg:mx-auto lg:mt-[16px]">
    We've got more browsers in the pipeline. Please do let us know if you've got
    a favourite you'd like us to prioritize.
  </div>
  <div
    class="grid gap-[36px] mt-[50px] lg:grid-cols-3 lg:justify-center lg:items-start lg:w-[900px] lg:mx-auto">
    {#each browsers as { browser, minimumVersion, cardClass }}
      <Card class={cardClass}>
        <div class="flex flex-col items-center">
          <div class="flex flex-col items-center p-[32px] mt-[8px]">
            <img src="./logo-{browser.toLowerCase()}.svg" />
            <div class="font-medium text-blue-dark text-[20px] mt-[28px]">
              Add to
              {browser}
            </div>
            <div class="text-[15px] text-gray mt-[6px]">
              Minimum version
              {minimumVersion}
            </div>
          </div>
          <div
            class="w-full h-[4px]"
            style="background-image:url(./bg-dots.svg)" />
          <div class="flex flex-grow p-[32px] w-full">
            <Button class="w-full">Add & Install Extension</Button>
          </div>
        </div>
      </Card>
    {/each}
  </div>
</Container>
