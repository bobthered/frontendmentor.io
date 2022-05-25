<script>
  // imports
  import { base } from '$app/paths';
  import Button from '@components/Button.svelte';
  import cartStore from '@stores/cart';

  // helpers
  const emptyCart = () => {
    $cartStore.contents = [];
    toggleConfirmationModal();
  };
  const toggleCart = () => ($cartStore.show = !$cartStore.show);
  const toggleConfirmationModal = () => (showConfirmationModal = !showConfirmationModal);

  // props (internal)
  let showConfirmationModal = false;
  const currency = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' });

  // props (dynamic)
  $: totalQuantity = $cartStore.contents.reduce((acc, cur) => acc + cur, 0);
  $: totalDollar = currency.format(totalQuantity * 125);
</script>

<div
  class="fixed top-0 left-0 z-[1] w-screen h-screen {!$cartStore.show
    ? 'pointer-events-none'
    : 'pointer-events-auto'}"
  on:click={toggleCart}
/>
<div class="relative">
  <a
    class="w-[40px] h-[40px] relative mr-[6px] flex items-center justify-center outline-none rounded-[.25rem] ring ring-transparent transtion duration-200 focus:ring-orange/[.3]"
    href="{base}/"
    on:click|preventDefault={toggleCart}
  >
    <img alt="Cart" class="" src="{base}/icon-cart.svg" />
    <div
      class="text-[8px] font-bold rounded-full px-[8px] absolute right-[4px] top-[4px] bg-orange transition duration-200 text-white {totalQuantity ===
      0
        ? 'opacity-0'
        : 'opacity-100'}"
    >
      {totalQuantity}
    </div>
  </a>
  <div
    class="flex fixed top-[68px] p-[.5rem] z-[1] w-full left-0 transition duration-200 transform lg:top-[51px] lg:absolute lg:left-auto lg:right-[-66px] lg:w-[400px] {!$cartStore.show
      ? 'opacity-0 pointer-events-none'
      : 'opacity-100 pointer-events-auto'}"
  >
    <div
      class="rounded-[.5rem] relative bg-white w-full flex flex-col shadow-xl shadow-gray-900/[.3]"
    >
      <div class="flex px-[1.5rem] py-[21px] font-bold border-b border-gray-300/[.25]">Cart</div>
      <div
        class="flex flex-col px-[1.5rem] py-[21px] h-[188px] overflow-y-auto items-center justify-center font-bold text-gray-500"
      >
        {#if $cartStore.contents.length === 0}
          Your cart is empty.
        {/if}
        {#if $cartStore.contents.length !== 0}
          <div class="flex items-center w-full">
            <img
              alt="Thumbnail"
              class="rounded-[.25rem] w-[50px] h-[50px] mr-[1rem]"
              src="{base}/image-product-1-thumbnail.jpg"
            />
            <div class="flex flex-col flex-grow text-gray-500 font-medium">
              <div class="">Autumn Limited Edition...</div>
              <div class="">
                $125.00 x {totalQuantity}
                <span class="font-bold text-gray-900">{totalDollar}</span>
              </div>
            </div>
            <button
              class="w-[40px] h-[40px] mr-[-13px] rounded-[.25rem] transition duration-200 ring ring-transparent flex items-center justify-center focus:ring-orange/[.3]"
            >
              <img
                alt="Delete"
                class=""
                on:click={toggleConfirmationModal}
                src="{base}/icon-delete.svg"
              />
            </button>
          </div>
          <Button>Checkout</Button>
        {/if}
      </div>
      <button
        class="absolute top-[8px] right-[8px] w-[40px] h-[40px] rounded-[.25rem] transition duration-200 ring ring-transparent flex items-center justify-center focus:ring-orange/[.3]"
        on:click={toggleCart}
      >
        <img alt="Close" class="pointer-events-none" src="{base}/icon-close.svg" />
      </button>
    </div>
  </div>
</div>
<div
  class="fixed top-0 left-0 z-[1] w-screen h-screen bg-black/[.7] transition duration-200 {!showConfirmationModal
    ? 'opacity-0 pointer-events-none'
    : 'opacity-100 pointer-events-auto'}"
  on:click={toggleConfirmationModal}
/>
<div
  class="fixed top-0 left-0 z-[1] w-screen h-screen p-[24px] pointer-events-none transition duration-200 flex items-center justify-center {!showConfirmationModal
    ? 'opacity-0'
    : 'opacity-100'}"
>
  <div
    class="px-[1.5rem] py-[21px] {!showConfirmationModal
      ? 'pointer-events-none'
      : 'pointer-events-auto'} rounded-[.5rem] bg-white w-full max-w-[320px] flex flex-col shadow-xl shadow-gray-900/[.3]"
  >
    <div class=" flex relative">
      <div class="flex items-center justify-center space-y-[1rem] flex-col">
        <img alt="Delete" class="w-[64px]" src="{base}/icon-delete-modal.svg" />
        <div class="text-[1.5rem] font-bold text-gray-900">Are you sure?</div>
        <div class="text-center">
          Do you really want to delete item "Autumn Limited Edition..."?
        </div>
        <div class="w-full flex space-x-[.5rem]">
          <Button color="gray-300" on:click={toggleConfirmationModal}>Cancel</Button>
          <Button color="red" on:click={emptyCart}>Delete</Button>
        </div>
      </div>
      <button
        class="absolute top-[-13px] right-[-1rem] w-[40px] h-[40px] rounded-[.25rem] transition duration-200 ring ring-transparent flex items-center justify-center focus:ring-orange/[.3]"
        on:click={toggleConfirmationModal}
      >
        <img alt="Close" class="pointer-events-none" src="{base}/icon-close.svg" />
      </button>
    </div>
  </div>
</div>
