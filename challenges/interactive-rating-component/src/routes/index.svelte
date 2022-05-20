<script>
	// handlers
	const submitHandler = () => {
		if (rating !== undefined) submitted = !submitted;
	};

	// props (internal)
	let rating = undefined;
	let submitted = false;
</script>

<svelte:head>
	<title>Interactive Rating Component - Frontendmentor.io</title>
</svelte:head>

<div class="w-screen h-screen flex items-center justify-center p-[1.5rem] opacity-[1]">
	<div class="perspective-[1000px] relative">
		<form
			class="rounded-[2rem] p-[1.5rem] bg-[#212832] transition-all duration-1000 flex flex-col w-full items-start space-y-[1.5rem] max-w-[25.5rem] backface-visibility-[hidden] lg:p-[2rem] {!submitted
				? 'rotate-y-[0deg]'
				: 'rotate-y-[180deg]'}"
			on:submit|preventDefault={submitHandler}
		>
			<div class="rounded-full bg-[#262F38] p-[.75rem] lg:p-[1rem]">
				<img
					class="w-[.875rem] h-[.875rem] select-none lg:w-[1rem] lg:h-[1rem]"
					src="/icon-star.svg"
					alt="Star"
				/>
			</div>
			<h1
				class="text-[1.4375rem] leading-[1.4375rem] font-bold lg:text-[1.75rem] lg:leading-[1.75rem]"
			>
				How did we do?
			</h1>
			<p class="text-[.875rem] text-white/[.5] lg:text-[.9375rem] lg:leading-[1.5rem]">
				Please let us know how we did with your support request. All feedback is appreciated wo help
				us improve our offering!
			</p>
			<div class="flex justify-between w-full">
				{#each Array(5) as _, i}
					<label class="relative cursor-pointer group">
						<input class="absolute opacity-0 peer" type="radio" bind:group={rating} value={i} />
						<div
							class="w-[2.375rem] h-[2.375rem] rounded-full flex items-center justify-center transition duration-200 ring ring-transparent lg:w-[3rem] lg:h-[3rem] {rating !==
							i
								? 'bg-[#262F38] group-hover:bg-[#7E8798] peer-focus:ring-[#7E8798]/[.3]'
								: 'bg-[#FF7611] peer-focus:ring-[#ff7611]/[.3]'}"
						>
							<div
								class="text-[.875rem] leading-[.875rem] transition duration-200 lg:text-[1rem] lg:leading-[1rem] {rating !==
								i
									? 'opacity-[.5] group-hover:opacity-100'
									: ''}"
							>
								{i + 1}
							</div>
						</div>
					</label>
				{/each}
			</div>
			<button
				type="submit"
				class="w-full bg-[#FF7611] rounded-full uppercase p-[.75rem] transition duration-200 hover:bg-[#ffffff] outline-none focus:bg-[#ffffff] hover:text-[#ff7611] focus:text-[#ff7611] ring ring-transparent focus:ring-[#fff]/[.3]"
				>Submit</button
			>
		</form>
		<div
			class="absolute w-full h-full backface-visibility-[hidden] transition-all duration-1000 top-0 left-0 rounded-[2rem] p-[1.5rem] flex flex-col justify-center items-center space-y-[1.5rem] bg-[#212832] lg:p-[2rem] {!submitted
				? 'rotate-y-[180deg]'
				: 'rotate-y-[360deg]'}"
		>
			<img
				src="/illustration-thank-you.svg"
				class="select-none w-[145px] lg:w-[160px]"
				alt="Thank You"
			/>
			<div
				class="rounded-full py-[.5rem] px-[.875rem] text-[#ff7611] bg-[#262F38] text-[.875rem] lg:text-[1rem] lg:px-[1.0rem]"
			>
				You selected {rating + 1} out of 5
			</div>
			<h1 class="text-[1.5rem] leading-[1.5rem] font-bold lg:text-[1.75rem] lg:leading-[1.75rem]">
				Thank you!
			</h1>
			<p class="text-center text-[.875rem] text-white/[.5] lg:text-[.9375rem] lg:leading-[1.5rem]">
				We appreciate you taking the time to give a rating. If you ever need more support, don't
				hesitate to get in touch!
			</p>
		</div>
	</div>
</div>
