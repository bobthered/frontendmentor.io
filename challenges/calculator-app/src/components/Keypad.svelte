<script>
  // components
  import Container from '$components/Container.svelte';
  import Key from '$components/Key.svelte';

  // stores
  import total from '$stores/total';
</script>

<div class="flex-grow flex mt-[28px]">
  <Container class="flex">
    <div class="rounded-lg relative overflow-hidden p-[24px] grid grid-cols-4 grid-rows-5 flex-grow gap-x-[12px] gap-y-[8px]">
      <div class="absolute top-0 left-0 w-full h-full bg-skin-toggle-bg"></div>
      <Key on:click={()=>total.inputDigit('7')} text="7" />
      <Key on:click={()=>total.inputDigit('8')} text="8" />
      <Key on:click={()=>total.inputDigit('9')} text="9" />
      <Key on:click={()=>total.del()} text="DEL" bgColor="bg-skin-key-secondary-bg" shadowColor="bg-skin-key-secondary-shadow" textColor="text-skin-text-keys-secondary" textSize="text-[16px]" />
      <Key on:click={()=>total.inputDigit('4')} text="4" />
      <Key on:click={()=>total.inputDigit('5')} text="5" />
      <Key on:click={()=>total.inputDigit('6')} text="6" />
      <Key on:click={()=>total.handleOperator('+')} text="+" />
      <Key on:click={()=>total.inputDigit('1')} text="1" />
      <Key on:click={()=>total.inputDigit('2')} text="2" />
      <Key on:click={()=>total.inputDigit('3')} text="3" />
      <Key on:click={()=>total.handleOperator('-')} text="-" />
      <Key on:click={()=>total.inputDecimal('.')} text="." />
      <Key on:click={()=>total.inputDigit('0')} text="0" />
      <Key on:click={()=>total.handleOperator('/')} text="/" />
      <Key on:click={()=>total.handleOperator('X')} text="X" />
      <Key on:click={()=>total.reset()} text="RESET" bgColor="bg-skin-key-secondary-bg" shadowColor="bg-skin-key-secondary-shadow" textColor="text-skin-text-keys-secondary" textSize="text-[16px]" class="col-span-2" />
      <Key on:click={()=>total.equals('=')} text="=" bgColor="bg-skin-equal-bg" shadowColor="bg-skin-equal-shadow" textColor="text-skin-text-keys-tertiary" textSize="text-[16px]" class="col-span-2" />
    </div>
  </Container>
</div>