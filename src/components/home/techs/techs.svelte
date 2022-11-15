<script>
	import { tweened } from 'svelte/motion';
	import { quartInOut } from 'svelte/easing';
	import modalData from '../../../stores';
	import svgPath from '@svg/logos.svg';
	import mssqlSvg from '@svg/individuals/mssql.svg';
	import nodejsSvg from '@svg/individuals/nodejs.svg';

	let svgIcons = [
		/*classname, svg href, hover title*/
		['stackoverflow', `${svgPath}#stackoverflow-notext`, 'Stack Overflow'],
		['mapbox', `${svgPath}#mapbox-notext`, 'Mapbox'],
		['vscode', `${svgPath}#vscode`, 'VS Code'],
		['sass', `${svgPath}#sass`, 'SASS'],
		['svelte', `${svgPath}#svelte`, 'Svelte'],
		['css', `${svgPath}#css`, 'CSS'],
		['github', `${svgPath}#github`, 'Github'],
		['html', `${svgPath}#html`, 'HTML5'],
		['mongodb', `${svgPath}#mongodb-notext`, 'Mongo DB'],
		['handlebars', `${svgPath}#handlebars-notext`, 'Handlebars'],
		['mssql', `${mssqlSvg}`, 'SQL Server'],
		['nodejs', `${nodejsSvg}`, 'Node JS'],
		['bigcommerce', `${svgPath}#bigcommerce-notext`, 'Bigcommerce'],
		['postman', `${svgPath}#postman-notext`, 'Postman'],
		['react', `${svgPath}#react`, 'React']
	];

	const reNotOnSpriteSheet = /^(mssql|nodejs)$/;

	let svgIconsInner = svgIcons.slice(0, 5);
	let svgIconsOuter = svgIcons.slice(6, 15);

	let highlightedTitle = svgIcons[Math.floor(Math.random() * svgIcons.length)][2] || 'CSS';
	let oldTitle = highlightedTitle;

	let disabled = false;
	let isHovering = false;
	let hoverOffset = tweened(0, {
		duration: 600,
		easing: quartInOut
	});

	const handleIconHover = (name) => {
		if (name === highlightedTitle || disabled) return;
		// isHovering = true;
		disabled = true;
		oldTitle = highlightedTitle;
		highlightedTitle = name;
		hoverOffset.set(0, { duration: 0 });
		hoverOffset.set(100);
		// setTimeout(() => (disabled = false), 200);
	};

	const releaseHover = () => (disabled = false);
	const handleTechClick = (tech) => {
		console.log(tech);
		modalData.update((_) => {
			return { type: 'tech', name: tech };
		});
	};
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
			{#each svgIconsOuter as [title, href, name]}
				<li
					class="techs__item techs__item--outer"
					on:mouseover={() => handleIconHover(name)}
					on:mouseleave={releaseHover}
					on:focus
					on:click={() => handleTechClick(title)}
					on:keydown
				>
					<div
						class="techs__icon techs__icon--outer"
						style={`animation-play-state: ${isHovering ? 'paused' : 'running'};`}
					>
						{#if title.match(reNotOnSpriteSheet)}
							<img
								src={href}
								alt="Logo SVG"
								class="techs__svg techs__svg--outer techs__svg-{title}"
							/>
						{:else}
							<svg class="techs__svg techs__svg--outer techs__svg-{title}">
								<use xlink:href={href} />
							</svg>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
		<ul
			class="techs__list techs__list--inner"
			style={`animation-play-state: ${isHovering ? 'paused' : 'running'};`}
		>
			{#each svgIconsInner as [title, href, name]}
				<li
					class="techs__item  techs__item--inner"
					on:mouseover={() => handleIconHover(name)}
					on:mouseleave={releaseHover}
					on:focus
					on:click={() => handleTechClick(title)}
					on:keydown
				>
					<div
						class="techs__icon techs__icon--inner"
						style={`animation-play-state: ${isHovering ? 'paused' : 'running'};`}
					>
						{#if title.match(reNotOnSpriteSheet)}
							<img
								src={href}
								alt="Logo SVG"
								class="techs__svg techs__svg--inner techs__svg-{title}"
							/>
						{:else}
							<svg class="techs__svg techs__svg--inner techs__svg-{title}">
								<use xlink:href={href} />
							</svg>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style lang="scss">
	@import '$sass';

	/*SCSS Variables*/
	$rotation-timing: 90s;
	$pulse-timing: 1.3s;
	$pulse-scale: 1.3;

	/*Mixins*/
	/// @param {Length} $circle-size - Large circle size
	/// @param {Length} $item-size - Single item size
	@mixin on-circle($item-count, $circle-size, $item-size) {
		width: $circle-size;
		height: $circle-size;
		> * {
			position: absolute;
			top: 50%;
			left: 50%;
			margin: -(calc($item-size / 2));
			width: $item-size;
			height: $item-size;

			$angle: calc(360 / $item-count);
			$rot: 0;

			@for $i from 1 through $item-count {
				&:nth-of-type(#{$i}) {
					transform: rotate($rot * 1deg) translate(calc($circle-size / 2)) rotate($rot * -1deg);
				}

				$rot: $rot + $angle;
			}
		}
	}

	/*Elements*/

	.techs {
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

		@include respond(tab-land) {
			grid-template-rows: 35rem 30rem;
		}

		&__text {
			grid-column: 2 / 3;
			display: flex;
			flex-direction: column;
			justify-content: center;
			color: var(--color-white);
			overflow: visible;

			@include respond(tab-land) {
				grid-column: 2 / -1;
				text-align: center;
				justify-content: end;
				padding-bottom: 3rem;
			}
		}

		&__heading {
			margin-bottom: 3rem;
			font-size: clamp(2.6rem, 4vw, 4.2rem);
		}

		&__subheading {
			font-size: clamp(2rem, 3.6vw, 3rem);
			margin-bottom: 3rem;
		}

		&__hover-highlight {
			overflow-y: hidden;
			&--items {
				position: relative;
				min-height: 5rem;
			}

			&--hidden,
			&--main {
				width: 100%;
				font-size: clamp(3.7rem, 3.8vw, 5rem);
				position: absolute;
				@include respond(tab-land) {
					left: 50%;
					transform: translate(-50%, 0);
				}
			}

			&--main {
				top: -100%;
			}
		}

		&__display {
			grid-column: 3 / 4;
			position: relative;
			overflow: hidden;

			@include respond(tab-land) {
				grid-column: 1 / -1;
				width: 100%;
			}
		}

		&__list {
			list-style: none;
			position: absolute;
			border-radius: 50%;
			transform-origin: center;
			// margin-left: 200px;
			height: 100%;

			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%) rotate(0);

			@include respond(tab-land) {
				margin: 0 auto;
				top: 95%;
			}

			@include respond(phone) {
				// display: none;
			}
			&--outer {
				@include on-circle($item-count: 9, $circle-size: 45rem, $item-size: 8rem);
				animation: orbit-right $rotation-timing linear infinite;
			}

			&--inner {
				transform-origin: center;
				@include on-circle($item-count: 5, $circle-size: 20rem, $item-size: 8rem);
				animation: orbit-left $rotation-timing linear infinite;
			}
		}

		&__item {
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
			&:hover .techs__svg {
				animation: pulse $pulse-timing linear infinite;
			}
		}

		&__icon {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			padding: 1rem;

			&--inner {
				animation: orbit-counter-spin-left $rotation-timing linear infinite;
			}

			&--outer {
				animation: orbit-counter-spin-right $rotation-timing linear infinite;
			}
		}

		&__svg {
			max-width: 100%;
			max-height: 100%;
			// padding: 1px;
			transform: scale(1);

			/*Custom sizing rules for specific items*/

			&-bigcommerce,
			&-css,
			&-html {
				padding: 3px;
			}

			&-mongodb {
				max-height: 130%;
			}
		}
	}

	/* ---------- Animation ---------- */
	@keyframes orbit-right {
		100% {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}

	@keyframes orbit-left {
		100% {
			transform: translate(-50%, -50%) rotate(-360deg);
		}
	}

	@keyframes orbit-counter-spin-right {
		100% {
			transform: rotate(-360deg);
		}
	}

	@keyframes orbit-counter-spin-left {
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
