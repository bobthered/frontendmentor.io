<script>
  // components
  import Container from '../Container.svelte';
</script>

<div class="flex flex-col items-center text-body py-[6.25rem] w-full lg:py-[9.5rem] lg:pb-[15rem] overflow-hidden lg:relative">
  <img src="./illustration-editor-desktop.svg" class="hidden transform lg:block lg:absolute lg:left-[50%] lg:ml-[5rem] lg:w-[60rem] lg:top-[50%] lg:-translate-y-1/2" />
  <Container>
    <div class="text-center font-semibold text-[1.625rem] lg:text-[2.35rem]">Designed for the future</div>
    <img src="./illustration-editor-mobile.svg" class="py-[3rem] transform scale-[1.25] lg:absolute lg:hidden" />
    <div class="flex flex-col lg:w-[500px] lg:mt-[5rem]">
      <div class="py-[1.35rem]">
        <div class="text-center font-semibold text-[1.75rem] leading-[2rem] lg:text-left">Introducing an extensible editor</div>
        <div class="text-center text-[1.035rem] leading-[1.75rem] mt-[1rem] lg:text-left">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown.  Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</div>
      </div>
      <div class="py-[1.35rem]">
        <div class="text-center font-semibold text-[1.75rem] leading-[2rem] lg:text-left">Robust content management</div>
        <div class="text-center text-[1.035rem] leading-[1.75rem] mt-[1rem] lg:text-left">Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.</div>
      </div>
    </div>
  </Container>
</div>