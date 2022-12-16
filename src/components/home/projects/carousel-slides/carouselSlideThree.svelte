<script>
	import {base} from '$app/paths';
	import slide3Background from '@img/showcase_fewd_final.png';
</script>

<a class='link__3' href={`${base}/projects#fewd`}>
	<div class="slide slide__3">
		<div class="slide__3-image">
			<img class="slide__3-img" src={slide3Background} alt="Cancode Project Showcase" />
		</div>
		<div class="slide__3-text">
			<div class="slide__3-text--1">
				<h2>CanCode Communities Group Project</h2>
			</div>
			<div class="slide__3-text--2">
				<p>Really good for awesome Teams</p>
			</div>
		</div>
	</div>
</a>

<style lang="postcss">

.link__3 {
		margin: 1rem 6rem 0 6rem;
		display: block;
	}

:global(.slide__3) {
		/* Makes it a global so the reproduced carousel slide will be styled too */
		justify-content: space-evenly;
		position: relative;

		& .slide__3-text {
			position: absolute;
			width: 80%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			@media(--viewport-tab-port){
				width: 100%;
				padding: 2rem;
			} 

			@media(--viewport-phone){
				flex-direction: column;
				justify-content: end;
				padding: 0;
			}

			& .slide__3-text--1,
			& .slide__3-text--2 {
				padding: 1rem;
				width: 20rem;
				text-align: left;
				background-color: hsla(10, 10%, 20%, 0.7);
				color: #fff;
				border-radius: 20px;

				@media(--viewport-phone){
					width: 100%;
				}
			}

			& h2 {
				font-size: 2.8rem;
				padding-bottom: 3rem;
			}
			& p {
				font-size: 2rem;
			}

			& .slide__3-text--1{
				@media(--viewport-phone){
					border-radius: 20px 20px 0 0;
				}
			}
			& .slide__3-text--2 {
				@media(--viewport-phone){
					border-radius: 0;
				}
			}
		}

		& .slide__3-image {
			height: 100%;
			width: 100%;
			& img {
				height: 100%;
				@media(--viewport-phone){
					width: 100%;
					height: unset;
				}
			}
		}
	}
</style>