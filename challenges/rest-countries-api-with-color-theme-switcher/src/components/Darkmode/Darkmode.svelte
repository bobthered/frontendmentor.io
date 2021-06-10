<script>
  // components
  import { Moon } from '../Icons';

  // stores
  import store from './store';
</script>

<div on:click={store.toggle} class="flex cursor-pointer space-x-[8px]">
  <Moon class="w-[16px] lg:w-[20px]" />
  <div class="font-semibold text-[12px] lg:text-[16px]">Dark Mode</div>
</div>