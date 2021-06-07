<script>
  // components
  import Card from '../components/Card.svelte';
  import Container from '../components/Container.svelte';

  // css
  import '../css/style.css';

  // props
  const cards = [
    {cardStyle: 'background-image:url(./bg-pattern-quotation.svg); background-position:90% 0', cardClasses:'col-span-2 order-1 bg-no-repeat', imageClasses:'ring ring-white ring-opacity-50', theme:'violet', name:'Daniel Clifford', heading:'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined.  I honestly feel I got every penny\'s worth.', description:'I was an EMT for many years before I joined the bootcamp. I\'ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I\'ve successfuly switched careers, working as a Software Engineer at a VR startup.'},
    {cardStyle: '', cardClasses:'order-2', imageClasses:'ring ring-white ring-opacity-50', theme:'gray-700', name:'Jonathan Walters', heading:'The team was very supportive and kept me motivated', description:'I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I\'ve made in myself.'},
    {cardStyle: '', cardClasses:'order-4', imageClasses:'', theme:'white', name:'Jeanette Harmon', heading:'An overall wonderful and rewarding experience', description:'Thank you for the wonderful experience! I new have a job I really enjoy, and make a good living while doing something I love.'},
    {cardStyle: '', cardClasses:'col-span-2 order-5', imageClasses:'ring ring-violet ring-opacity-100', theme:'gray-900', name:'Patrick Abrams', heading:'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.', description:'The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.'},
    {cardStyle: '', cardClasses:'order-3 row-span-2', imageClasses:'', theme:'white', name:'Kira Whittle', heading:'Such a life-changing experience. Highly recommended!', description:'Before joining the bootcamp, I\'ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I\'ve often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!'},
  ]
</script>

<svelte:head>
  <title>Testimonials Grid Section - Frontendmentor.io</title>
</svelte:head>

<main class="flex flex-col items-center justify-center py-[4.5rem] min-h-screen bg-gray-200">
  <Container>
    <div class="flex flex-col space-y-[1.5rem] lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:space-y-0 lg:gap-[2rem]">
      {#each cards as {cardStyle, cardClasses, imageClasses, theme, name, heading, description}}
        <Card {theme} class={cardClasses} style={cardStyle}>
          <div class="flex space-x-[.85rem]">
            <img src="./image-{name.toLowerCase().split(' ')[0]}.jpg" class="w-[2rem] h-[2rem] rounded-full object-cover {imageClasses}" />
            <div class="flex flex-col leading-[1rem]">
              <div class="text-[.8rem] font-bold">{name}</div>
              <div class="text-[.7rem] opacity-50">Verified Graduate</div>
            </div>
          </div>
          <div class="text-[1.272rem] leading-[1.5rem]">{@html heading}</div>
          <div class="text-[.8125rem] leading-[1.15rem] opacity-70 pr-[1rem] lg:pr-0">" {description} "</div>
        </Card>
      {/each}
    </div>
  </Container>
</main>