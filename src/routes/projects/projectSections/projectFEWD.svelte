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

<div id='fewd' class={`${$$restProps.class || ''} project-fewd`}>
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
		See Code on Github</Slider
	>
	<Slider
		class={`link-githubPages`}
		href={`https://github.com/NMacOmega/FEWDFinalGroup2/tree/personal`}
		svg={'githubPages'}
		colorText={`#fff`}
		colorBackground={'rgb(56, 123, 176)'}
		alwaysOpen
	>
		Live on Github Pages</Slider
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

<style lang="postcss">

	@keyframes slideLeft {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(var(--slide-offset));
		}
	}

	$tag: .project-fewd;

	$(tag) {
		display: grid;
		position: relative;
		grid-template-columns: 5rem 1fr 1fr 5rem;
		grid-template-rows: repeat(4, min-content 5rem) min-content 5rem min-content 5rem;

		grid-template-areas:
			'. header header .'
			'. . . .'
			'. desc desc .'
			'. . . .'
			'. github githubPages .'
			'. . . .'
			'. points-top points-top .'
			'. . . .'
			'slideshow slideshow slideshow slideshow'
			'. . . .'
			'. points-bottom points-bottom .';

		@media(--viewport-tab-land){
			grid-template-columns: 3rem 1fr 3rem;
			grid-template-areas:
				'. header .'
				'. . .'
				'. desc .'
				'. . .'
				'. github .'
				'. . .'
				'. githubPages .'
				'. . .'
				'slideshow slideshow slideshow'
				'. . .'
				'. points-top .'
				'. . .'
				'. points-bottom .'
				'. . .';
		}

		@media(--viewport-phone){
			grid-template-columns: 3rem 1fr 1fr 3rem;
			grid-template-rows:
				[title] min-content 5rem
				[desc] min-content 5rem
				[badges] min-content 3rem min-content 5rem
				[slideshow] min-content 5rem
				[points] min-content min-content 5rem;

			grid-template-areas:
				'. header header .'
				'. . . .'
				'. desc desc .'
				'. . . .'
				'. github github .'
				'. . . .'
				'. githubPages githubPages .'
				'. . . .'
				'slideshow slideshow slideshow slideshow'
				'. . . .'
				'. points-top points-top .'
				'. points-bottom points-bottom .'
				'. . . .';
		}

		 & > h2 {
			text-align: center;
			padding: 3rem;
			padding-bottom: 0;
			grid-area: header;
		}

		& > $(tag)__p1 {
			padding: 0 5%;
			grid-area: desc;
		}

	}

		$(tag)__slideshow {
			grid-area: slideshow;
			background-color: var(--color-primary);
			overflow: hidden;
			padding: 5rem 0;
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
			
		}

		$(tag)__slideshow--inner{
				display: flex;
				transform: translateX(0);
				height: 100%;
				animation: slideLeft var(--slide-timing) linear infinite;
			}

		$(tag)__slideshow--slide{
				position: relative;
			}

		$(tag)__slideshow--img{
				max-width: var(--slide-width);
				max-height: var(--slide-height);
				margin: 0 var(--slide-spacing);
			}

		$(tag)__slideshow--link{
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

		$(tag)__slideshow--title{
				color: #fff;
				font-size: 1.6rem;
				padding: 3.2rem;
				border-radius: 10px;
				background-color: hsla(1, 10%, 10%, 90%);
			}

		$top: $(tag)__points--top;
		$bottom: $(tag)__points--bottom;

		$(top) {
				grid-area: points-top;
			}

		$(bottom) {
				grid-area: points-bottom;
			}
		$(top), 
		$(bottom) {
				display: grid;
				grid-template-columns: 4fr 1fr 4fr;
				align-items: start;
				& > div:first-child {
					grid-column: 1;
				}

				& > div:last-child {
					grid-column: 3;
				}

				@media(--viewport-phone){
					display: flex;
					flex-direction: column;
					align-items: center;
				}
			}

		$(tag)__point {
			display: flex;
			flex-direction: column;
			align-items: start;
			text-align: left;
			justify-content: center;
			padding: 2rem;

			& > $(tag)__point--text {
				padding-top: 1rem;
			}
		}

	 :global(.link-github) {
			grid-area: github;
			margin: 0 auto;
			--max-width: 25rem !important;
		}

	:global(.link-githubPages) {
			grid-area: githubPages;
			margin: 0 auto;
			--max-width: 27rem !important;
		}
</style>
