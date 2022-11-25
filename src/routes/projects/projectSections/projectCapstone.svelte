<script>
	import GithubSlider from '@comps/githubSlider/githubSlider.svelte';
	import CapstoneVideoWEBM from '@vid/Crown-capstone.webm';
	import CapstoneVideoMP4 from '@vid/Crown-capstone.mp4';
	import MockupImacPNG from '@img/imac-mockup.png';
</script>

<div class={`${$$restProps.class || ''} project-capstone`}>
	<h2>Capstone Crown Clothing App</h2>
	<p class="project-capstone__p1">
		Here is another awesome application, made in React with Context to sell clothing
	</p>
	<div class="project-capstone__demo">
		<div class="project-capstone__demo--inner">
			<video autoplay loop disablepictureinpicture>
				<source src={CapstoneVideoWEBM} type="video/webm" />
				<source src={CapstoneVideoMP4} type="video/mp4" />
				<p>
					Your browser doesn't support HTML video. Here is a <a href={CapstoneVideoMP4}
						>link to the video</a
					> instead.
				</p>
			</video>
			<img src={MockupImacPNG} class="project-capstone__demo--mockup" alt="Video mockup" />
			<a
				href="https://glittering-caramel-ecb91e.netlify.app"
				target="_blank"
				rel="noopener noreferrer"
				class="project-capstone__demo--link"
			>
				<div class="project-capstone__demo--overlay">
					<h3>Click to view on Netlify</h3>
				</div>
			</a>
		</div>
	</div>

	<div class="project-capstone__points">
		<div class="project-capstone__point">
			<h6 class="project-capstone__point--title">Context API</h6>
			<p class="project-capstone__point--text">lorem impsum dolor ememet cinadus</p>
		</div>
		<div class="project-capstone__point">
			<h6 class="project-capstone__point--title">Mapbox Studio</h6>
			<p class="project-capstone__point--text">lorem impsum dolor ememet cinadus</p>
		</div>
		<div class="project-capstone__point">
			<h6 class="project-capstone__point--title">title</h6>
			<p class="project-capstone__point--text">lorem impsum dolor ememet cinadus</p>
		</div>
		<div class="project-capstone__point">
			<h6 class="project-capstone__point--title">title</h6>
			<p class="project-capstone__point--text">lorem impsum dolor ememet cinadus</p>
		</div>
		<div class="project-capstone__point">
			<h6 class="project-capstone__point--title">title</h6>
			<p class="project-capstone__point--text">lorem impsum dolor ememet cinadus</p>
		</div>
		<div class="project-capstone__point">
			<h6 class="project-capstone__point--title">title</h6>
			<p class="project-capstone__point--text">lorem impsum dolor ememet cinadus</p>
		</div>
	</div>
	<GithubSlider class={`link-github`} href={`https://github.com/NMacOmega/crown`} />
</div>

<style lang="scss">
	@import '$functions';
	@import '$mixins';

	.project-capstone {
		background-color: lightgreen;
		display: grid;
		position: relative;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: repeat(9, 1fr);

		//Grid Assignments
		//row start / row end / col start / col end
		$title-grid: grid(1, span 1, 1, -1);
		$p1-grid: grid(2, span 3, 1, -1);
		$demo-grid: grid(3, 8, 1, span 6);
		$points-grid: grid(1, -2, 1, -1);

		h2 {
			font-size: 2.8rem;
			grid-area: $title-grid;
			text-align: left;
			padding: 3rem;
		}

		&__p1 {
			grid-area: $p1-grid;
			font-size: 1.6rem;
		}

		&__demo {
			grid-area: $demo-grid;
			padding: 2vh 5vw;

			&--inner {
				position: relative;
			}

			&--link {
				position: absolute;
				display: block;
				width: 85%;
				height: 100%;
				top: 2%;
				border-radius: 20px;
				overflow: hidden;
				text-decoration: none;

				max-width: 90%;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
			}

			&--overlay {
				background-color: hsla(10, 1%, 1%, 40%);
				width: 100%;
				height: inherit;
				display: flex;
				align-items: center;
				justify-content: center;
				opacity: 0;
				transition: all 0.4s;

				h3 {
					color: #fff;
					font-size: 1.6rem;
					padding: 2rem;
					border-radius: 10px;
					background-color: hsla(10, 1%, 1%, 70%);
				}

				&:hover {
					opacity: 1;
				}
			}

			&--mockup {
				max-width: 90%;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				pointer-events: none;
			}

			video {
				width: 85%;
				margin-top: 3%;
			}
		}

		&__points {
			grid-area: $points-grid;
			display: grid;
			grid-template-rows: repeat(4, 1fr);
			grid-template-columns: repeat(4, 1fr);

			& :nth-child(1) {
				grid-row: 2 / span 1;
				grid-column: -2 / span 1;
			}
			& :nth-child(2) {
				grid-row: 3 / span 1;
				grid-column: -2 / span 1;
			}
			& :nth-child(3) {
				grid-row: 4 / span 1;
				grid-column: -2 / span 1;
			}
			& :nth-child(4) {
				grid-row: -1 / span 1;
				grid-column: -3 / span 1;
			}
			& :nth-child(5) {
				grid-row: -1 / span 1;
				grid-column: -4 / span 1;
			}
			& :nth-child(6) {
				grid-row: -1 / span 1;
				grid-column: -5 / span 1;
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
			position: absolute;
			left: 62%;
			bottom: 28%;
		}
	}
</style>
