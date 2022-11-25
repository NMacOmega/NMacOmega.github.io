<script>
	import SVGPath from '@svg/logos.svg';
	export let width = `16rem`,
		height = `10rem`,
		padding = `3.5rem`,
		iconSize = `6rem`,
		iconPadding = `1rem`,
		fontSize = `1.6rem`,
		transitionSpeed = `0.2s`,
		colorText = `#000`,
		colorBackground = `#fff`,
		colorBorder = `#eaeaea`,
		href = `https://github.com/NMacOmega`;
</script>

<div
	class={`${$$restProps.class || ''} github-slider`}
	style={`--width:${width};--height:${height};--icon-size:${iconSize};--padding:${padding};--icon-padding:${iconPadding};--font-size:${fontSize};--speed:${transitionSpeed};--color-text:${colorText};--color-background:${colorBackground};--color-border:${colorBorder};`}
>
	<a {href} class="github-slider__link" target="_blank" rel="noopener noreferrer">
		<div class="github-slider__icon">
			<svg class="github-slider__svg">
				<use xlink:href={`${SVGPath}#github`} />
			</svg>
		</div>
		<div class="github-slider__text">
			<div class="github-slider__text-title">
				<h6>See on Github</h6>
			</div>
		</div>
	</a>
</div>

<style lang="scss">
	.github-slider {
		--width-inner: var(--width, 16rem);
		--height-inner: var(--height, 10rem);
		--icon-inner: var(--icon-size, 6rem);
		--padding-inner: var(--padding, 3.5rem);
		--icon-padding-inner: var(--icon-padding, 1rem);
		--font-inner: var(--font-size, 1.6rem);
		--transition-inner: var(--speed, 0.2s);
		--color-text-inner: var(--color-text, #000);
		--color-bg-inner: var(--color-background, #fff);
		--color-border-inner: var(--color-border, #eaeaea);

		display: flex;
		align-items: center;
		position: relative;
		width: var(--width-inner);
		height: var(--height-inner);

		&__link {
			width: 100%;
			height: 100%;
			text-decoration: none;
			color: var(--color-text-inner);
		}

		&__icon {
			position: absolute;
			left: 0;
			border: 1px solid var(--color-border-inner);
			border-radius: 50%;
			background-color: var(--color-bg-inner);
			width: var(--icon-inner);
			height: var(--icon-inner);
			padding: 1rem;
			z-index: 3;
		}

		&__icon:hover + &__text,
		&__text:hover {
			padding-left: var(--padding-inner);
			width: 100%;
		}

		&__svg {
			max-height: 100%;
			max-width: 100%;
		}

		&__text {
			background-color: var(--color-bg-inner);
			height: var(--icon-inner);
			display: flex;
			align-items: center;
			padding: 1.4rem;
			margin-left: 3rem;
			padding-left: 0;
			border-radius: 0 50px 50px 0;
			overflow: hidden;
			width: 0;
			transition: width var(--transition-inner), padding-left var(--transition-inner);
			position: relative;

			&-title {
				position: absolute;
				min-width: 20rem;
				height: 100%;
				display: flex;
				align-items: center;
				h6 {
					font-size: var(--font-inner);
					display: block;
				}
			}
		}
	}
</style>
