<script>
	import { fade } from "svelte/transition";
	import checkSVG from '@svg/individuals/icons8-checkmark-256.svg';
	import errorSVG from '@svg/individuals/icons8-cancel-240.svg';

	export let onSubmit = ()=>{};
	let response = {};
	$: disabled = response.status;
	const handleForm = async (e)=>{ response = await onSubmit(e);}
	const textarea = {rows: 4, cols: 40}


// At breakpoints make fields take up whole space and expand padding on message boxes

</script>

<section class="contact">
	<h1 class="contact__heading heading-1">How can I help?</h1>

	<div class={`contact__form${response.status ? ' contact__form--completed':''}`}>
		<form class="form" on:submit|preventDefault={(e)=>handleForm(e)}>
			<div class="u-margin-bottom-medium">
				<h2 class="heading-2 contact__form--title">Contact Me</h2>
			</div>

			<div class="form__group">
				<input
					id="name"
					name="name"
					type="text"
					class="form__input contact__input--name"
					placeholder="Full Name"
					required
					{disabled}
					
				/>
				<label for="name" class="form__label">Full Name</label>
			</div>

			<div class="form__group">
				<input
					id="email"
					name="email"
					type="email"
					class="form__input contact__input--email"
					placeholder="Email address"
					required
					{disabled}
				/>
				<label for="email" class="form__label">Email address</label>
			</div>

			<div class="form__group">
				<textarea
					id="message"
					name="message"
					type="textarea"
					class="form__textarea contact__input--message"
					placeholder="Message"
					rows={textarea.rows}
					required
					{disabled}
				/>
				<label for="message" class="form__label--textarea">Message</label>
			</div>

			<div class="form__group form__group--btn" >
				{#if !disabled}
					<button class="btn btn--primary contact__btn" out:fade={{duration: 200 }}>Send Message</button>
				{/if}
			</div>
		</form>

		{#if response.status===200}
		<div class="contact__response" in:fade={{duration: 900 }}>
			<p class="contact__response--text"><span class="thanks">Thanks!</span> I got your message and will reach out to you when I can.</p>
			<img class="contact__response--img" src={checkSVG} alt="Checkmark Icon">
		</div>
		{:else if response.status}
		<div class="contact__response" in:fade={{duration: 900 }}>
			<p class="contact__response--text"><span class="sorry">Sorry,</span> I'm not able to take a message at this time. Please come back later.</p>
			<img class="contact__response--img" src={errorSVG} alt="Error Icon">
		</div>
		{/if}
	</div>
</section>

<style lang="postcss">

	$gradient: rgba(255, 255, 255, 0.75);	
	$bgImageURL: url(@img/bg-landscape.jpg);
	$transitionAppear: .2s; 

	.contact {
		grid-column: 2 / -1;
		display: grid;
		grid-template-columns: 1fr 70% 1fr;
		padding: 3rem 0;

		@media(--viewport-tab-port){
			grid-template-columns: 2vw 1fr 2vw;
		}
	}
	
	.contact__heading {
		grid-column: 1 / -1;
		padding: 0 3rem;
		background-image: linear-gradient(to right, #7ed56f, #28b485);
		display: inline-block;
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		letter-spacing: 2px;
		text-align: center;
	}
	.contact__form {
		position: relative;
		grid-column: 2 / 3;
		margin-top: 4rem;
		box-shadow: 0 1.5rem 4rem rgba(var(--color-black), 0.4);

		& * {
			transition: all $transitionAppear;
		}
	}	
	.contact__form::before{
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-size: cover;
		
		$start: 26deg;
		$end: 90deg; 
		background-image:
			conic-gradient(at 43% 55%, 
				$gradient, 
				$gradient $start, 
				transparent $start, 
				transparent $end, 
				$gradient $end),
				$bgImageURL;	
		@media(--viewport-phone){
			background-image:
				linear-gradient($gradient, $gradient),
					$bgImageURL;	
		}
	}



	.contact__form--completed{
		& label,
		& input,
		& textarea,
		& button,
		& .contact__form--title{
			opacity: 0;
		}
	}


	.contact__form--completed::before{
		background-image: $bgImageURL;	
	}

	.contact__form--title {
		margin: 2rem;
		position: relative;
		z-index: 10;

	}
	.contact__input--name {
		width: 50%;

		@media(--viewport-phone){
			width: 100%;
		}
	}
	.contact__input--email {
		width: 44%;
		@media(--viewport-phone){
			width: 100%;
		}
	}

	.contact__input--message {
		width: 100%;
	} 

	.contact__input--name:focus,
	.contact__input--email:focus,
	 .contact__input--message:focus {
		 background-color: hsla(10, 10%, 0%, .1); 
		 @media(--viewport-phone){
			background-color: transparent;
		 }
	} 

	.form__group:last-child{
		margin: 4rem auto;
		width: 100%;
	}

	@media(--viewport-phone){
		.form__input:not(:focus) .form__input:not(:invalid){
			border-bottom: 3px solid hsla(10, 100%, 1%, .4);
		}
	}

	.form__group--btn{
		/* Added so removed button will not change height of container */
		min-height: calc(var(--size-font-default) + 3rem);
	}
	.contact__btn {
		display: block;
		margin: 0 auto;
	}

	.form:not(:valid) .contact__btn{
		$grey: hsla(10, 1%, 10%, .6);

		background-color: $grey;
		border: $grey;
		color: hsla(10, 1%, 60%, 1);
		pointer-events: none;
		&:hover {
			transform: unset;
			box-shadow: unset;

			&::after {
				transform: unset;
				opacity: unset;
			}
		}
	}



	.contact__response{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		justify-content: center;

		& > p{
			background-color: hsla(10, 10%, 10%, .85);
			padding: 5rem;
			font-size: 2.4rem;
			border-radius: 20px;
			color: white;
			margin: -2.6rem 4rem;
			padding: 3rem;
			max-width: 50%;

			@media(--viewport-phone){
				max-width: 85%;
			}
		}

		& > img{
			max-width: 12rem;
			background-image: radial-gradient(white, white 60%, transparent 50%);
		}
	}


	.thanks, .sorry{
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}
	.thanks{
		background-image: linear-gradient(to right, #7ed56f, #28b485);
	}

	.sorry{
		background-image: linear-gradient(to right, hsla(30, 70%, 60%, .9), hsla(10, 100%, 70%, .9));
	}

	
</style>
