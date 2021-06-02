<script>
  // css
  import "../css/style.css";

  // props
  const cards = [
    {
      title: "Supervisor",
      description: "Monitors activity to identify project roadblocks",
      color: "bg-cyan",
    },
    {
      title: "Team Builder",
      description:
        "Scans our talent network to create the optimal team for your project",
      color: "bg-red",
    },
    {
      title: "Karma",
      description: "Regularly evaluates our talent to ensure quality",
      color: "bg-orange",
    },
    {
      title: "Calculator",
      description:
        "Uses data from past projects to provide better delivery estimates",
      color: "bg-blue",
    },
  ];
</script>

<svelte:head>
  <title>Four Card Feature Section - Frontendmentor.io</title>
</svelte:head>

<main
  class="bg-gray-light flex flex-col px-[2rem] py-[5.25rem] text-blue-dark text-base items-center lg:py-[5rem]">
  <div class="text-center font-light text-[1.5rem] lg:text-[2.28rem]">
    Reliable, efficient delivery
  </div>
  <div
    class="text-center font-bold text-[1.5rem] lg:text-[2.28rem] lg:leading-[2.75rem]">
    Powered by Technology
  </div>
  <div
    class="text-center mt-[1rem] leading-[1.6rem] text-blue-grayish font-light lg:w-[550px] lg:text-[.97rem] lg:mt-[1.25rem]">
    Our Artificial intelligence powered tools use millions of project data
    points to ensure that your project is successful
  </div>
  <div
    class="flex flex-col mt-[4.7rem] space-y-[1.75rem] lg:flex-row lg:space-y-0 lg:mt-[4rem] lg:w-[1110px] lg:items-center lg:space-x-[1.75rem]">
    <div
      class="rounded overflow-hidden bg-white shadow-lg flex flex-col lg:w-1/3">
      <div class="h-[4px] w-full bg-cyan block" />
      <div
        class="px-[1.75rem] py-[1.5rem] flex flex-col lg:py-[1.75rem] lg:px-[2rem]">
        <div class="font-bold text-[1.25rem]">Supervisor</div>
        <div
          class="text-[.83rem] leading-[1.5rem] min-h-[5rem] text-blue-grayish lg:mt-[.5rem] lg:min-h-[5.25rem]">
          Monitors activity to identify project roadblocks
        </div>
        <img
          class="w-[3.5rem] self-end lg:w-[4rem]"
          src="./icon-supervisor.svg" />
      </div>
    </div>
    <div class="flex flex-col space-y-[1.75rem] lg:w-1/3 lg:space-y-[2rem]">
      <div class="rounded overflow-hidden bg-white shadow-lg flex flex-col">
        <div class="h-[4px] w-full bg-red block" />
        <div
          class="px-[1.75rem] py-[1.5rem] flex flex-col lg:py-[1.75rem] lg:px-[2rem]">
          <div class="font-bold text-[1.25rem]">Team Builder</div>
          <div
            class="text-[.83rem] leading-[1.5rem] min-h-[5rem] text-blue-grayish lg:mt-[.5rem] lg:min-h-[5.25rem]">
            Scans our talent network to create the optimal team for your project
          </div>
          <img
            class="w-[3.5rem] self-end lg:w-[4rem]"
            src="./icon-team-builder.svg" />
        </div>
      </div>
      <div class="rounded overflow-hidden bg-white shadow-lg flex flex-col">
        <div class="h-[4px] w-full bg-orange block" />
        <div
          class="px-[1.75rem] py-[1.5rem] flex flex-col lg:py-[1.75rem] lg:px-[2rem]">
          <div class="font-bold text-[1.25rem]">Karma</div>
          <div
            class="text-[.83rem] leading-[1.5rem] min-h-[5rem] text-blue-grayish lg:mt-[.5rem] lg:min-h-[5.25rem]">
            Regularly evaluates our talent to ensure quality
          </div>
          <img class="w-[3.5rem] self-end lg:w-[4rem]" src="./icon-karma.svg" />
        </div>
      </div>
    </div>
    <div
      class="rounded overflow-hidden bg-white shadow-lg flex flex-col lg:w-1/3">
      <div class="h-[4px] w-full bg-blue block" />
      <div
        class="px-[1.75rem] py-[1.5rem] flex flex-col lg:py-[1.75rem] lg:px-[2rem]">
        <div class="font-bold text-[1.25rem]">Calculator</div>
        <div
          class="text-[.83rem] leading-[1.5rem] min-h-[5rem] text-blue-grayish lg:mt-[.5rem] lg:min-h-[5.25rem]">
          Uses data from past projects to provide better delivery estimates
        </div>
        <img
          class="w-[3.5rem] self-end lg:w-[4rem]"
          src="./icon-calculator.svg" />
      </div>
    </div>
  </div>
</main>
