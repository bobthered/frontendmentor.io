<script>
  // imports
  import { base } from '$app/paths';
  import Button from '@components/Button.svelte';
  import cartStore from '@stores/cart';

  // handlers
  const clickHandler = () => {
    $cartStore.contents = [...$cartStore.contents, quantity];
    $cartStore.show = true;
  };

  // helpers
  const updateQuantity = (delta) => {
    quantity += delta;
    if (quantity < 1) quantity = 1;
  };

  // props (internal)
  let quantity = 1;
</script>

<div class="p-[24px] py-[22px] flex flex-col lg:p-0">
  <h2 class="uppercase font-bold text-[13px] tracking-[.05rem] text-orange lg:tracking-[.11rem]">
    Sneaker Company
  </h2>
  <h1
    class="mt-[10px] font-bold text-[28px] leading-[32px] lg:text-[44px] lg:leading-[48px] lg:mt-[16px]"
  >
    Fall Limited Edition Sneakers
  </h1>
  <p class="mt-[16px] text-gray-500 text-[15.1px] leading-[25px] lg:text-[16px] lg:mt-[40px]">
    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber
    outer sole, they'll withstand everything the weather can offer.
  </p>
  <div class="flex justify-between items-center mt-[28px] lg:flex-col lg:items-start">
    <div class="flex items-center">
      <div class="font-bold text-[30px] leading-[32px]">$125.00</div>
      <div
        class="ml-[16px] rounded-[.25rem] px-[10px] py-[.125rem] bg-orange-100 text-orange font-bold"
      >
        50%
      </div>
    </div>
    <div class="font-bold text-gray-500 line-through lg:mt-[10px]">$250.00</div>
  </div>
  <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-[1rem] lg:mt-[16px] pb-[20px]">
    <div
      class="flex justify-between items-center rounded-[.5rem] bg-gray-100 mt-[24px] px-[10px] py-[8px]"
    >
      <button
        class="hover:opacity-[.7] w-[40px] h-[40px] flex items-center justify-center rounded-[.25rem] transition duration-200 ring ring-transparent focus:ring-orange/[.3] {quantity ===
        1
          ? 'opacity-0 pointer-events-none'
          : 'opacity-100 pointer-events-auto'}"
        on:click={() => updateQuantity(-1)}
      >
        <img alt="Minus" class="select-none" src="{base}/icon-minus.svg" />
      </button>
      <div class="font-bold text-center lg:w-[56px]">{quantity}</div>
      <button
        class="hover:opacity-[.7] w-[40px] h-[40px] flex items-center justify-center rounded-[.25rem] transition duration-200 ring ring-transparent focus:ring-orange/[.3]"
        on:click={() => updateQuantity(1)}
      >
        <img alt="Plus" class="select-none" src="{base}/icon-plus.svg" />
      </button>
    </div>
    <Button on:click={clickHandler}>
      <img alt="Cart" class="select-none" src="{base}/icon-cart-white.svg" />
      <div>Add to cart</div>
    </Button>
  </div>
</div>
