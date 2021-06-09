<script>
  // components
  import Container from '../components/Container.svelte';

  // props
  const reasons = [
    {title:'Online Banking',description:'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',icon:'online'},
    {title:'Simple Budgeting',description:'See exactly where your money goes each month. Receive notifications when you\'re close to your hitting limits.',icon:'budgeting'},
    {title:'Fast Onboarding',description:'We don\'t do branches. Open your account in minutes online and start taking control of your finances right away.',icon:'onboarding'},
    {title:'Open API',description:'Manage your savings, investments, pension, and much much more from one account. Tracking your money has never been easier.',icon:'api'},
  ]
</script>

<div class="w-full py-[68px] bg-gray-100 flex justify-center lg:py-[106px]">
  <Container>
    <div class="flex flex-col items-stretch">
      <div class="text-[1.9rem] leading-[37px] text-center lg:text-left lg:text-[38.5px]">Why choose Easybank?</div>
      <div class="text-gray-500 text-[14.75px] leading-[27px] mt-[12px] text-center lg:text-left lg:text-[17.4px] lg:w-[620px] lg:mt-[30px]">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</div>
      <div class="grid grid-cols-1 gap-[33px] mt-[52px] lg:grid-cols-4 lg:mt-[73px] lg:gap-[30px]">
        {#each reasons as {title, description, icon}}
          <div class="flex flex-col items-center w-full lg:items-start">
            <img src="./icon-{icon}.svg" alt={title} />
            <div class="text-[19.5px] mt-[23px] lg:text-[23px] lg:mt-[38px]">{title}</div>
            <div class="text-gray-500 text-center text-[14.75px] leading-[25px] mt-[15px] lg:text-left lg:text-[15.5px] lg:leading-[26px] lg:mt-[22px]">{description}</div>
          </div>
        {/each}
      </div>
    </div>
  </Container>
</div>