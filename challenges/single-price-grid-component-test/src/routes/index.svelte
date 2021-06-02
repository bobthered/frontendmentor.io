<script>
  // css
  import '../css/style.css';
</script>

<svelte:head>
  <title>Single Price Grid Component - Frontendmentor.io</title>
</svelte:head>

<main class="flex flex-col px-[2rem] py-[4.5rem] bg-gray-light opacity-100 items-center lg:p-0 lg:items-center lg:min-h-screen lg:justify-center">
  <div class="rounded overflow-hidden flex flex-col shadow-xl lg:w-[636px]">
    <div class="bg-white p-[1.5rem] flex-flex-col space-y-[1.25rem] lg:p-[2.5rem] lg:space-y-[1rem]">
      <div class="text-cyan font-bold text-[1.22rem] lg:text-[1.47rem]">Join our community</div>
      <div class="text-yellow font-bold text-[.915rem] lg:text-[1.1rem]">30-day, hassle-free money back guarantee</div>
      <div class="text-gray-blue text-[.85rem] leading-[1.625rem] lg:text-[.98rem]">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills</div>
    </div>
    <div class="flex flex-col lg:flex-row lg:w-full">
      <div class="bg-cyan text-white p-[1.5rem] flex flex-col lg:w-1/2 lg:p-[2.5rem]">
        <div class="font-bold text-[1.1rem]">Monthly Subscription</div>
        <div class="flex items-center space-x-[.75rem] mt-[.5rem]">
          <div class="font-bold text-[2rem]">$29</div>
          <div class="opacity-30">per month</div>
        </div>
        <div class="text-[.97rem]">Full access for less than $1 a day</div>
        <a href="#" class="bg-yellow rounded shadow-xl p-[.75rem] text-center mt-[1.625rem]">Sign Up</a>
      </div>
      <div class="bg-cyan bg-opacity-75 text-white p-[1.5rem] flex flex-col lg:w-1/2 lg:p-[2.5rem]">
        <div class="font-bold text-[1.1rem]">Why Us</div>
        <div class="text-[.86rem] mt-[1rem]">
          Tutorials by industry experts<br>
          Peer & expert code review<br>
          Coding exercises<br>
          Access to our Github reops<br>
          Community forum<br>
          Flashcard decks<br>
          New videos every week
        </div>
      </div>
    </div>
  </div>
</main>