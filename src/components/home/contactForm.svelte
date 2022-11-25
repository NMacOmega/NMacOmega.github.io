<section class="contact">
	<h1 class="contact__heading heading-1">Let me know how I can help</h1>

	<div class="contact__form">
		<form action="#" class="form">
			<div class="u-margin-bottom-medium">
				<h2 class="heading-2 contact__form--title">Contact Me</h2>
			</div>

			<div class="form__group">
				<input
					id="name"
					type="text"
					class="form__input contact__input--name"
					placeholder="Full Name"
					required
				/>
				<label for="name" class="form__label">Full Name</label>
			</div>

			<div class="form__group">
				<input
					id="email"
					type="email"
					class="form__input contact__input--email"
					placeholder="Email address"
					required
				/>
				<label for="email" class="form__label">Email address</label>
			</div>

			<div class="form__group">
				<button class="btn btn--primary contact__btn"> Next step &rarr; </button>
			</div>
		</form>
	</div>
</section>

<style lang="scss">
	@import '$sass';

	.contact {
		grid-column: 2 / -1;
		display: grid;
		grid-template-rows: 1fr 3fr;
		grid-template-columns: 1fr 70% 1fr;
		padding: 3rem 0;
	}
	.contact__heading {
		grid-column: 1 / -1;
		padding: 3rem;
		background-image: linear-gradient(to right, #7ed56f, #28b485);
		display: inline-block;
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		letter-spacing: 2px;
		text-align: center;
	}
	.contact__form {
		grid-column: 2 / 3;
		box-shadow: 0 1.5rem 4rem rgba(var(--color-black), 0.4);
		background-image: linear-gradient(
				115deg,
				rgba(255, 255, 255, 0.75) 0%,
				rgba(255, 255, 255, 0.75) 50%,
				transparent 50%
			),
			url(@img/bg-landscape.jpg);
		background-size: cover;
	}
	.contact__form--title {
		margin-left: 2rem;
		margin-bottom: 2rem;
	}
	.contact__input--name {
		width: 50%;
	}
	.contact__input--email {
		width: 44%;
	}
	.contact__btn {
		margin-left: 6rem;
	}
</style>
