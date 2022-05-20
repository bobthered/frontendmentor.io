<script>
  // imports
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>QR Code Component - Frontendmentor.io</title>
</svelte:head>

<div class="w-screen h-screen flex items-center justify-center p-[2rem] opacity-[1]">
  <div
    class="rounded-[1.5rem] bg-white flex flex-col items-center space-y-[1.5rem] p-[1rem] shadow-lg shadow-gray-dark/[.3] w-full max-w-[320px]"
  >
    <img src="{base}/image-qr-code.png" alt="QR Code" class="w-full rounded-[1rem]" />
    <h1 class="font-bold text-gray-dark text-[1.5rem] leading-[2rem] text-center">
      Improve your front-end skills by building projects
    </h1>
    <p
      class="text-gray text-center text-[1rem] leading-[1.25rem] px-[.75rem] pb-[1.5rem] lg:px-[1rem]"
    >
      Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
    </p>
  </div>
</div>
