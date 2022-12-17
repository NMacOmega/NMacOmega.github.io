<script>
	import HeroBackgroundJPG from '@img/denys-striyeshyn-wJ7yGwz2-00-unsplash.jpg';
</script>

<div class={`${$$restProps.class || ''} project-hero`} style={`--url: url(${HeroBackgroundJPG})`}>
	<div class="project-hero__inner">
		<h1>Project showcase</h1>
		<h6>Here's some of my best work</h6>
	</div>
</div>

<style lang="postcss">

	$tag: .project-hero;

	$(tag) {
		height: 40vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		background: none;

		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background: var(--url) 50% 50% no-repeat;
			background-size: 100%;
			z-index: 1;
		}
	}

	$(tag)__inner {
			background-color: hsla(70, 10%, 40%, 0.6);
			padding: 3rem;
			color: #fff;
			z-index: 2;
			border-radius: 4px;

			@media(--viewport-tab-port){
				padding: 3rem 1vw;
			}

			& > h1 {
				font-size: clamp(2rem, 10vw, 4rem);
				padding: 4rem 0;
			}

			& > h6 {
				font-size: clamp(.8rem, 7vw, 2.2rem);
			}
		}
</style>
