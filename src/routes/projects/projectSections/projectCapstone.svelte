<script>
	import Slider from '@comps/slideBadge/slideBadge.svelte';
	import CapstoneVideoWEBM from '@vid/Crown-capstone.webm';
	import CapstoneVideoMP4 from '@vid/Crown-capstone.mp4';
	import MockupImacPNG from '@img/imac-mockup.png';

	const capstoneGithubLink = `https://github.com/NMacOmega/crown`;
	const capstoneNetlifyLink = `https://glittering-caramel-ecb91e.netlify.app/`;
</script>

<div id='capstone' class={`${$$restProps.class || ''} project-capstone`}>
	<h2 class="project-description-heading">Capstone Crown Clothing App</h2>
	<p class="project-capstone__p1 project-description-p">
		In this learning project, I built an ecommerce solution with persistent data powered by Google
		Firebase, React Context, and Redux. I also converted the app into a PWA to work offline on
		mobile.
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

	<div class="project-capstone__points--top">
		<div class="project-capstone__point">
			<h6 class="project-capstone__point--title project-point__heading">Context API</h6>
			<p class="project-capstone__point--text project-point__text">
				React Context simplify access to the cart, items catalogue, and user access token
			</p>
		</div>
		<div class="project-capstone__point">
			<h6 class="project-capstone__point--title project-point__heading">Redux and Thunk</h6>
			<p class="project-capstone__point--text project-point__text">
				With Redux reducers handling the application data, unecessary redraws are kept to a minimum
				and data is kept to React immutable standards.
			</p>
		</div>
		<div class="project-capstone__point">
			<h6 class="project-capstone__point--title project-point__heading">Typescript</h6>
			<p class="project-capstone__point--text project-point__text">
				All parts of the app are typescript safe for intellisense and safe expandability
			</p>
		</div>
	</div>

	<div class="project-capstone__points--bottom">
		<div class="project-capstone__point">
			<h6 class="project-capstone__point--title project-point__heading">Google Firebase</h6>
			<p class="project-capstone__point--text project-point__text">
				Async helper functions enable users to authenticate as a store account or via Gmail and
				access the store catalogue
			</p>
		</div>
		<div class="project-capstone__point">
			<h6 class="project-capstone__point--title project-point__heading">Stripe Integration</h6>
			<p class="project-capstone__point--text project-point__text">
				Easy and quick integration to accept card payments in real time.
			</p>
		</div>
		<div class="project-capstone__point">
			<h6 class="project-capstone__point--title project-point__heading">Packaged for PWA</h6>
			<p class="project-capstone__point--text project-point__text">
				This app works on mobile without the need for a browser and can cache content for viewing
				when offline.
			</p>
		</div>
	</div>
	<Slider class={`link-github--capstone`} svg={'github'} href={capstoneGithubLink}>See Code on Github</Slider>

	<Slider class={`link-netlify--capstone`} svg={'netlify'} href={capstoneNetlifyLink}>Live on Netlify</Slider>
</div>

<style lang="postcss">

	$tag: .project-capstone;

	 $(tag) {
		background-color: lightgreen;
		display: grid;
		position: relative;
		grid-template-columns: 2rem min(50vw, 80rem) 1fr 1fr 1fr 1fr 2rem;
		$gutter: '. . . . . . .';
		grid-template-rows:
			[title] min-content 5rem
			[desc] min-content 5rem
			[demo] min-content clamp(2rem, 10vw, 20rem) min-content 5rem
			[points] min-content 5rem;

		grid-template-areas:
			'title title title title title title title'
			$gutter
			'. desc desc desc desc desc .'
			$gutter
			'. demo ptop ptop ptop ptop .'
			'. . . . github . .'
			'. . . . netlify . .'
			$gutter
			'pbot pbot pbot pbot pbot pbot pbot'
			$gutter;


		@media(--viewport-tab-land){
			grid-template-columns: 5rem 1fr 1fr 5rem;

			grid-template-rows:
				[title] min-content 5rem
				[desc] min-content 5rem
				[demo] min-content min(18rem, 20vw)
				[badges] min-content 5rem
				[points] min-content 5rem min-content 5rem;

			grid-template-areas:
				'title title title title'
				'. . . .'
				'. desc desc .'
				'. . . .'
				'. demo demo .'
				'. . . .'
				'. github netlify .'
				'. . . .'
				'. ptop ptop .'
				'. . . .'
				'. pbot pbot .'
				'. . . .';
		}

		@media(--viewport-tab-port){
			grid-template-columns: 5rem 1fr 5rem;
			grid-template-rows:
				[title] min-content 5rem
				[description] min-content 5rem
				[demo] min-content min(18rem, 20vw)
				[badges] min-content 2rem min-content 5rem
				[points] min-content 5rem;

			grid-template-areas:
				'title title title'
				'. . .'
				'. desc .'
				'. . . '
				'. demo .'
				'. . .'
				'. github .'
				'. . .'
				'. netlify .'
				'. . .'
				'. points .'
				'. . . ';
		} 

		@media(--viewport-phone){
			grid-template-columns: 1rem 1fr 1rem;

			grid-template-rows:
				[title] min-content 5rem
				[description] min-content 5rem
				[demo] min-content min(20rem, 25vw)
				[badges] min-content 2rem min-content 5rem
				[points] min-content 5rem min-content 5rem;

			grid-template-areas:
				'title title title'
				'. . .'
				'. desc .'
				'. . .'
				'demo demo demo'
				'. . .'
				'. github .'
				'. . .'
				'. netlify .'
				'. . .'
				'. ptop .'
				'. . .'
				'. pbot .'
				'. . .';
		}
		
		& > h2 {
			grid-area: title;
			text-align: left;
			padding: 3rem;
		}

	}

	$(tag)__p1{
		grid-area: desc;
	}
	
	$(tag)__demo {
			grid-area: demo;
	}

	$(tag)__demo--inner {
		position: relative;

		& > video {
			width: 95%;
			margin-top: 3%;
		}
		
	}

	$(tag)__demo--mockup {
		max-width: 96%;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		pointer-events: none;
	}

	$(tag)__demo--link {
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

		@media(--viewport-tab-port){
			display: none;
		}
	}

	$(tag)__demo--overlay {
		background-color: hsla(10, 1%, 1%, 40%);
		width: 100%;
		height: inherit;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: all 0.4s;

		& > h3 {
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


	$top: $(tag)__points--top;
	$bottom: $(tag)__points--bottom;

	$(top) {
			grid-area: ptop;
			display: grid;
			grid-template-rows: repeat(3, min-content);
			grid-row-gap: 8rem;
			padding: 0 4rem;
		}

	$(bottom) {
			grid-area: pbot;
			display: grid;
			grid-template-columns: repeat(3, 5rem auto) 5rem;
			grid-template-areas: '. col1 . col2 . col3 .';
			align-items: start;

			& > div:nth-child(1) {
				grid-area: col1;
			}

			& > div:nth-child(2) {
				grid-area: col2;
			}

			& > div:nth-child(3) {
				grid-area: col3;
			}
		}


@media(--viewport-tab-land){
		$(top),
		$(bottom) {
			display: flex;
			flex-direction: row;
			padding: 0;
			align-items: space-between;
			grid-column-gap: 6vw;
		}
	}

@media(--viewport-tab-port){
		$(top),
		$(bottom) {
			grid-area: points;
			display: grid;
			grid-template-columns: repeat(2, auto);
			grid-template-rows: repeat(3, 1fr);
			align-items: start;
			padding: 0;

			& > div:nth-child(1) {
				grid-area: one;
			}
			& > div:nth-child(2) {
				grid-area: two;
			}
			& > div:nth-child(3) {
				grid-area: three;
			}
		}

		$(top) {
			grid-template-areas:
				'one two'
				'three .'
				'. .';
		}

		$(bottom) {
			grid-template-areas:
				'. .'
				'. one'
				'two three';
		}
	}

	@media(--viewport-phone){
		$(top),
		$(bottom) {
			display: flex;
			flex-direction: column;
			padding: 0 5rem;
			grid-row-gap: 3rem;
		}
		$(top) {
			grid-area: ptop;
		}
		$(bottom){
			grid-area: pbot;
		}
	}
		
		$(tag)__point {
			display: flex;
			text-align: left;
			flex-direction: column;
			align-items: start;
			justify-content: center;

			& > $(tag)__point--text {
				padding-top: 1.4rem;
			}
		}


		:global(.link-github--capstone) {
			grid-area: github;
			justify-self: start;
			align-self: center;
			--max-width: 25rem !important;

			@media(--viewport-tab-land){
				justify-self: center;
			}
		}

		:global(.link-netlify--capstone) {
			grid-area: netlify;
			justify-self: start;
			align-self: center;
			--max-width: 22rem !important;

			@media(--viewport-tab-land){
				justify-self: center;
			}
		}
</style>
