<script>
  // imports
  import Balance from '@components/Balance.svelte';
  import Spending from '@components/Spending.svelte';
</script>

<svelte:head>
  <title>Expense Chart Component - Frontendmentor.io</title>
</svelte:head>

<main class="min-h-screen min-w-screen p-[18px] flex items-center justify-center">
  <div class="flex flex-col w-full space-y-[1rem] opacity-[1] max-w-[540px]">
    <Balance />
    <Spending />
  </div>
</main>
