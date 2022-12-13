<script>
	import selfPortrait from '@img/me.png';
</script>

<header class="hero">
	<img src={selfPortrait} alt="Me" class="hero__img" />
	<div class="hero__text">
		<h1 class="heading-1 hero__title">Hey, I'm Nathaniel</h1>
		<h2 class="heading-2 hero__subtitle">Hei, Jeg Heter Nathaniel</h2>
	</div>
</header>

<style lang="postcss">

	.hero {
		grid-column: 2 / -1;
		min-height: 50vw;

		background-image: linear-gradient(
				to right,
				var(--color-overlay-dark),
				var(--color-overlay-dark)
			),
			url(@img/bg-landscape.jpg);
		background-size: cover;
		display: grid;
		grid-template-columns: min-content max-content;
		grid-column-gap: 3rem;
		align-items: center;
		justify-content: center;
		clip-path: polygon(0 0, 100% 0, 100% 70vh, 0 100%);
		-webkit-clip-path: polygon(0 0, 100% 0, 100% 70vh, 0 100%);

		@media(--viewport-phone){
			grid-template-columns: 1fr;
			justify-items: center;
		}
	}
	.hero__img {
		width: 10rem;
		height: 10rem;
		border-radius: 50%;
		border: 3px solid var(--color-white);
		margin-left: 50px;
	
		@media(--viewport-phone){
			align-self: end;
			margin: 0 auto;
		}
	}
	.hero__text {
		color: var(--color-white);
		border-radius: 14px;
		padding: 1.6rem;
		background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.6), black);

		@media(--viewport-phone){
			align-self: start;
			text-align: center;
			margin: 20px 10px;
		}
	}

	.hero__title {
		font-size: clamp(3rem, 5vw, 4rem);
	}

	.hero__subtitle {
		margin-top: 0.6rem;
		font-size: clamp(1rem, 4vw, 3rem);
	}
</style>
