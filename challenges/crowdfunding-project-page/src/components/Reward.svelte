<script>
  // components
  import Button from './Button.svelte';
  import Card from './Card.svelte';

  // handlers
  const clickHandler = e => {
    e.preventDefault();

    $backer = title;
    $show = !$show;
  }

  // props
  export let title = '';
  export let subtitle = '';
  export let description = '';
  export let left = 0;
  $:cardClasses = left > 0 ? '' : 'opacity-50';
  $:buttonText = left > 0 ? 'Select Reward' : 'Out of Stock';
  $:buttonTheme = left > 0 ? 'default' : 'disabled';

  // stores
  import backer from './Modals/BackBackerStore.js';
  import show from './Modals/BackStore.js';
</script>

<Card padding="p-[1.7rem] lg:p-[2rem]" class="text-[.875rem] space-y-[1.25rem] {cardClasses}">
  <div class="flex flex-col w-full lg:flex-row lg:justify-between">
    <div class="font-bold w-full text-[1rem] lg:w-auto">{title}</div>
    <div class="text-cyan font-semibold w-full lg:w-auto lg:text-right">{subtitle}</div>
  </div>
  <div class="text-gray-500">{description}</div>
  <div class="flex flex-col self-start space-y-[1.25rem] lg:flex-row lg:space-y-0 lg:justify-between lg:w-full">
    <div class="flex space-x-[1rem] items-center w-full lg:w-auto">
      <div class="text-[2rem] font-bold">{left}</div>
      <div class="text-gray-500">left</div>
    </div>
    <Button on:click={clickHandler} theme={buttonTheme} class="self-start">{buttonText}</Button>
  </div>
</Card>