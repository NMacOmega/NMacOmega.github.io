<script>
	export let num, href, title, onClick, noRoute;
</script>

{#if noRoute}
	<li on:click|preventDefault={onClick} class="footer-nav__item footer-nav__item-{num}">
		<a {href} class="footer-nav__link">{title}</a>
	</li>
{:else}
	<li on:click={onClick} class="footer-nav__item footer-nav__item-{num}">
		<a {href} class="footer-nav__link">{title}</a>
	</li>
{/if}

<style lang="scss">
	.footer-nav {
		&__item {
			text-align: center;

			&--1 {
				grid-column: 2 / 3;
			}
		}

		&__link:link,
		&__link:visited {
			font-size: 1.4rem;
			color: var(--color-white);
			text-decoration: none;
			// font-family: $font-display;
			text-transform: uppercase;
			text-align: center;
			padding: 1.5rem;
			display: block;

			transition: all 0.2s;
		}

		&__link:hover,
		&__link:active {
			background-color: rgba(#000, 0.05);
			transform: translateY(-3px);
		}
	}
</style>
