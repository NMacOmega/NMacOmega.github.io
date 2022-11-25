<script>
	// import HeroBackgroundJPG from '@img/projects-hero-background-unsplash.jpg';
	import HeroBackgroundJPG from '@img/denys-striyeshyn-wJ7yGwz2-00-unsplash.jpg';
</script>

<div class={`${$$restProps.class || ''} project-hero`} style={`--url: url(${HeroBackgroundJPG})`}>
	<div class="project-hero__inner">
		<h1>Here are my projects</h1>
		<h6>They are awesome</h6>
	</div>
</div>

<style lang="scss">
	.project-hero {
		height: 40vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		background: none;

		&__inner {
			background-color: hsla(70, 10%, 40%, 0.6);
			padding: 3rem;
			color: #fff;
			z-index: 2;
			border-radius: 4px;

			h1 {
				font-size: 4rem;
				padding: 4rem 0;
			}

			h6 {
				font-size: 2.2rem;
			}
		}

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
</style>
