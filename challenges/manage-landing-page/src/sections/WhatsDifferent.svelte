<script>
  // components
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';
  import Section from '../components/Section.svelte';

  // props ( internal )
  const differences = [
    {number:'01', title:'Track company-wide progress', description:'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'},
    {number:'02', title:'Advanced build-in reports', description:'Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep stakeholders informed.'},
    {number:'03', title:'Everything you need in one place', description:'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers on all-in-one team productivity solution.'},
  ]
</script>

<Section padding="py-[46px] lg:mt-[-132px]">
  <Container>
    <div class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-[34px]">
      <div class="flex flex-col items-center lg:items-start">
        <div class="text-[29px] font-bold text-center w-[280px] lg:text-left lg:text-[38.5px] lg:w-auto lg:leading-[44px]">What's different about Manage?</div>
        <div class="text-opacity-50 text-blue text-center mt-[18px] leading-[28px] lg:text-left lg:w-[340px] lg:mt-[28px] lg:leading-[27px]">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</div>
      </div>
      <div class="flex flex-col mt-[52px] space-y-[44px] lg:mt-0 lg:space-y-[38px]">
        {#each differences as {number, title, description}}
          <div class="flex flex-col">
            <div class="relative flex items-center font-bold">
              <div class="transform translate-x-[20px] absolute top-0 left-0 bg-orange bg-opacity-10 w-full h-full -z-1 lg:hidden"></div>
              <div class="rounded-full bg-orange text-white px-[24px] py-[8px]">{number}</div>
              <div class="ml-[8px] text-[15.5px] lg:ml-[26px]">{title}</div>
            </div>
            <div class="text-opacity-50 text-blue text-[13.75px] leading-[28px] mt-[9px] lg:pl-[94px] lg:text-[16px] lg:leading-[26px]">{description}</div>
          </div>
        {/each}
      </div>
    </div>
  </Container>
</Section>