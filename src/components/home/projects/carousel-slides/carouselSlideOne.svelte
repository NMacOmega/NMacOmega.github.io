<script>
	import {base} from '$app/paths';
	import slide1Background from '@img/mockup_mapreader.png';
</script>

<a class='link__1' href={`${base}/projects#mapviewer`}>
	<div class="slide slide__1">
		<div class="slide__1-text">
				<h2>Map Appendix Viewer</h2>
				<p>Really good for awesome maps</p>
			</div>
			<img class="slide__1-img" src={slide1Background} alt="Map Reader App Showcase" />
	</div>
</a>


<style lang="postcss">

/* Grabs the container in the parent */
	.link__1 {
		margin: 1rem 6rem 0 6rem;
		display: block;
	}

	/* Grabs the container in the parent */
	:global(.slide__1) {
		/* Makes it a global so the reproduced carousel slide will be styled too */
		justify-content: space-evenly;
		position: relative;

		& .slide__1-text {
			width: 20rem;
			text-align: left;

			@media(--viewport-tab-port){
				position: absolute;
				bottom: 0;
				background-color: hsla(10, 10%, 30%, 0.8);
				border-radius: 5px;
				color: white;
				padding: 1rem;
				width: 80%;
			} 

			& h2 {
				font-size: clamp(3rem, 20%, 2.8rem);
				padding-bottom: 3rem;
				
				@media(--viewport-tab-port){
					padding-bottom: 1rem;
				}
			}
			& p {
				font-size: 2rem;
			}
		}

		& img {
			height: 100%;
		}
	}
</style>
