<script>
	import Slider from '@comps/slideBadge/slideBadge.svelte';
	import MapboxVideoWEBM from '@vid/mapviewer.webm';
	import MapboxVideoMP4 from '@vid/mapviewer.mp4';
	import MockupAndroidPNG from '@img/android-mockup.png';

	let gihubLink = `https://github.com/NMacOmega/appendixreader`;
	let netlifyLink = `https://dainty-licorice-a16566.netlify.app/`;
</script>

<div class={`${$$restProps.class || ''} project-mapviewer`}>
	<h2 class="project-description-heading">Mapbox Viewer React App</h2>
	<p class="project-mapviewer__p1 project-description-p">
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
				href={netlifyLink}
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

	<div class="project-mapviewer__points--top">
		<div class="project-mapviewer__point">
			<h6 class="project-mapviewer__point--title project-point__heading">Context API</h6>
			<p class="project-mapviewer__point--text project-point__text">
				With context API, all components in the app have easy access to Mapbox data objects used to
				represent data.
			</p>
		</div>
		<div class="project-mapviewer__point">
			<h6 class="project-mapviewer__point--title project-point__heading">Mapbox Studio</h6>
			<p class="project-mapviewer__point--text project-point__text">
				The regions are drawn using Mapbox studio, where they are assigned to dataset layers and
				styled
			</p>
		</div>
	</div>
	<div class="project-mapviewer__points--bottom">
		<div class="project-mapviewer__point">
			<h6 class="project-mapviewer__point--title project-point__heading">Real Mapping Data</h6>
			<p class="project-mapviewer__point--text project-point__text">
				This app includes a dataset of live regional map data to compare between ancient points of
				interest and the modern lay of the land. With a handy toggle button, you can time lapse from
				the ancient past to today!
			</p>
		</div>
		<div class="project-mapviewer__point">
			<h6 class="project-mapviewer__point--title project-point__heading">PWA Compliant</h6>
			<p class="project-mapviewer__point--text project-point__text">
				Packaged in compliance with Google Lighthouse standards for public webapps, this app can be
				installed on iPhone or Android and run without the need for a browser open
			</p>
		</div>
		<div class="project-mapviewer__point">
			<h6 class="project-mapviewer__point--title project-point__heading">Hosted by Netlify</h6>
			<p class="project-mapviewer__point--text project-point__text">
				This project is up and running on netlify using environemntal control to hide sensitive data
				such as Mapbox SDK keys.
			</p>
		</div>
	</div>
	<Slider reverse class={`link-github`} svg={'github'} href={gihubLink}>See Code on Github</Slider>
	<Slider class={`link-netlify`} svg={'netlify'} href={netlifyLink}>Run on Netlify</Slider>
</div>

<style lang="scss">
	@import '$mixins';

	.project-mapviewer {
		display: grid;
		grid-template-columns: 5rem 1fr 1fr 5rem;
		$gutter: '. . . .';

		grid-template-rows:
			[title] min-content 5rem
			[badges] min-content 5rem
			[demo] min-content 5rem
			[points-top] 1fr 5rem
			[points-bottom] min-content 5rem;

		grid-template-areas:
			'title title title title'
			$gutter
			'. github netlify .'
			$gutter
			'. desc demo .'
			'. . demo .'
			'. points-top demo .'
			$gutter
			'. points-bottom points-bottom .'
			$gutter;

		@include respond(tab-port) {
			grid-template-columns: 5rem 1fr 1fr 5rem;
			$gutter: '. . . .';
			grid-template-rows:
				[title] min-content 5rem
				[badges] min-content 5rem
				[desc] min-content 5rem
				[demo] min-content 5rem
				[points-top] min-content 5rem
				[points-bottom] min-content 5rem;

			grid-template-areas:
				'title title title title'
				$gutter
				'. github netlify .'
				$gutter
				'. desc desc .'
				$gutter
				'. demo demo .'
				$gutter
				'. points-top points-top .'
				$gutter
				'. points-bottom points-bottom .'
				$gutter;
		}

		@include respond(phone) {
			grid-template-columns: 3rem 1fr 1fr 3rem;
			grid-template-rows:
				[title] min-content 5rem
				[badges] min-content min-content 5rem
				[desc] min-content 5rem
				[demo] min-content 5rem
				[points-top] min-content 5rem
				[points-bottom] min-content 5rem;

			grid-template-areas:
				'title title title title'
				'. . . .'
				'. github github .'
				'. netlify netlify .'
				'. . . .'
				'. desc desc .'
				'. . . .'
				'demo demo demo demo'
				'. . . .'
				'. points-top points-top .'
				'. . . .'
				'. points-bottom points-bottom .'
				'. . . .';
		}

		h2 {
			grid-area: title;
			text-align: center;
			padding: 3rem;
		}

		&__p1 {
			padding: 0 3rem;
			grid-area: desc;

			@include respond(tab-port) {
				padding: 2rem 3rem;
			}
		}

		&__demo {
			grid-area: demo;
			position: relative;
			transform: rotateZ(6deg);
			margin: auto;
			@include respond(phone) {
				transform: rotateZ(0);
			}

			&--inner {
				position: relative;
				left: 10%;
				top: 5%;
				width: 100%;
				max-width: 25rem;

				@include respond(phone) {
					left: unset;
					top: unset;
					max-width: 100%;
					max-height: 90vh;
					border-top: 3px solid #000;
				}
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
				@include respond(phone) {
					width: 100%;
					top: 100%;
					transform: translateY(-100%);
					height: auto;
					border-radius: 0;
				}
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

				@include respond(phone) {
					background-color: transparent;
					align-items: end;
					opacity: 1;
				}

				h3 {
					color: #fff;
					font-size: 1.6rem;
					padding: 2rem;
					border-radius: 10px;
					background-color: hsla(10, 1%, 1%, 70%);
					@include respond(phone) {
						width: 100%;
						border-radius: 0;
					}
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

				@include respond(phone) {
					display: none;
				}
			}

			video {
				width: 95%;
				margin-top: 4%;

				@include respond(phone) {
					width: 100%;
					margin-top: 0;
					max-height: 90vh;
				}
			}
		}

		&__points {
			&--top,
			&--bottom {
				display: grid;
				grid-auto-flow: column;
				grid-column-gap: 3vw;
				grid-auto-columns: fit-content(20vw);
				align-items: start;

				@include respond(tab-port) {
					grid-auto-flow: row;
					grid-auto-rows: min-content;
					grid-template-columns: 1fr 1fr;
					grid-row-gap: 5rem;
				}

				@include respond(phone) {
					grid-template-columns: 1fr;
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
			justify-content: center;
			text-align: start;

			&--text {
				padding-right: 4vw;

				@include respond(tab-land) {
					padding-right: unset;
				}
			}
		}

		& :global(.link-github) {
			grid-area: github;
			justify-self: end;
			--max-width: 25rem !important;
			margin-right: 2rem;

			@include respond(phone) {
				margin: 0 auto;
			}
		}

		& :global(.link-netlify) {
			grid-area: netlify;
			justify-self: start;
			margin-left: 2rem;
			--max-width: 21rem !important;
			@include respond(phone) {
				margin: 0 auto;
			}
		}
	}
</style>
