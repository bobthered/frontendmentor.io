<script>
	// components

	// css
	import '../css/style.css';

	// props
	let items = [
		{ title: '10k+', subtitle: 'Companies' },
		{ title: '314', subtitle: 'Templates' },
		{ title: '12M+', subtitle: 'Queries' }
	];
</script>

<svelte:head>
<title>Stats preview card component - Frontend Mentor</title>
</svelte:head>

<main
	class="flex bg-primary-900 p-6 py-22 text-white font-inter text-base justify-center items-center min-h-screen"
>
	<div
		class="rounded bg-primary-800 overflow-hidden flex flex-col lg:flex-row-reverse lg:w-277 lg:h-112"
	>
		<div class="bg-primary-500">
			<img
				src="./image-header-mobile.jpg"
				alt="Header Image"
				class="mix-blend-multiply object-cover w-full lg:hidden"
			/>
			<img
				src="./image-header-desktop.jpg"
				alt="Header Image"
				class="hidden mix-blend-multiply object-cover w-full lg:block lg:h-full"
			/>
		</div>
		<div
			class="p-8 py-10 flex flex-col items-center space-y-4 lg:items-start lg:px-14 lg:w-1/2 lg:py-[4.5rem] lg:space-y-6"
		>
			<h1
				class="font-bold text-center leading-8 text-3xl lg:text-left lg:text-4xl lg:leading-[2.75rem]"
			>
				Get <span class="text-primary-500">insights</span> that help your business grow.
			</h1>
			<div class="text-center leading-6 opacity-75 lg:text-left lg:leading-[1.65rem] lg:w-[22rem]">
				Discover the benefits of data analytics and make better decisions regarding revenue,
				customer experience, and overall efficiency.
			</div>
			<div
				class="py-7 flex flex-col items-center space-y-7 lg:flex-row lg:space-y-0 lg:pt-[2.75rem] lg:space-x-[3.875rem]"
			>
				{#each items as { title, subtitle }}
					<div class="flex flex-col items-center lg:items-start lg:space-y-1">
						<div class="font-bold text-2xl">{title}</div>
						<div class="text-sm uppercase opacity-60 font-medium font-lexend-deca text-[.85rem]">
							{subtitle}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</main>
