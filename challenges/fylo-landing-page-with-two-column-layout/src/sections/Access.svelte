<script>
  // components
  import Container from "$components/Container.svelte";
  import Form from "$components/Form.svelte";
  import Section from "$components/Section.svelte";
</script>

<Section padding="py-[52px] lg:py-[48px] lg:pb-[84px] bg-blue-desaturated text-white">
  <Container>
    <div class="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start">
      <div class="flex flex-col items-center lg:items-start">
        <div class="text-center font-bold font-heading text-[18px] lg:text-left lg:text-[32px]">Get early access today</div>
        <div class="text-[14px] text-center mt-[14px] w-[290px] lg:text-left lg:w-[540px] lg:text-[17px] lg:leading-[24px]">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you</div>
      </div>
      <Form class="mt-[26px] lg:mt-0" buttonClasses="lg:self-start" buttonText="Get Started for Free" inputRing="ring ring-opacity-0 ring-blue-dark focus:ring-opacity-30" width="w-[300px] lg:w-[500px]" />
    </div>
  </Container>
</Section>
