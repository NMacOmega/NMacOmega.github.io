<script>
	import { tweened } from 'svelte/motion';
	import { quartInOut } from 'svelte/easing';
	import svgPath from '@svg/logos.svg';
	import mssqlSvg from '@svg/individuals/mssql.svg';
	import nodejsSvg from '@svg/individuals/nodejs.svg';

	import TechItem from './techItem.svelte';

	const techs = {
		'bigcommerce': {title: "Big Commerce", svg:`${svgPath}#bigcommerce-notext`},
		'stackoverflow': {title: "Stack Overflow", svg:`${svgPath}#stackoverflow-notext`},
		'mapbox': {title: "Mapbox", svg:`${svgPath}#mapbox-notext`},
		'vscode': {title: "VS Code", svg:`${svgPath}#vscode`},
		'sass': {title: "SASS", svg:`${svgPath}#sass`},
		'svelte': {title: "Svelte", svg:`${svgPath}#svelte`},
		'github': {title: "Github", svg:`${svgPath}#github`},
		'html': {title: "HTML", svg:`${svgPath}#html`},
		'mongodb': {title: "Mongo DB", svg:`${svgPath}#mongodb-notext`},
		'handlebars': {title: "Handlebars", svg:`${svgPath}#handlebars-notext`},
		'mssql': {title: "SQL Server", svg:`${mssqlSvg}`},
		'nodejs': {title: "Node JS", svg:`${nodejsSvg}`},
		'postman': {title: "Postman", svg:`${svgPath}#postman-notext`},
		'react': {title: "React", svg:`${svgPath}#react`},

	};

	const numInnerItems = 5;

	const reNotOnSpriteSheet = /^(mssql|nodejs)$/;

	let highlightedTitle = Object.values(techs)[Math.floor(Math.random() * Object.keys(techs).length)].title;
	let oldTitle = highlightedTitle;

	let disabled = false;
	let isHovering = false;
	let hoverOffset = tweened(0, {
		duration: 600,
		easing: quartInOut
	});

	const onIconHover = (name) => {
		if (name === highlightedTitle || disabled) return;
		// isHovering = true;
		// disabled = true;
		oldTitle = highlightedTitle;
		highlightedTitle = name;
		hoverOffset.set(0, { duration: 0 });
		hoverOffset.set(100);
		// setTimeout(() => (disabled = false), 200);
	};

	const onReleaseHover = () => (disabled = false);
	
	// const onClick = (tech, component) => {
	// 	modalData.update((_) => {
	// 		return { name: 'tech', bodyComponent: component };
	// 	});
	// };

	const props = { onIconHover, onReleaseHover, reNotOnSpriteSheet};
</script>

<section class="techs">

	<div class="techs__text">
		<h1 class="techs__heading heading-1">I Love to learn and grow</h1>
		<h4 class="techs__subheading heading-4">
			I've picked up a lot of great tools along the way, like
		</h4>
		<div class="techs__hover-highlight">
			<div class="techs__hover-highlight--items" style="transform: translate(0, {$hoverOffset}%)">
				<strong class="techs__hover-highlight--main">{highlightedTitle}</strong>
				<strong class="techs__hover-highlight--hidden">{oldTitle}</strong>
			</div>
		</div>
	</div>


	<div class="techs__display">
		<ul
			class="techs__list techs__list--outer"
			style={`animation-play-state: ${isHovering ? 'paused' : 'running'};`}
		>
		{#each Object.entries(techs) as [name, {title, svg, component}], i}
			{#if i >= numInnerItems}
				<TechItem  type ="outer" props = {{...props, name, title, href: svg, component, isHovering}} />
			{/if}	
		{/each}
		</ul>


		<ul
			class="techs__list techs__list--inner"
			style={`animation-play-state: ${isHovering ? 'paused' : 'running'};`}
		>
		{#each Object.entries(techs) as [name, {title, svg, component}], i}
			{#if i < numInnerItems}
				<TechItem  type ="inner"  props = {{...props, name, title, href: svg, component, isHovering}} />
			{/if}	
		{/each}
		</ul>

	</div>
</section>

<style lang="postcss">

	$tag: .techs;

	/*Variables*/
	$rotation-timing: 90s;
	$pulse-timing: 1.3s;
	$pulse-scale: 1.3;

	/*Elements*/
	 $(tag) {
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
		grid-template-columns: 0.25fr 3.3fr 5fr;
		grid-template-rows: 65rem;

		 @media(--viewport-tab-land){
			grid-template-rows: 35rem 30rem;
		}

	} 

	$(tag)__text {
		grid-column: 2 / 3;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: var(--color-white);
		overflow: visible;

		@media(--viewport-tab-land){
			grid-column: 2 / -1;
			text-align: center;
			justify-content: end;
			padding-bottom: 3rem;
		}
	}

	$(tag)__heading {
		margin-bottom: 3rem;
		font-size: clamp(2.6rem, 4vw, 4.2rem);
	}

	$(tag)__subheading {
		font-size: clamp(2rem, 3.6vw, 3rem);
		margin-bottom: 3rem;
	}

	$(tag)__hover-highlight {
		overflow-y: hidden;
	}

	$(tag)__hover-highlight--items {
			position: relative;
			min-height: 5rem;
		}

	$(tag)__hover-highlight--hidden,
	$(tag)__hover-highlight--main {
		width: 100%;
		font-size: clamp(3.7rem, 3.8vw, 5rem);
		position: absolute;
		@media(--viewport-tab-land){
			left: 50%;
			transform: translate(-50%, 0);
		}
	}

	$(tag)__hover-highlight--main {
		top: -100%;
	}

	$(tag)__display {
		grid-column: 3 / 4;
		position: relative;
		overflow: hidden;

		@media(--viewport-tab-land){
			grid-column: 1 / -1;
			width: 100%;
		}
	}

	$(tag)__list {
		list-style: none;
		position: absolute;
		border-radius: 50%;
		transform-origin: center;
		height: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(0);
		@media(--viewport-tab-land){
			margin: 0 auto;
			top: 95%;
		}
	} 

		$(tag)__list--outer {
			$circle-size: 45rem;
			$angle: calc(360 / 9);

			animation: orbit reverse $rotation-timing linear infinite;

			& > :global(li:nth-of-type(1)) {
				transform: rotate(calc($angle * 1 * -1deg)) translate(calc($circle-size / 2)) rotate(calc($angle * 1 * 1deg));	
			}


			@for $i from 2 to 9 {
				& > :global(li:nth-of-type($i)) {
					transform: rotate(calc($angle * $i * -1deg)) translate(calc($circle-size / 2)) rotate(calc($angle * $i * 1deg));
				}
			}
		} 


		$(tag)__list--inner {
			$circle-size: 20rem;
			$angle: calc(360 / 5);

			animation: orbit $rotation-timing linear infinite;
			
			& > :global(li:nth-of-type(1)) {
				transform: rotate(calc($angle * 1 * 1deg)) translate(calc($circle-size / 2)) rotate(calc($angle * 1 * -1deg));	
			}

			@for $i from 2 to 5 {
				& > :global(li:nth-of-type($i)) {
					transform: rotate(calc($angle * $i * 1deg)) translate(calc($circle-size / 2)) rotate(calc($angle * $i * -1deg));
				}
			}
		} 

		:global(.techs__item) {
			$item-size: 8rem;

			position: absolute;
			top: 50%;
			left: 50%;
			margin: calc($item-size / 2 * -1);
			width: $item-size;
			height: $item-size;

			&::before {
				content: '';
				min-width: 100%;
				min-height: 100%;
				border-radius: 50%;
				background-color: hsla(1, 100%, 100%, 1);
				position: absolute;
				transform: scale(1);
			}

			&:hover::before,
			&:hover :global(.techs__svg) {
				animation: pulse $pulse-timing linear infinite;
			}
		}

		:global(.techs__icon){
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			padding: 1rem;
			animation-play-state: running;
		}		

		:global(.techs__icon--inner){
			animation: spin reverse $rotation-timing linear infinite;
			
			
		}
		:global(.techs__icon--outer){
			animation: spin $rotation-timing linear infinite;
		}

		:global(.techs__svg){
			max-width: 100%;
			max-height: 100%;
			transform: scale(1); 
		}
		
		:global(.techs__svg--bigcommerce, 
                .techs__svg--css, 
			    .techs__svg--html){
			padding: 3px;
		}
		
		:global(.techs__svg--mongodb){
			max-height: 130%;
		}


	/* ---------- Animation ---------- */
	@keyframes orbit {
		100% {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}

	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(0.85);
		}
		50% {
			transform: scale($pulse-scale);
		}
	}
</style>