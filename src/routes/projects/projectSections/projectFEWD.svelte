<script>
	import Slider from '@comps/slideBadge/slideBadge.svelte';
	import Image1 from '@img/fewd-showcase-1.png';
	import Image2 from '@img/fewd-showcase-2.png';
	import Image3 from '@img/fewd-showcase-3.png';
	import Image4 from '@img/fewd-showcase-4.png';
	import Image5 from '@img/fewd-showcase-5.png';

	let link1 = `https://nmacomega.github.io/FEWDFinalGroup2/index.html`,
		link2 = `https://nmacomega.github.io/FEWDFinalGroup2/index.html#featured-section`,
		link3 = `https://nmacomega.github.io/FEWDFinalGroup2/aboutus.html#header`,
		link4 = `https://nmacomega.github.io/FEWDFinalGroup2/featured.html#artist-highlight`,
		link5 = `https://nmacomega.github.io/FEWDFinalGroup2/prompt.html#form`;

	let images = [
		{ img: Image1, href: link1 },
		{ img: Image2, href: link2 },
		{ img: Image3, href: link3 },
		{ img: Image4, href: link4 },
		{ img: Image5, href: link5 }
	];
	const numberSlides = images.length;

	let slideWidth = '40rem',
		slideHeight = '100%',
		slideTiming = '180s',
		slideSpacing = '2rem';
</script>

<div class={`${$$restProps.class || ''} project-fewd`}>
	<h2 class="project-description-heading">Cancode Communities: FEWD Final project</h2>
	<p class="project-fewd__p1 project-description-p">
		This was my first collab on a course for HTML and CSS by Cancode Communities. With the insight
		and shared skills of the group, We made an art colaborative community site to help local
		creators connect.
	</p>

	<Slider
		class={`link-github`}
		href={`https://github.com/NMacOmega/FEWDFinalGroup2/tree/personal`}
		svg={'github'}
		alwaysOpen
	>
		See on Github</Slider
	>
	<Slider
		class={`link-netlify`}
		href={`https://github.com/NMacOmega/FEWDFinalGroup2/tree/personal`}
		svg={'netlify'}
		alwaysOpen
	>
		Run on Netlify</Slider
	>
	<div
		class="project-fewd__slideshow"
		style:--slide-width={slideWidth}
		style:--slide-height={slideHeight}
		style:--number-slides={numberSlides}
		style:--slide-timing={slideTiming}
		style:--slide-spacing={slideSpacing}
	>
		<div class="project-fewd__slideshow--inner">
			{#each images as { img, href }}
				<div class="project-fewd__slideshow--slide">
					<img src={img} alt="FEWD Showcase" class="project-fewd__slideshow--img" />
					<a {href} class="project-fewd__slideshow--link" target="_blank" rel="noopener noreferrer">
						<span class="project-fewd__slideshow--overlay">
							<h3 class="project-fewd__slideshow--title">See on Github Pages</h3>
						</span>
					</a>
				</div>
			{/each}
			<!-- Done twice to create a looping effect -->
			{#each images as { img, href }}
				<div class="project-fewd__slideshow--slide">
					<img src={img} alt="FEWD Showcase" class="project-fewd__slideshow--img" />
					<a {href} class="project-fewd__slideshow--link" target="_blank" rel="noopener noreferrer">
						<span class="project-fewd__slideshow--overlay">
							<h3 class="project-fewd__slideshow--title">See on Github Pages</h3>
						</span>
					</a>
				</div>
			{/each}
		</div>
	</div>

	<div class="project-fewd__points--top">
		<div class="project-fewd__point">
			<h6 class="project-fewd__point--title project-point__heading">SASS Styling</h6>
			<p class="project-fewd__point--text project-point__text">
				Using SASS syntax and groupings helped simplify our code and agree on common style options
			</p>
		</div>
		<div class="project-fewd__point">
			<h6 class="project-fewd__point--title project-point__heading">Handlebars Partials</h6>
			<p class="project-fewd__point--text project-point__text">
				The Header and footer and written once in the project, and then loaded on each contributor's
				page. This saved a lot of boilerplate woes and helped each member focus on content and not
				structure.
			</p>
		</div>
	</div>
	<div class="project-fewd__points--bottom">
		<div class="project-fewd__point">
			<h6 class="project-fewd__point--title project-point__heading">Creative energy</h6>
			<p class="project-fewd__point--text project-point__text">
				Several group members specialized in graphic arts and novel writing, adding a unique touch
				to the project
			</p>
		</div>
		<div class="project-fewd__point">
			<h6 class="project-fewd__point--title project-point__heading">Vanilla JS powered</h6>
			<p class="project-fewd__point--text project-point__text">
				No frameworks, packages, or dependencies needed. All the ineteractivity was build on
				standard JS for high compatibility
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	@import '$mixins';

	@keyframes slideLeft {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(var(--slide-offset));
		}
	}

	.project-fewd {
		background-color: cadetblue;
		display: grid;
		position: relative;
		grid-template-columns: 5rem 1fr 5rem;
		grid-template-rows: repeat(4, min-content 5rem) min-content 5rem min-content 5rem;

		grid-template-areas:
			'. header .'
			'. . .'
			'. desc .'
			'. . .'
			'. github .'
			'. . .'
			'. points-top .'
			'. . .'
			'slideshow slideshow slideshow'
			'. . . '
			'. points-bottom .';

		@include respond(tab-land) {
			grid-template-areas:
				'. header .'
				'. . .'
				'. desc .'
				'. . .'
				'. github .'
				'. . .'
				'slideshow slideshow slideshow'
				'. . . '
				'. points-top .'
				'. . .'
				'. points-bottom .'
				'. . .';
		}

		@include respond(phone) {
			grid-template-rows: repeat(4, min-content 5rem) min-content min-content 5rem;
			grid-template-areas:
				'. header .'
				'. . .'
				'. desc .'
				'. . .'
				'. github .'
				'. . .'
				'slideshow slideshow slideshow'
				'. . . '
				'. points-top .'
				'. points-bottom .'
				'. . .';
		}

		h2 {
			text-align: center;
			padding: 3rem;
			padding-bottom: 0;
			grid-area: header;
		}

		&__p1 {
			padding: 0 5%;
			grid-area: desc;
		}

		&__slideshow {
			grid-area: slideshow;
			overflow: hidden;
			--slide-width: 40rem;
			--slide-height: 100%;
			--slide-timing: 180s;
			--number-slides: 5;
			--slide-spacing: 2rem;
			--slide-offset: calc(
				(
						(var(--slide-width) * var(--number-slides)) +
							(var(--slide-spacing) * var(--number-slides) * 2)
					) * -1
			);

			&--inner {
				display: flex;
				transform: translateX(0);
				height: 100%;
				animation: slideLeft var(--slide-timing) linear infinite;
			}

			&--slide {
				position: relative;
			}

			&--img {
				max-width: var(--slide-width);
				max-height: var(--slide-height);
				margin: 0 var(--slide-spacing);
			}

			&--link {
				text-decoration: none;
				position: absolute;
				display: flex;
				align-items: center;
				justify-content: center;
				top: 0;
				z-index: 3;
				width: var(--slide-width);
				height: var(--slide-height);
				margin: 0 var(--slide-spacing);
				opacity: 0;
				transition: all 0.4s;
				background-color: hsla(1, 10%, 10%, 20%);

				&:hover {
					opacity: 1;
				}
			}

			&--title {
				color: #fff;
				font-size: 1.6rem;
				padding: 3.2rem;
				border-radius: 10px;
				background-color: hsla(1, 10%, 10%, 90%);
			}
		}

		&__points {
			&--top,
			&--bottom {
				display: grid;
				grid-template-columns: 4fr 1fr 4fr;
				align-items: start;
				& > div:first-child {
					grid-column: 1;
				}

				& > div:last-child {
					grid-column: 3;
				}

				@include respond(phone) {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
			}

			&--top {
				grid-area: points-top;
			}

			&--bottom {
				grid-area: points-bottom;
			}
		}

		&__point {
			display: flex;
			flex-direction: column;
			align-items: start;
			text-align: left;
			justify-content: center;
			padding: 2rem;

			&--text {
				padding-top: 1rem;
			}
		}

		& :global(.link-github) {
			grid-area: github;
			margin: 0 auto;
		}
	}
</style>
