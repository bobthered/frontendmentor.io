<script>
  // components
  import Checkbox from './Checkbox.svelte';

  // props
  export let checked = false;
</script>

<div class="flex space-x-[.5rem] text-blue-light items-center text-[.8rem]">
  <div class="whitespace-nowrap">Monthly Billing</div>
  <Checkbox bind:checked />
  <div class="whitespace-nowrap">Yearly Billing</div>
  <div class="rounded-full bg-red-light text-red text-[.75rem] font-extrabold px-[.5rem] py-[.25rem]">-25%</div>
</div>