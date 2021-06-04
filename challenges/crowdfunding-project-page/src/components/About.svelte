<script>
  // components
  import Card from './Card.svelte';
  import Reward from './Reward.svelte';

  // data
  import tiers from '../data/tiers.js';
</script>

<Card class="space-y-[2rem]">
  <div class="text-[1.15rem] font-semibold w-full">About this project</div>
  <div class="text-gray-500 text-[.875rem]">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</div>
  <div class="text-gray-500 text-[.875rem]">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</div>
  {#each tiers as {title, subtitle, description, left}}
    <Reward {title} {subtitle} {description} {left} />
  {/each}
</Card>
