<script>
  // component
  import Card from '../components/Card.svelte';
  import Container from '../components/Container.svelte';

  // props ( internal )
  const stats = [
    {title:'Brand Recognition', description:'Boost your brand recognition with each click. Generic links don\'t mean a thing. Branded links help instil confidence in your content.'},
    {title:'Detailed Records', description:'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'},
    {title:'Fully Customizable', description:'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'},
  ]

  // sections
  import Form from './Form.svelte';
</script>

<section class="py-[171px] pb-[84px] lg:py-[0px] lg:pb-[216px] bg-gray-100">
  <Container>
    <Form />
    <div class="flex flex-col mt-[88px] lg:mt-[130px]">
      <div class="flex flex-col">
        <div class="text-[27px] font-bold text-center lg:text-[38px]">Advanced Statistics</div>
        <div class="text-gray-400 text-[16px] leading-[27px] text-center mt-[20px] lg:text-[18px] lg:w-[540px] lg:self-center lg:mt-[18px]">Track how your links are performing across the web with our advanced statistics dashboard.</div>
      </div>
      <div class="relative flex flex-col mt-[92px] lg:mt-[100px]">
        <div class="absolute w-[8px] h-full bg-cyan top-0 left-1/2 transform -translate-x-1/2 lg:w-full lg:h-[8px] lg:top-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[24px]"></div>
        <div class="flex flex-col space-y-[94px] lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-[30px]">
          {#each stats as {title, description}, i}
            <Card class="transform {i===1?'lg:translate-y-[48px]':i===2?'lg:translate-y-[96px]':''}">
              <div class="rounded-full w-[88px] h-[88px] flex items-center justify-center bg-violet absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:left-[30px] lg:translate-x-0">
                <img alt={title} src="./icon-{title.toLowerCase().replace(/\s/g,'-')}.svg" />
              </div>
              <div class="text-[22px] font-bold text-center lg:text-left">{title}</div>
              <div class="text-gray-400 text-center text-[14.9px] leading-[26px] mt-[16px] lg:text-left">{description}</div>
            </Card>
          {/each}
        </div>
      </div>
    </div>
  </Container>
</section>