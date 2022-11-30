<script>
	import SVGPath from '@svg/logos.svg';
	import NetlifySVG from '@svg/individuals/netlify.svg';
	export let alwaysOpen = false,
		reverse = false,
		width = `16rem`,
		padding = `3.5rem`,
		iconSize = `6rem`,
		iconPadding = `1rem`,
		fontSize = `1.6rem`,
		transitionSpeed = `0.2s`,
		colorText = `#000`,
		colorBackground = `#fff`,
		colorBorder = `#eaeaea`,
		svg = `github`,
		href = `https://github.com/NMacOmega`;

	let direction = reverse ? 'reverse' : 'forward';

	const iconOptions = {
		github: ['svg', `${SVGPath}#github`],
		netlify: ['img', NetlifySVG]
	};

	const [type, svgHref] = iconOptions[svg] || iconOptions['github'];
</script>

<div
	class={`${$$restProps.class || ''} slide-badge slide-badge--${direction}`}
	style:--width={width}
	style:--menu-width-initial={alwaysOpen ? '100%' : '0%'}
	style:--icon-size={iconSize}
	style:--padding={padding}
	style:--initial-padding={alwaysOpen ? padding : 0}
	style:--icon-padding={iconPadding}
	style:--font-size={fontSize}
	style:--speed={transitionSpeed}
	style:--color-text={colorText}
	style:--color-background={colorBackground}
	style:--color-border={colorBorder}
>
	<a
		{href}
		class={`slide-badge__link slide-badge__link--${direction}`}
		target="_blank"
		rel="noopener noreferrer"
	>
		<div class={`slide-badge__icon slide-badge__icon--${direction}`}>
			{#if type === 'img'}
				<img
					src={svgHref}
					alt="Logo SVG"
					class={`slide-badge__svg slide-badge__svg--${direction}`}
				/>
			{:else}
				<svg class={`slide-badge__svg slide-badge__svg--${direction}`}>
					<use xlink:href={svgHref} />
				</svg>
			{/if}
		</div>
		<div class={`slide-badge__text slide-badge__text--${direction}`}>
			<div class={`slide-badge__text-title slide-badge__text-title--${direction}`}>
				<h6>
					<slot />
				</h6>
			</div>
		</div>
	</a>
</div>

<style lang="scss">
	@import '$mixins';
	.slide-badge {
		display: flex;
		align-items: center;
		position: relative;
		width: var(--width);

		&__link {
			width: 100%;
			height: 100%;
			text-decoration: none;
			color: var(--color-text);
		}

		&__icon {
			position: absolute;
			border: 1px solid var(--color-border);
			border-radius: 50%;
			background-color: var(--color-background);
			width: var(--icon-size);
			height: var(--icon-size);
			padding: 1rem;
			z-index: 3;

			&--forward {
				left: 0%;
			}

			&--reverse {
				left: 100%;
				transform: translateX(-100%);
			}
		}

		&__icon:hover + &__text,
		&__text:hover {
			width: 100%;
		}

		&__icon--forward:hover + &__text--forward,
		&__text--forward:hover {
			padding-left: var(--padding);
		}

		&__icon--reverse:hover + &__text--reverse,
		&__text--reverse:hover {
			padding-right: calc(var(--padding) + var(--icon-size));
		}

		&__svg {
			max-height: 100%;
			max-width: 100%;
		}

		&__text {
			background-color: var(--color-background);
			height: var(--icon-size);
			display: flex;
			align-items: center;
			padding: 1.4rem;
			border-radius: 0 50px 50px 0;
			overflow: hidden;
			width: var(--menu-width-initial);
			transition: width var(--speed), padding-left var(--speed), padding-right var(--speed);
			position: relative;
			border: 1px solid var(--color-border);

			&--forward {
				padding-left: var(--initial-padding);
				margin-left: 3rem;
			}

			&--reverse {
				padding-right: var(--initial-padding);
				margin-right: calc(3rem + var(--icon-size));
			}

			@include respond(tab-land) {
				width: 100%;
				&--forward {
					padding-left: var(--padding);
				}
				&--reverse {
					padding-right: var(--padding);
				}
			}

			&-title {
				position: absolute;
				min-width: 20rem;
				height: 100%;
				display: flex;
				align-items: center;
				h6 {
					font-size: var(--font-size);
					display: block;
				}
			}
		}
	}
</style>
