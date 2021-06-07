<script>
  // components
  import { Check } from './Icons';

  // props
  const features = [
    'Unlimited websites',
    '100% data ownership',
    'Email reports'
  ]
</script>

<div class="flex flex-col space-y-[.5rem] items-center lg:items-start">
  {#each features as feature }
    <div class="flex space-x-[.5rem] items-center">
      <Check class="w-[.5rem] h-[.5rem] text-green" />
      <div class="text-[.8rem] text-blue-light">{feature}</div>
    </div>
  {/each}
</div>