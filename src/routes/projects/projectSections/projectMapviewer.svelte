<script>
	import GithubSlider from '@comps/githubSlider/githubSlider.svelte';
	import MapboxVideoWEBM from '@vid/mapviewer.webm';
	import MapboxVideoMP4 from '@vid/mapviewer.mp4';
	import MockupAndroidPNG from '@img/android-mockup.png';
</script>

<div class={`${$$restProps.class || ''} project-mapviewer`}>
	<h2>Mapbox Viewer React App</h2>
	<p class="project-mapviewer__p1">
		This was my first passion project to see if building app could be for me. I had a lot of fun
		putting concepts to the screen and exhibiting something personaly important to me. The design
		and content are not my own, but based on a publicly available Bible research tool on WOL.jw.org.
	</p>

	<div class="project-mapviewer__demo">
		<div class="project-mapviewer__demo--inner">
			<video autoplay loop disablepictureinpicture>
				<source src={MapboxVideoWEBM} type="video/webm" />
				<source src={MapboxVideoMP4} type="video/mp4" />
				<p>
					Your browser doesn't support HTML video. Here is a <a href={MapboxVideoMP4}
						>link to the video</a
					> instead.
				</p>
			</video>
			<img src={MockupAndroidPNG} class="project-mapviewer__demo--mockup" alt="phone mockup" />
			<a
				href="https://dainty-licorice-a16566.netlify.app/"
				target="_blank"
				rel="noopener noreferrer"
				class="project-mapviewer__demo--link"
			>
				<div class="project-mapviewer__demo--overlay">
					<h3>Click to view on Netlify</h3>
				</div>
			</a>
		</div>
	</div>

	<div class="project-mapviewer__points">
		<div class="project-mapviewer__point">
			<h6 class="project-mapviewer__point--title">Context API</h6>
			<p class="project-mapviewer__point--text">
				With context API, all components in the app have easy access to Mapbox data objects used to
				represent data.
			</p>
		</div>
		<div class="project-mapviewer__point">
			<h6 class="project-mapviewer__point--title">Mapbox Studio</h6>
			<p class="project-mapviewer__point--text">
				The regions are drawn using Mapbox studio, where they are assigned to dataset layers and
				styled
			</p>
		</div>
		<div class="project-mapviewer__point">
			<h6 class="project-mapviewer__point--title">Real Mapping Data</h6>
			<p class="project-mapviewer__point--text">
				This app includes a dataset of live regional map data to compare between ancient points of
				interest and the modern lay of the land. With a handy toggle button, you can time lapse from
				the ancient past to today!
			</p>
		</div>
		<div class="project-mapviewer__point">
			<h6 class="project-mapviewer__point--title">PWA Compliant</h6>
			<p class="project-mapviewer__point--text">
				Packaged in compliance with Google Lighthouse standards for public webapps, this app can be
				installed on iPhone or Android and run without the need for a browser open
			</p>
		</div>
		<div class="project-mapviewer__point">
			<h6 class="project-mapviewer__point--title">Hosted by Netlify</h6>
			<p class="project-mapviewer__point--text">
				This project is up and running on netlify using environemntal control to hide sensitive data
				such as Mapbox SDK keys.
			</p>
		</div>
	</div>
	<GithubSlider class={`link-github`} href={`https://github.com/NMacOmega/appendixreader`} />
</div>

<style lang="scss">
	@import '$functions';
	@import '$mixins';

	.project-mapviewer {
		background-color: antiquewhite;
		display: grid;
		position: relative;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: repeat(8, 1fr);

		//Grid Assignments
		//row start / row end / col start / col end
		$title-grid: grid(1, span 1, 1, span 4);
		$p1-grid: grid(2, span 3, 1, span 4);
		$demo-grid: grid(1, 5, -5, -1);
		$points-grid: grid(1, -1, 1, -1);
		$links-grid: grid(-2, span 1, 1, -1);

		h2 {
			font-size: 2.8rem;
			grid-area: $title-grid;
			text-align: center;
			padding: 3rem;
		}

		&__p1 {
			grid-area: $p1-grid;
			padding: 3rem;
			font-size: 1.8rem;
		}

		&__demo {
			grid-area: $demo-grid;
			position: relative;
			transform: rotateZ(6deg);

			&--inner {
				position: relative;
				left: 20%;
				top: 5%;
				width: 100%;
				max-width: 25rem;
			}

			&--link {
				position: absolute;
				display: block;
				width: 100%;
				height: 100%;
				top: 0;
				border-radius: 20px;
				overflow: hidden;
				text-decoration: none;
			}

			&--overlay {
				background-color: hsla(10, 1%, 1%, 40%);
				width: inherit;
				height: inherit;
				display: flex;
				align-items: center;
				justify-content: center;
				opacity: 0;
				transition: all 0.6s;

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
				width: 100%;
				max-height: 102%;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				pointer-events: none;
			}

			video {
				width: 95%;
				margin-top: 4%;
			}
		}

		&__points {
			grid-area: $points-grid;

			display: grid;
			grid-template-columns: repeat(8, 1fr);
			grid-template-rows: repeat(8, 1fr);

			& :nth-child(1) {
				grid-row: 3 / span 2;
				grid-column: 1 / span 2;
			}
			& :nth-child(2) {
				grid-row: 3 / span 2;
				grid-column: 3 / span 2;
			}
			& :nth-child(3) {
				grid-row: 5 / span 2;
				grid-column: 2 / span 2;
			}
			& :nth-child(4) {
				grid-row: 5 / span 2;
				grid-column: 4 / span 2;
			}
			& :nth-child(5) {
				grid-row: 5 / span 2;
				grid-column: 6 / span 2;
			}
			& :nth-child(6) {
				grid-row: 5 / span 2;
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
				font-size: 1.7rem;
				padding: 1rem;
			}
		}

		& :global(.link-github) {
			position: absolute;
			right: 0;
			top: 30%;
		}
	}
</style>
