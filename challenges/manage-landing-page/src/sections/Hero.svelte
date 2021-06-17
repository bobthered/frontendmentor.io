<script>
  // components
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';
  import Section from '../components/Section.svelte';
</script>

<Section padding="pt-[104px] pb-[48px] lg:py-[270px]" position="relative">
  <img alt="Intro Illustration" src="./illustration-intro.svg" class="mx-auto w-[346px] lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:translate-y-[-50%] lg:w-[580px] lg:ml-[-4px] lg:mt-[10px]" />
  <Container>
    <div class="flex flex-col items-center lg:w-[500px] lg:items-start">
      <div class="font-semibold text-[38px] leading-[50px] text-center lg:text-[54px] lg:leading-[64px] lg:text-left">Bring everyone together to build better products.</div>
      <div class="text-opacity-50 text-blue leading-[28px] text-center mt-[8px] lg:text-left lg:mt-[32px] lg:w-[350px] lg:leading-[26px]">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</div>
      <Button class="mt-[30px] lg:mt-[40px]">Get Started</Button>
    </div>
  </Container>
</Section>