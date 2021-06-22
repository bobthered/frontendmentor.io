<script>
  // components
  import Container from '$components/Container.svelte';
  import Form from '$components/Form.svelte';
  import Section from '$components/Section.svelte';
</script>

<Section padding="py-[140px] pb-[100px] overflow-hidden lg:py-[250px] lg:pb-[266px]">
  <Container>
    <div class="relative flex flex-col text-blue-dark">
      <img src="./illustration-1.svg" alt="Hero Illustration" class="lg:absolute lg:left-[50%] lg:top-[50%] lg:transform lg:translate-y-[-50%] lg:w-[640px]"/>
      <div class="flex flex-col lg:w-1/2">
        <div class="font-heading font-bold text-[25px] text-center mt-[28px] lg:text-left lg:text-[40px]">All your files in one secure location, accessible anywhere.</div>
        <div class="text-center mt-[22px] text-[14px] px-[8px] lg:text-left lg:text-[18px] lg:pl-0 lg:pr-[40px] lg:mt-[14px] lg:leading-[24px]">Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</div>
        <Form flex="flex flex-col lg:flex-row" space="space-y-[18px] lg:space-y-0 lg:space-x-[18px]" width="w-[300px] lg:w-[504px]" class="mt-[32px] self-center lg:self-auto lg:mt-[26px]"/>
      </div>
    </div>
  </Container>
</Section>