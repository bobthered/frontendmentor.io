<script>
  // components
  import Container from '../components/Container.svelte';

  // css
  import '../css/style.css';

  // handlers
  const nextHandler = () => {
    index++;
    if ( index >= slides.length ) index = 0;
  }

  const prevHandler = () => {
    index--;
    if ( index < 0 ) index = slides.length - 1;
  }

  // props
  const slides = [
    {quote:'I\'ve been interested in coding for a while but never taken the jump, until now. I couldn\'t recommend this course enough. I\'m now in the job of my dreams and so excited about the future.', name:'Tanya Sinclair', title:'UX Engineer'},
    {quote:'If you want to lay the best foundation possible I\'d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.', name:'John Tarkpour', title:'Junior Front-end Developer'},
  ]
  let index = 0;
</script>

<svelte:head>
  <title>Coding Bootcamp Testimonials Slider - Frontendmentor.io</title>
</svelte:head>


<main class="relative flex flex-col justify-center items-center min-h-screen">
  <img src="./pattern-curve.svg" class="absolute bottom-[-2rem] left-0 w-full lg:bottom-[-15rem]" />
  <Container>
    <div class="relative w-full flex justify-center lg:justify-end lg:min-h-screen lg:items-center">
      <img src="./pattern-bg.svg" class="absolute left-1/2 transform -translate-x-1/2 top-[1.625rem] w-[325px] lg:left-auto lg:right-0 lg:w-[500px] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:scale-[1.5]" />
      <div class="rounded-md w-[250px] h-[250px] overflow-hidden relative mt-[3.5rem] lg:w-[500px] lg:h-[500px] lg:mt-0">
        <div class="flex h-full transform transition duration-200" style="transform:translateX(-{index*50}%); width:{slides.length*100}%;">
          {#each slides as {name}}
            <img src="./image-{name.toLowerCase().split(' ')[0]}.jpg" class="w-[250px] h-[250px] object-cover block lg:w-[500px] lg:h-[500px]" />
          {/each}
        </div>
      </div>
      <div class="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 shadow-xl rounded-full overflow-hidden flex lg:translate-x-[5rem] lg:bottom-auto lg:top-1/2 lg:mt-[250px] lg:-translate-y-1/2">
        <a href="#prev" on:click|preventDefault={prevHandler} class="bg-white flex p-[.75rem] w-[50px] flex justify-center lg:w-[58px] lg:p-[1.25rem]"><img src="./icon-prev.svg" /></a>
        <a href="#next" on:click|preventDefault={nextHandler} class="bg-white flex p-[.75rem] w-[50px] flex justify-center lg:w-[58px] lg:p-[1.25rem]"><img src="./icon-next.svg" /></a>
      </div>
    </div>
    <div class="relative mt-[5.25rem] lg:absolute lg:top-1/2 lg:transform lg:mt-0 lg:-translate-y-1/2">
      <img src="./pattern-quotes.svg" class="absolute left-1/2 transform -translate-x-1/2 w-[60px] top-[-1.5rem] lg:w-[115px] lg:left-[9.5rem] lg:top-[-4rem]" />
      <div class="w-[319px] transform overflow-hidden lg:w-[640px]">
        <div class="flex transform transition duration-200" style="transform:translateX(-{index*50}%); width:{slides.length*100}%;">
          {#each slides as { quote, name, title}}
            <div class="w-[319px] flex justify-center text-blue lg:w-[640px]">
                <div class="flex flex-col items-center lg:items-start">
                  <div class="font-light text-[1.12rem] leading-[1.5rem] text-center lg:text-left lg:text-[2rem] lg:leading-[2.75rem]">" {quote} "</div>
                  <div class="flex flex-col lg:flex-row mt-[1rem] lg:items-center lg:space-x-[.5rem] lg:mt-[3rem]">
                    <div class="font-bold text-[.975rem] lg:text-left lg:text-[1.3rem]">{name}</div>
                    <div class="text-blue-light text-[.9rem] leading-[1.125rem] font-medium lg:text-left lg:text-[1.25rem]">{title}</div>
                  </div>
                </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </Container>
</main>