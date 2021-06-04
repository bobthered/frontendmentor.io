<script>
  // components
  import Container from "../Container.svelte";
</script>

<div class="flex flex-col text-body items-center py-[8rem] relative">
  <img src="./illustration-laptop-desktop.svg" class="hidden absolute right-[50%] mr-[5rem] top-1/2 -translate-y-1/2 transform lg:block" />
  <Container>
    <div class="flex flex-col">
      <img src="./illustration-laptop-mobile.svg" class="transform scale-[1.5] lg:hidden" />
      <div class="flex flex-col lg:w-1/2 lg:self-end">
        <div class="mt-[5rem] py-[1.35rem]">
          <div class="text-center font-semibold text-[1.75rem] leading-[2rem] lg:text-left">Free, open, simple</div>
          <div class="text-center text-[1.035rem] leading-[1.75rem] mt-[1rem] lg:text-left">Blogr is a free and open source application backed by a large community of helpful developers.  It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</div>
        </div>
        <div class="mt-[5rem] py-[1.35rem]">
          <div class="text-center font-semibold text-[1.75rem] leading-[2rem] lg:text-left">Powerful tooling</div>
          <div class="text-center text-[1.035rem] leading-[1.75rem] mt-[1rem] lg:text-left">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</div>
        </div>
      </div>
    </div>
  </Container>
</div>
