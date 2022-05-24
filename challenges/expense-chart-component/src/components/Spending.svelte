<script>
  // imports
  import Chart from '@components/Chart.svelte';
  import MonthTotal from '@components/MonthTotal.svelte';
</script>

<div class="rounded-[.75rem] p-[18px] bg-orange flex flex-col space-y-[2rem] lg:p-[32px]">
  <h1 class="text-[1.5rem] font-bold lg:text-[2rem]">Spending - Last 7 days</h1>
  <Chart />
  <div class="bg-cream h-[2px]" />
  <MonthTotal />
</div>
