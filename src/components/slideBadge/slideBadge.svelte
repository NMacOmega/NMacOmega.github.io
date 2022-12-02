<script>
	import SVGPath from '@svg/logos.svg';
	import NetlifySVG from '@svg/individuals/netlify.svg';
	import GithubPagesImg from '@img/githubpagelogo.jpg';
	export let alwaysOpen = false,
		reverse = false,
		width = `100%`,
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
		github: { type: 'svg', url: `${SVGPath}#github` },
		netlify: { type: 'img', url: NetlifySVG },
		githubPages: {
			type: 'img',
			url: GithubPagesImg,
			size: '165%',
			transform: 'translate(-18%, -20%)'
		}
	};

	const {
		type,
		url: svgHref,
		size = '100%',
		transform = ''
	} = iconOptions[svg] || iconOptions['github'];
</script>

<div
	class={`${$$restProps.class || ''} slide-badge slide-badge--${direction}`}
	style:--max-width={width}
	style:--menu-width-initial={alwaysOpen ? 'var(--text-width)' : '0%'}
	style:--icon-size={iconSize}
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
					class={`slide-badge__img slide-badge__img--${direction}`}
					style:--image-width={size}
					style:--image-transform={transform}
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
		width: 100%;
		max-width: var(--max-width);
		position: relative;

		--text-width: calc(100% - (var(--icon-size) / 2));
		--text-offset: calc(100% - var(--text-width));

		&__link {
			color: var(--color-text);
		}
		&__text {
			width: 0;
			position: relative;
			&--forward {
				float: left;
			}

			&--reverse {
				float: right;
			}
		}

		&__icon {
			width: var(--icon-size);
			height: var(--icon-size);
			border: 1px solid var(--color-border);
			position: absolute;
			padding: var(--icon-padding);
			background-color: var(--color-background);
			border-radius: 50%;
			overflow: hidden;
			z-index: 100;
			&--forward {
				left: 0;
			}

			&--reverse {
				right: 0;
			}
		}

		&__icon:hover + &__text,
		&__text:hover {
			width: var(--text-width);
		}
		&__svg {
			max-height: 100%;
			max-width: 100%;
		}

		&__img {
			width: var(--image-width);
			transform: var(--image-transform);
		}

		&__text {
			width: var(--menu-width-initial);
			z-index: 99;
			background-color: var(--color-background);
			border: 1px solid var(--color-border);
			height: var(--icon-size);
			overflow: hidden;
			transition: width var(--speed);

			&--forward {
				margin-left: var(--text-offset);
				border-radius: 0 50px 50px 0;
			}

			&--reverse {
				margin-right: var(--text-offset);
				border-radius: 50px 0 0 50px;
			}

			@include respond(tab-land) {
				width: var(--text-width);
			}

			&-title {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;

				&--forward {
					justify-content: end;
					text-align: right;
					padding-right: var(--text-offset);
				}

				&--reverse {
					justify-content: start;
					text-align: left;
					padding-left: var(--text-offset);
				}
				h6 {
					font-size: var(--font-size);
					min-width: var(--max-width);
				}
			}
		}
	}
</style>
