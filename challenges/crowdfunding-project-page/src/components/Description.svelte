<script>
  // components
  import Button from './Button.svelte';
  import Card from './Card.svelte';
  import { Bookmark } from './Icons';

  // handlers
  const backClickHandler = e => {
    e.preventDefault();
    $backShow = !$backShow;
  }
  const bookmarkClickHandler = e => {
    e.preventDefault();
    bookmarked = !bookmarked;
  }

  // props
  export let bookmarked = false;
  $: bookmarkTheme = bookmarked ? 'quaternary' : 'tertiary';
  $: bookmarkText = bookmarked ? 'Bookmarked' : 'Bookmark';
  $: bookmarkIconClasses = bookmarked ? 'bg-cyan text-white' : 'bg-gray-800 text-gray-300'

  // stores
  import backShow from './Modals/BackStore.js';
</script>

<Card class="mt-[-3.5rem] pt-[2.25rem] space-y-[1rem] lg:mt-[-6rem] lg:space-y-[1.75rem]">
  <img src="./logo-mastercraft.svg" class="w-[4rem] absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[-2rem]" />
  <div class="font-bold text-center text-[1.25rem] leading-[1.5rem] lg:text-[1.75rem]">Mastercraft Bamboo Monitor Riser</div>
  <div class="text-gray-500 text-center">A beautifully handcrafted monitor stand to reduce neck and eye strain.</div>
  <div class="flex space-x-[1rem] w-full lg:space-x-0 lg:justify-between">
    <Button on:click={backClickHandler} class="flex-grow lg:flex-grow-0">Back this project</Button>
    <Button on:click={bookmarkClickHandler} theme="{bookmarked ? 'default' : 'secondary'}" padding="px-[1.25rem] py-[1rem]" class="lg:hidden"><Bookmark class="w-[1rem]"/></Button>
    <Button on:click={bookmarkClickHandler} theme={bookmarkTheme} padding="pr-[1.25rem] py-[0rem]" class="space-x-[1rem] hidden lg:flex"><div class="rounded-full {bookmarkIconClasses} px-[1.25rem] py-[1.25rem]"><Bookmark class="w-[1rem]"/></div><div>{bookmarkText}</div></Button>
  </div>
</Card>