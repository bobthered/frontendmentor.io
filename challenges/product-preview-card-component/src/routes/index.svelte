<script>
  // imports
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Product Preview Card Component - Frontendmentor.io</title>
</svelte:head>

<div class="w-full h-full flex items-center justify-center py-[28px] px-[16px] min-h-[667px]">
  <div
    class="rounded-[.5rem] flex flex-col overflow-hidden lg:flex-row lg:max-h-[450px] lg:max-w-[600px]"
  >
    <img class="lg:hidden" src="{base}/image-product-mobile.jpg" alt="Chanel" />
    <img class="hidden lg:block w-1/2" src="{base}/image-product-desktop.jpg" alt="Chanel" />
    <div class="flex p-[22px] bg-white flex-col lg:p-[29px]">
      <h2 class="uppercase tracking-[.25em] mb-[9px] text-blue-500 lg:mb-[18px]">Perfume</h2>
      <h1 class="font-serif font-bold text-[30px] leading-[32px] mb-[16px] lg:mb-[22px]">
        Gabrielle Essence Eau De Parfum
      </h1>
      <p
        class="text-[13px] leading-[22px] mb-[50px] text-blue-500 lg:text-[14px] lg:leading-[23px] lg:mb-[32px]"
      >
        A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator
        for the House of CHANEL.
      </p>
      <div class="flex items-center mb-[20px] lg:mb-[28px]">
        <div class="font-bold font-serif text-[31px] leading-[31px] text-cyan mr-[26px]">
          $149.99
        </div>
        <div class="line-through text-blue-500">$169.99</div>
      </div>
      <button
        class="rounded-[.5rem] outline-none bg-cyan text-white flex justify-center p-[14px] items-center space-x-[.5rem] transition duration-200 hover:bg-cyan-700 focus:bg-cyan-700 ring ring-transparent focus:ring-cyan/[.3]"
      >
        <img src="{base}/icon-cart.svg" alt="Cart" />
        <div>Add to Cart</div>
      </button>
    </div>
  </div>
</div>
