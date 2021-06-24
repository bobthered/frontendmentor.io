<script>
  // components
  import Container from '$components/Container.svelte';

  // stores
  import theme from '$stores/theme';
  import total from '$stores/total';
</script>

<div class="mt-[33px]">
  <Container>
    <div class="bg-skin-screen-bg rounded-lg p-[20px] px-[24px] text-right text-[32px]" style="letter-spacing:-.015em">
      {$total.display}
    </div>
  </Container>
</div>