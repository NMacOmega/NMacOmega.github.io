<script>
	import {base} from '$app/paths';
	import slide2Background from '@img/mockup_crown_clothing.png';
</script>

<a class='link__2' href={`${base}/projects#capstone`}>
	<div class="slide slide__2">
		<div class="slide__2-text">
			<h2>Crown Clothing Capstone Project</h2>
			<p>Really good for awesome Clothes</p>
		</div>
		<img class="slide__2-img" src={slide2Background} alt="Map Reader App Showcase" />
	</div>
</a>

<style lang="postcss">

.link__2 {
		margin: 1rem 6rem 0 6rem;
		display: block;
	}
	:global(.slide__2) {
		/* Makes it a global so the reproduced carousel slide will be styled too */
		position: relative;

		--text-width: clamp(8rem, 30%, 20rem);

		& > .slide__2-text {
			text-align: left;
			width: var(--text-width);
			position: absolute;
			left: 6rem;
			background-color: hsla(20, 10%, 60%, 0.2);
			padding: 1rem;
			border-radius: 5px;

			@media(--viewport-tab-port){
				left: 0;
			} 

			& h2 {
				font-size: clamp(2rem, 5vw, 2.8rem);

				padding-bottom: 3rem;
			}
			& p {
				font-size: clamp(1.6rem, 4vw, 2rem);
			}
		}

		& img {
			height: 100%;
			width: 100%;
			object-fit: cover;
			@media(--viewport-phone){
				height: unset;
				object-fit: unset;
			} 
		}
	}
</style>
