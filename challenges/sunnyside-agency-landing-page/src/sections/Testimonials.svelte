<script>
  // component
  import Container from '../components/Container.svelte';
  import IntersectionObserver from '../components/IntersectionObserver.svelte';

  // props ( internal )
  const testimonials = [
    {delay: 'delay-0', name:{first:'Emily',lastInitial:'R'}, testimony:'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.', position:'Marketing Director'},
    {delay: 'delay-150', name:{first:'Thomas',lastInitial:'S'}, testimony:'Sunnyside\'s enthusiasm coupled with their keen interest in our brand\'s success made it a satisfying and enjoyable experience.', position:'Chief Operating Officer'},
    {delay: 'delay-300', name:{first:'Jennie',lastInitial:'F'}, testimony:'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!', position:'Business Owner'},
  ]
</script>

<section class="py-[60px] lg:py-[156px]">
  <Container>
    <div class="font-serif uppercase text-gray-500 text-center tracking-widest lg:text-[20px]">Client Testimonials</div>
    <div class="flex flex-col items-center mt-[64px] space-y-[67px] lg:flex-row lg:space-y-0 lg:space-x-[24px] lg:mt-[78px]">
      {#each testimonials as {delay, name:{first, lastInitial}, testimony, position}}
        <IntersectionObserver once={true} let:intersecting>
          <div class="flex flex-col items-center transform transition duration-1000 {delay} {intersecting?'lg:translate-y-0 lg:opacity-100':'lg:translate-y-[-2rem] lg:opacity-0'}">
            <img alt="{first} {lastInitial}" src="./image-{first.toLowerCase()}.jpg" class="rounded-full w-[72px]" />
            <div class="text-gray-700 text-center text-[18px] mt-[30px] leading-[32px] lg:mt-[58px]">{testimony}</div>
            <div class="font-serif font-black text-[18px] mt-[30px] lg:mt-[67px]">{first} {lastInitial}.</div>
            <div class="text-gray-500 text-[13px] mt-[10px]">{position}</div>
          </div>
        </IntersectionObserver>
      {/each}
    </div>
  </Container>
</section>