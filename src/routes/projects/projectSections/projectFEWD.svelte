<script>
	import GithubSlider from '@comps/githubSlider/githubSlider.svelte';
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
</script>

<div class={`${$$restProps.class || ''} project-fewd`}>
	<h2>Cancode Communities: FEWD Final project</h2>
	<p class="project-fewd__p1">
		This was my first collab on a course for HTML and CSS by Cancode Communities. With the insight
		and shared skills of the group, We made an art colaborative community site to help local
		creators connect.
	</p>
	<div class="project-fewd__slideshow">
		<div class="project-fewd__slideshow--inner">
			<div class="project-fewd__slideshow--slide">
				<img src={Image1} alt="FEWD Showcase" class="project-fewd__slideshow--img" />
				<a
					href={link1}
					class="project-fewd__slideshow--link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span class="project-fewd__slideshow--overlay">
						<h3 class="project-fewd__slideshow--title">See on Github Pages</h3>
					</span>
				</a>
			</div>
			<div class="project-fewd__slideshow--slide">
				<img src={Image2} alt="FEWD Showcase" class="project-fewd__slideshow--img" />
				<a
					href={link2}
					class="project-fewd__slideshow--link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span class="project-fewd__slideshow--overlay">
						<h3 class="project-fewd__slideshow--title">See on Github Pages</h3>
					</span>
				</a>
			</div>
			<div class="project-fewd__slideshow--slide">
				<img src={Image3} alt="FEWD Showcase" class="project-fewd__slideshow--img" />
				<a
					href={link3}
					class="project-fewd__slideshow--link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span class="project-fewd__slideshow--overlay">
						<h3 class="project-fewd__slideshow--title">See on Github Pages</h3>
					</span>
				</a>
			</div>
			<div class="project-fewd__slideshow--slide">
				<img src={Image4} alt="FEWD Showcase" class="project-fewd__slideshow--img" />
				<a
					href={link4}
					class="project-fewd__slideshow--link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span class="project-fewd__slideshow--overlay">
						<h3 class="project-fewd__slideshow--title">See on Github Pages</h3>
					</span>
				</a>
			</div>
			<div class="project-fewd__slideshow--slide">
				<img src={Image5} alt="FEWD Showcase" class="project-fewd__slideshow--img" />
				<a
					href={link5}
					class="project-fewd__slideshow--link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span class="project-fewd__slideshow--overlay">
						<h3 class="project-fewd__slideshow--title">See on Github Pages</h3>
					</span>
				</a>
			</div>
			<div class="project-fewd__slideshow--slide">
				<img src={Image1} alt="FEWD Showcase" class="project-fewd__slideshow--img" />
				<a
					href={link1}
					class="project-fewd__slideshow--link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span class="project-fewd__slideshow--overlay">
						<h3 class="project-fewd__slideshow--title">See on Github Pages</h3>
					</span>
				</a>
			</div>
			<div class="project-fewd__slideshow--slide">
				<img src={Image2} alt="FEWD Showcase" class="project-fewd__slideshow--img" />
				<a
					href={link2}
					class="project-fewd__slideshow--link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span class="project-fewd__slideshow--overlay">
						<h3 class="project-fewd__slideshow--title">See on Github Pages</h3>
					</span>
				</a>
			</div>
			<div class="project-fewd__slideshow--slide">
				<img src={Image3} alt="FEWD Showcase" class="project-fewd__slideshow--img" />
				<a
					href={link3}
					class="project-fewd__slideshow--link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span class="project-fewd__slideshow--overlay">
						<h3 class="project-fewd__slideshow--title">See on Github Pages</h3>
					</span>
				</a>
			</div>
			<div class="project-fewd__slideshow--slide">
				<img src={Image4} alt="FEWD Showcase" class="project-fewd__slideshow--img" />
				<a
					href={link4}
					class="project-fewd__slideshow--link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span class="project-fewd__slideshow--overlay">
						<h3 class="project-fewd__slideshow--title">See on Github Pages</h3>
					</span>
				</a>
			</div>
			<div class="project-fewd__slideshow--slide">
				<img src={Image5} alt="FEWD Showcase" class="project-fewd__slideshow--img" />
				<a
					href={link5}
					class="project-fewd__slideshow--link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span class="project-fewd__slideshow--overlay">
						<h3 class="project-fewd__slideshow--title">See on Github Pages</h3>
					</span>
				</a>
			</div>
		</div>
	</div>

	<div class="project-fewd__points">
		<div class="project-fewd__point">
			<h6 class="project-fewd__point--title">SASS Styling</h6>
			<p class="project-fewd__point--text">
				Using SASS syntax and groupings helped simplify our code and agree on common style options
			</p>
		</div>
		<div class="project-fewd__point">
			<h6 class="project-fewd__point--title">Handlebars Partials</h6>
			<p class="project-fewd__point--text">
				The Header and footer and written once in the project, and then loaded on each contributor's
				page. This saved a lot of boilerplate woes and helped each member focus on content and not
				structure.
			</p>
		</div>
		<div class="project-fewd__point">
			<h6 class="project-fewd__point--title">Creative energy</h6>
			<p class="project-fewd__point--text">
				Several group members specialized in graphic arts and novel writing, adding a unique touch
				to the project
			</p>
		</div>
		<div class="project-fewd__point">
			<h6 class="project-fewd__point--title">Vanilla JS powered</h6>
			<p class="project-fewd__point--text">
				No frameworks, packages, or dependencies needed. All the ineteractivity was build on
				standard JS for high compatibility
			</p>
		</div>

		<GithubSlider
			class={`link-github`}
			href={`https://github.com/NMacOmega/FEWDFinalGroup2/tree/personal`}
		/>
	</div>
</div>

<style lang="scss">
	@import '$functions';
	@import '$mixins';

	$slide-width: 40rem;
	$slide-height: 100%;
	$slide-timing: 180s;
	$number-of-slides: 5;
	$spacing: 2rem;
	$offset: calc(($slide-width * $number-of-slides) + ($spacing * ($number-of-slides) * 2));

	@keyframes slideLeft {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(-$offset);
		}
	}

	//Grid Assignments
	//row start / row end / col start / col end
	$title-grid: grid(1, span 1, 1, -1);
	$p1-grid: grid(2, span 1, 1, -1);
	$slideshow-grid: grid(4, span 3, 1, -1);
	$points-grid: grid(1, -1, 1, -1);

	.project-fewd {
		height: 70vw;
		background-color: cadetblue;
		display: grid;
		position: relative;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: repeat(9, 1fr);

		h2 {
			font-size: 2.8rem;
			grid-area: $title-grid;
			text-align: center;
			padding: 3rem;
		}

		&__p1 {
			grid-row: 2 / span 1;
			grid-area: $p1-grid;
			font-size: 1.6rem;
		}

		&__slideshow {
			grid-area: $slideshow-grid;
			overflow: hidden;

			&--inner {
				display: flex;
				transform: translateX(0);
				height: 100%;
				animation: slideLeft $slide-timing linear infinite;
			}

			&--slide {
				position: relative;
			}

			&--img {
				max-width: $slide-width;
				max-height: $slide-height;
				margin: 0 $spacing;
			}

			&--link {
				text-decoration: none;
				position: absolute;
				display: flex;
				align-items: center;
				justify-content: center;
				top: 0;
				z-index: 3;
				width: $slide-width;
				height: $slide-height;
				margin: 0 $spacing;
				opacity: 0;
				transition: all 0.4s;

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
			grid-area: $points-grid;
			display: grid;
			grid-template-columns: 1fr 1fr min-content 1fr 1fr;
			grid-template-rows: repeat(8, 1fr);

			& :nth-child(1) {
				grid-row: 2 / span 1;
				grid-column: 2 / span 1;
			}
			& :nth-child(2) {
				grid-row: 2 / span 1;
				grid-column: 4 / span 1;
			}
			& :nth-child(3) {
				grid-row: 7 / span 1;
				grid-column: 1 / span 1;
			}
			& :nth-child(4) {
				grid-row: 7 / span 1;
				grid-column: -2 / span 1;
			}
		}

		&__point {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			&--title {
				font-size: 2rem;
			}

			&--text {
				font-size: 1.2rem;
				padding: 1rem;
			}
		}

		& :global(.link-github) {
			grid-row: 7 / span 1;
			grid-column: 3 / span 1;
			margin: 0 auto;
		}
	}
</style>
