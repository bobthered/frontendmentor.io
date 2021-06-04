<script>
  // components
  import Card from './Card.svelte';

  // props
  const raised = 89914;
  const goal = 100000;
  $: percentage = raised / goal*100;
</script>

<Card>
  <div class="flex flex-col items-center w-full lg:flex-row lg:items-stretch">
    <div class="flex flex-col">
      <div class="font-bold text-center text-[2rem] lg:text-left">$89,914</div>
      <div class="text-center text-gray-500 text-[.875rem] lg:text-left">of $100,000 backed</div>
    </div>
    <div class="w-[6rem] h-px bg-gray-100 my-[1.5rem] lg:w-px lg:my-0 lg:mx-[3.5rem] lg:h-auto"></div>
    <div class="flex flex-col">
      <div class="font-bold text-center text-[2rem] lg:text-left">$5,007</div>
      <div class="text-center text-gray-500 text-[.875rem] lg:text-left">total backers</div>
    </div>
    <div class="w-[6rem] h-px bg-gray-100 my-[1.5rem] lg:w-px lg:my-0 lg:mx-[3.5rem] lg:h-auto"></div>
    <div class="flex flex-col">
      <div class="font-bold text-center text-[2rem] lg:text-left">56</div>
      <div class="text-center text-gray-500 text-[.875rem] lg:text-left">days left</div>
    </div>
  </div>
  <div class="rounded-full h-[.75rem] mt-[1.5rem] w-full bg-gray-100 overflow-hidden lg:mt-[3.5rem]">
    <div class="h-full rounded-full bg-cyan" style="width:{percentage}%"></div>
  </div>
</Card>
