<script>
	import LearningSlideOne from './learning-slides/learningSlideOne.svelte';
	import LearningSlideTwo from './learning-slides/learningSlideTwo.svelte';
	import LearningSlideThree from './learning-slides/learningSlideThree.svelte';
</script>

<section class="learning">
	<div class="learning__text">
		<h1 class="learning__heading heading-1">I love what I can learn from others</h1>
		<p class="learning__paragraph">
			I couldn't get here on my own. Here are some of the projects and their leads that I'm really
			grateful for. I still use their skills today!
		</p>
	</div>
	<div class="learning__display">
		<div class="learning__item learning__item--1">
			<div class="learning__slide learning__slide--1">
				<div class="learning__slide-text learning__slide-text--1">
					<h1 class="learning__slide-title learning__slide-title--1">Angela Yu</h1>
					<p class="learning__slide-p">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non fuga, vero ea enim. Nemo
						voluptas culpa temporibus eius quae sunt.
					</p>
				</div>
			</div>
		</div>
		<div class="learning__item learning__item--2">
			<div class="learning__slide learning__slide--2">
				<div class="learning__slide-text learning__slide-text--2">
					<h1 class="learning__slide-title learning__slide-title--2">ZTM</h1>
					<p class="learning__slide-p">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non fuga, vero ea enim. Nemo
						voluptas culpa temporibus eius quae sunt.
					</p>
				</div>
			</div>
		</div>
		<div class="learning__item learning__item--3">
			<div class="learning__slide learning__slide--3">
				<div class="learning__slide-text learning__slide-text--3">
					<h1 class="learning__slide-title learning__slide-title--3">Jonas Schmedtmann</h1>
					<p class="learning__slide-p">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non fuga, vero ea enim. Nemo
						voluptas culpa temporibus eius quae sunt.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '$sass';
	.learning {
		grid-column: 2 / -1;
		background-image: linear-gradient(
			to bottom right,
			var(--color-primary-light) 0%,
			var(--color-primary) 50%,
			var(--color-primary-dark) 100%
		);
		clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
		-webkit-clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
		display: grid;
		grid-template-columns: 3rem 1fr 2fr 3rem;
		// padding-top: 6rem;
		grid-column-gap: 2rem;

		&__text {
			grid-column: 2 / 3;
			display: grid;
			grid-template-columns: 12rem 1fr;
			grid-column-gap: 3rem;
			align-items: center;
			color: var(--color-white);
		}
		&__paragraph {
			font-size: 1.8rem;
			//   margin-top: -4rem;
		}
		&__display {
			grid-column: 3 / 4;
			position: relative;
			width: 100%;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 6rem 0;
			// overflow: hidden;
		}

		&__display:hover > :not(&__item:hover) {
			background-color: green;
			width: 1%;
		}

		&__item {
			height: 100%;
			width: 100%;
			background-color: #e83f6f;
			cursor: pointer;
			display: inline-block;
			background-size: cover;
			background-repeat: no-repeat;
			-webkit-transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
			-moz-transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
			-ms-transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
			-o-transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
			transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
			overflow: hidden;
			position: relative;
			text-align: center;

			&--1 {
				background-image: url(/img/ayu-course.jpg);
			}

			&--2 {
				background-image: url(/img/ztm-course.jpg);
			}

			&--3 {
				background-image: url(/img/schmedtmann-course.jpg);
			}
		}

		&__item:hover {
			background-color: #2274a5;
			width: 99%;
			-webkit-transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
			-moz-transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
			-ms-transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
			-o-transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
			transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
		}

		&__slide {
			position: absolute;
			// top: 0;
			// left: 0;
			min-width: 57.5rem;
			height: 100%;

			&-text {
				padding: 1rem 3rem;
				background-color: hsla(20, 10%, 10%, 90%);
				position: absolute;
				bottom: 0;
				text-align: left;
			}
			&-title {
				color: white;
				margin-bottom: 1rem;
			}
			&-p {
				color: white;
			}
		}
	}
</style>
