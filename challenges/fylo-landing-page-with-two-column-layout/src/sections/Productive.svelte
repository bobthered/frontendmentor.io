<script>
  // components
  import Button from "$components/Button.svelte";
  import Card from "$components/Card.svelte";
  import Container from "$components/Container.svelte";
  import Section from "$components/Section.svelte";
</script>

<Section padding="relative bg-blue-very-light">
  <img src="./bg-curve-mobile.svg" alt="Curve" class="transform translate-y-[-100%] absolute top-0 left-0 w-full lg:hidden" />
  <img src="./bg-curve-desktop.svg" alt="Curve" class="transform translate-y-[-100%] absolute top-0 left-0 w-full hidden lg:block" />
  <div class="overflow-hidden max-w-screen py-[82px] pt-[29px] mt-[53px] lg:py-[108px]">
    <Container>
      <div class="relative flex flex-col text-blue-dark">
        <img src="./illustration-2.svg" alt="Productive" class="lg:absolute lg:left-[50%] lg:top-[50%] lg:transform lg:translate-y-[-50%] lg:w-[640px]" />
        <div class="flex flex-col lg:w-[-60%]">
          <div class="font-bold font-heading text-center mt-[83px] lg:text-left lg:text-[40px]">Stay productive, wherever you are</div>
          <div class="text-[14px] leading-[20px] text blue-desaturated mt-[24px] lg:text-[16px] lg:w-[520px] lg:mt-[32px] lg:leading-[21.5px]">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.<br><br>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</div>
          <Button type="arrow" class="mt-[28px] self-center lg:self-start lg:mt-[10px]">See how Fylo works</Button>
          <Card padding='pl-[26px] pr-[14px] py-[20px] lg:px-[32px] lg:py-[26px]' class="mt-[32px] self-center w-[280px] lg:self-start lg:mt-[36px] lg:w-[356px]">
            <img src="./icon-quotes.svg" alt="Quotes" class="w-[13px] lg:w-[20px]" />
            <div class="text-[10.75px] leading-[18px] mt-[8px] lg:text-[14px] lg:leading-[23px]">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</div>
            <div class="flex items-center space-x-[8px] mt-[13px] lg:space-x-[7px]">
              <img src="./avatar-testimonial.jpg" alt="Kyle Burton" class="rounded-full w-[24px] h-[24px] lg:w-[34px] lg:h-[34px]" />
              <div class="flex flex-col">
                <div class="font-bold text-[10.5px] lg:text-[13px]">Kyle Burton</div>
                <div class="text-[6.5px] lg:text-[8.75px]">Founder & CEO, Huddle</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  </div>
</Section>
