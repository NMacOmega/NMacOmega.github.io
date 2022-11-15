<script>
	import CarouselSlideOne from './carousel-slides/carouselSlideOne.svelte';
	import CarouselSlideTwo from './carousel-slides/carouselSlideTwo.svelte';
	import CarouselSlideThree from './carousel-slides/carouselSlideThree.svelte';

	import { browser } from '$app/environment';

	import Carousel from 'svelte-carousel';
	let carousel;

	const goToCarouselPrev = () => carousel.goToPrev({ animated: true });
	const goToCarouselNext = () => carousel.goToNext({ animated: true });
</script>

<!-- <script src="./file.js"></script> -->

<section class="projects">
	<h1 class="projects__heading heading-1">I love to create</h1>
	<p class="projects__text">
		I really enjoy discovering new ways to fill a need and make things pop! Here are some of my
		works:
	</p>
	<div class="projects__display">
		<!-- https://github.com/vadimkorr/svelte-carousel/tree/311f69d2a72906748d89a16cd80adbabcc474a4e -->

		{#if browser}
			<Carousel let:showPrevPage let:showNextPage bind:this={carousel}>
				<div class="projects__display-item">
					<CarouselSlideOne />
				</div>
				<div class="projects__display-item">
					<CarouselSlideTwo />
				</div>
				<div class="projects__display-item">
					<CarouselSlideThree />
				</div>
				<div id="carousel-prev" slot="prev">
					<button
						class="projects__display-btn projects__display-btn--prev"
						on:click={showPrevPage}
					/>
				</div>
				<div id="carousel-next" slot="next">
					<button
						class="projects__display-btn projects__display-btn--next"
						on:click={showNextPage}
					/>
				</div>
				<!-- <div id="carousel-dots" slot="dots">dots</div> -->
			</Carousel>
		{/if}
		<div class="projects__display-btn-container">
			<button
				on:click={goToCarouselPrev}
				class="projects__display-btn--outer projects__display-btn--outer--prev"
			/>
			<button
				on:click={goToCarouselNext}
				class="projects__display-btn--outer projects__display-btn--outer--next"
			/>
		</div>
	</div>
</section>

<style lang="scss">
	@import '$sass';

	.projects {
		grid-column: 2 / -1;
		display: grid;
		grid-template-rows: min-content min-content max-content;
		text-align: center;
		padding-top: 4rem;

		&__text {
			font-size: 2rem;
			padding: 3rem 20%;
		}

		&__display {
			overflow: hidden;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 4rem;
			height: 100%;

			&__item {
				height: inherit;
			}
			&-btn {
				padding: 2rem;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				border-radius: 50%;
				z-index: 2500;

				&::before,
				&::after {
					content: '';
					width: 0.28rem;
					height: 2rem;
					background-color: #000;
					position: absolute;
					left: 50%;
				}

				&::before {
					top: 10%;
				}
				&::after {
					bottom: 10%;
				}

				&--prev {
					left: 0;
					margin-left: 10px;
					&::before {
						transform: rotate(45deg);
					}

					&::after {
						transform: rotate(-45deg);
					}

					@include respond(tab-port) {
						display: none;
					}
				}

				&--next {
					right: 0;
					margin-right: 10px;
					&::before {
						transform: rotate(-45deg);
					}

					&::after {
						transform: rotate(45deg);
					}

					@include respond(tab-port) {
						display: none;
					}
				}
			}

			&-btn-container {
				width: 100%;
				display: none;
				@include respond(tab-port) {
					display: flex;
					justify-content: space-evenly;
				}
			}

			&-btn--outer {
				padding: 2rem 0;
				position: relative;
				width: clamp(20%, 10vw, 30%);

				@include respond(phone) {
					width: clamp(7rem, 40%, 13rem);
				}

				&::before,
				&::after {
					content: '';
					width: 0.28rem;
					height: 2rem;
					background-color: #000;
					position: absolute;
				}

				&::before {
					top: 10%;
				}
				&::after {
					bottom: 10%;
				}

				&--prev {
					&::before {
						transform: rotate(45deg);
					}

					&::after {
						transform: rotate(-45deg);
					}
				}

				&--next {
					&::before {
						transform: rotate(-45deg);
					}

					&::after {
						transform: rotate(45deg);
					}
				}
			}
		}
	}

	.projects__display-item {
		& :global(.slide) {
			height: 30rem;
			display: flex;
			align-items: center;
		}
	}
</style>
