<script>
  // css
  import "../css/style.css";

  // props
  const vehicleTypes = [
    {
      color: "bg-orange",
      buttonTextClass: "text-orange",
      title: "Sedans",
      description:
        "Choose a sedan for its affordability and excellent fuel economy.  Ideal for cruising in the city or on your next road trip.",
    },
    {
      color: "bg-blue",
      buttonTextClass: "text-blue",
      title: "SUVs",
      description:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    },
    {
      color: "bg-green",
      buttonTextClass: "text-green",
      title: "Luxury",
      description:
        "Cruise in the best car brands without the bloated prices.  Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    },
  ];
</script>

<main
  class="flex flex-col px-6 py-[5.5rem] font-lexend-deca text-white text-base lg:items-center lg:justify-center lg:py-0 lg:min-h-screen">
  <div
    class="rounded overflow-hidden flex flex-col lg:flex-row lg:h-[31rem] lg:w-[57.5rem]">
    {#each vehicleTypes as { color, buttonTextClass, title, description }}
      <div class="{color} p-12 flex flex-col items-start">
        <img src="./icon-{title.toLowerCase()}.svg" class="w-[64px] h-[40px]" />
        <h1
          class="font-big-shoulders-display font-bold text-[2.5rem] uppercase mt-12">
          {title}
        </h1>
        <div
          class="opacity-75 text-[.9375rem] mt-9 leading-[1.6rem] lg:flex-grow">
          {description}
        </div>
        <a
          href="#"
          class="rounded-full py-3 px-[1.875rem] bg-white mt-[1.55rem] outline-none ring-white ring-opacity-30 focus:ring {buttonTextClass}">Learn
          More</a>
      </div>
    {/each}
  </div>
</main>
