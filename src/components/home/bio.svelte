<section class="bio">
	<h1 class="bio__heading heading-1">About Me</h1>
	<p class="bio__text">
		Hi, I'm Nathaniel. I'm an aspiring web developer in Upstate NY. I'm really enjoying the learning
		journey to make great things with the tools we have today!
	</p>
</section>

<style lang="scss">
	@import '$sass';

	.bio {
		grid-column: 2 / -1;
		min-height: 30rem;
		// display: grid;
		// grid-template-columns: 0.5fr 1fr 2fr 0.5fr;
		// align-content: center;
		// grid-column-gap: 2rem;
		display: flex;
		align-items: center;
		padding: 0 10vw;

		@include respond(tab-port) {
			flex-direction: column;
			justify-content: center;
		}
	}
	.bio__heading {
		// grid-column: 2 / 3;
		margin-right: 4vw;
		margin-bottom: 5rem;
		background-image: linear-gradient(to right, #7ed56f, #28b485);
		display: inline-block;
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		letter-spacing: 2px;
	}
	.bio__text {
		// grid-column: 3 / 4;
		font-size: 2rem;
		align-items: space-around;
	}
</style>
