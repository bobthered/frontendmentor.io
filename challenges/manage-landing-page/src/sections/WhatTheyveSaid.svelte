<script>
  // components
  import Button from '../components/Button.svelte';
  import Card from '../components/Card.svelte';
  import Container from '../components/Container.svelte';
  import Section from '../components/Section.svelte';
  import Slider from '../components/Slider.svelte';

  // props ( internal )
  const testimonials = [
    {name:'Anisha Li', testimony:"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."},
    {name:'Ali Bravo', testimony:"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."},
    {name:'Richard Watts', testimony:"Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!"},
    {name:'Shanai Gough', testimony:"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being nitrusive."},
  ]
</script>

<Section padding="py-[16px] pb-[44px] lg:py-[92px] lg:pb-[180px]" class="flex flex-col items-center">
  <Container>
    <div class="text-[31px] font-bold text-center lg:text-[39px]">What they've said</div>
  </Container>
  <Slider class="w-full mt-[60px] pb-[100px] lg:pb-[64px]" initialIndex={1} prevNextButtons={false}>
    {#each testimonials as {name, testimony}}
      <div class="w-full pt-[40px] px-[24px] lg:w-[40%]">
        <Card>
          <img alt={name} src="./avatar-{name.toLowerCase().split(' ')[0]}.png" class="absolute w-[80px] top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-full" />
          <div class="flex flex-col items-center">
            <div class="font-bold">{name}</div>
            <div class="text-blue text-opacity-50 font-medium text-center text-[14px] mt-[20px] leading-[26px] lg:text-[16px]">"{testimony}"</div>
          </div>
        </Card>
      </div>
    {/each}
  </Slider>
  <Button class="self-center">Get Started</Button>
</Section>