<script>
  // components
  import Accordion from '../components/Accordion.svelte';
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';

  // props ( internal )
  const faqs = [
    {title:'What is Bookmark?', description:'Proin lobortis odio nec sapien volutpat, congue fringilla diam hendrerit. Integer pellentesque, justo fringilla lobortis euismod, magna mauris accumsan elit, gravida fermentum tortor lectus at nisi. Aliquam tempor leo bibendum orci dignissim ultricies. Curabitur porttitor, ipsum eget tempor pharetra, sapien nisi dictum justo, a sodales erat lectus at orci. Aenean accumsan eros vitae rhoncus suscipit. Sed vel felis sit amet nunc vulputate venenatis. Pellentesque vitae augue semper, tristique odio at, rhoncus quam. Proin at lectus sem. Nam viverra molestie turpis. Donec vehicula, felis eu placerat aliquet, eros orci cursus sapien, interdum finibus diam nisi vel nisi. Phasellus ac pharetra sem. Phasellus consequat nisl in dapibus ultrices. Sed odio lorem, convallis nec rutrum mollis, dignissim vel mi. Praesent ultricies urna urna, sit amet dictum tellus venenatis ac.', visible: false},
    {title:'How can I request a new browser?', description:'Fusce imperdiet blandit nisi id dictum. In sed ex eget tellus tempus blandit. Nulla rhoncus justo at porttitor facilisis. Sed libero nunc, gravida tempus quam in, faucibus finibus nulla. In cursus, lectus eu elementum viverra, arcu quam sodales quam, a tempus purus nunc nec neque. Nulla fermentum, nibh eu ultrices lacinia, odio quam pulvinar urna, et imperdiet augue felis sed diam. Nunc laoreet libero quis vulputate scelerisque.', visible: false},
    {title:'Is there a mobile app?', description:'Sed tincidunt venenatis sapien, eget scelerisque mauris mattis id. Integer arcu justo, efficitur at ipsum at, sodales facilisis arcu. Aliquam accumsan tincidunt lacus eu venenatis. Cras volutpat magna pellentesque felis rutrum, at rutrum tellus pulvinar. Vivamus gravida sollicitudin metus non dignissim. Donec pellentesque ac turpis id consectetur. Etiam tincidunt mauris est. Aenean commodo, lectus a elementum vestibulum, tortor nunc finibus ipsum, non sodales purus purus in sapien. Pellentesque pellentesque mattis magna vel pharetra. Integer facilisis lorem et turpis aliquet, sit amet ultrices lectus volutpat. Pellentesque suscipit urna a dui rhoncus mattis.', visible: false},
    {title:'What about other Chromium browsers?', description:'Integer vel dolor placerat, tempor nibh sed, scelerisque diam. Pellentesque quis lacus eu arcu varius commodo quis commodo arcu. Fusce eu hendrerit velit. Curabitur dapibus velit ac libero posuere, vel tempus lorem consequat. Quisque rhoncus dolor augue, id tristique risus commodo a. Donec at lacus vel est dapibus dapibus. Nulla et velit nec nibh lobortis dictum.', visible: false},
  ]
</script>

<Container class="mt-[32px] lg:mt-[-8px]">
  <div class="flex flex-col mx-auto lg:w-[540px]">
    <div class="text-blue-dark font-medium text-[24px] leading-[30px] text-center lg:text-[32px]">Frequently Asked Questions</div>
    <div class="text-[15px] leading-[25px] mt-[18px] text-gray text-center lg:text-[18px] lg:leading-[28px] lg:w-[540px] lg:mx-auto lg:mt-[26px]">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</div>
    <div class="flex flex-col text-[15px] mt-[46px] border-gray border-opacity-30 lg:text-[18px] lg:mt-[58px] lg:border-t-[1px]">
      <Accordion items={faqs} />
    </div>
    <div class="flex">
      <Button class="mx-auto mt-[44px]">More Info</Button>
    </div>
  </div>
</Container>