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
	target="_blank"
	rel="noopener noreferrer"
>
	<div class={`slide-badge__icon slide-badge__icon--${direction}`}>
		{#if type === 'img'}
			<img
				src={svgHref}
				alt="Logo SVG"
				style:--image-width={size}
				style:--image-transform={transform}
			/>
		{:else}
			<svg>
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


<style lang="postcss">

	/*Variables*/
	$container: .slide-badge;
	$text-container: $(container)__text;
	$icon: $(container)__icon;
	$title: $(container)__text-title;


	$(container) {
		width: 100%;
		max-width: var(--max-width);
		position: relative;

		--text-width: calc(100% - (var(--icon-size) / 2));
		--text-offset: calc(100% - var(--text-width));

		& > a {
			color: var(--color-text);
			text-decoration: none;
		}
	}
		$(icon) {
			width: var(--icon-size);
			height: var(--icon-size);
			border: 1px solid var(--color-border);
			position: absolute;
			padding: var(--icon-padding);
			background-color: var(--color-background);
			border-radius: 50%;
			overflow: hidden;
			z-index: 100;
		}
		$(icon)--forward {left: 0;}
		$(icon)--reverse {right: 0;}

		$(icon):hover + $(text-container),
		$(text-container):hover {
			width: var(--text-width);
		}
		svg {
			max-height: 100%;
			max-width: 100%;
		}

		img {
			width: var(--image-width);
			transform: var(--image-transform);
		}

		$(text-container) {
			width: var(--menu-width-initial);
			z-index: 99;
			background-color: var(--color-background);
			border: 1px solid var(--color-border);
			height: var(--icon-size);
			overflow: hidden;
			transition: width var(--speed);

			@media(--viewport-tab-land){
				width: var(--text-width);
			}
		}
		$(text-container)--forward {
			margin-left: var(--text-offset);
			margin-right: auto;
			border-radius: 0 50px 50px 0;
		}
		$(text-container)--reverse {
			margin-right: var(--text-offset);
			margin-left: auto;
			border-radius: 50px 0 0 50px;
		}

		 $(title) {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				 & > h6 {
					font-size: var(--font-size);
					min-width: var(--max-width);
				}
			} 
			$(title)--forward {
				justify-content: end;
					text-align: right;
					padding-right: var(--text-offset);
			}

			$(title)--reverse {
				justify-content: start;
					text-align: left;
					padding-left: var(--text-offset);
			}
	
</style>