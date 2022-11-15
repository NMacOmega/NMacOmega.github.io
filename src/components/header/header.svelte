<script>
	import NavItem from './headerItem.svelte';
	import { base } from '$app/paths';
</script>

<nav class="navigation">
	<ul class="navigation__list">
		<NavItem num={'1'} href={`${base}/projects/cancode`} name={'Home'} />
		<NavItem num={'2'} href={'#'} name={'About'} />
		<NavItem num={'3'} href={'#'} name={'Projects'} />
		<NavItem num={'4'} href={'#'} name={'CV'} />
		<NavItem num={'5'} href={'#'} name={'Contact'} />
	</ul>
</nav>

<style lang="scss">
	@import '$mixins';

	.navigation {
		grid-column: 2 / -1;
		@include respond(tab-port) {
			display: none;
		}

		&__list {
			list-style: none;
			display: grid;
			grid-template-columns: 10fr [nav-start] repeat(5, min-content) [nav-end] 1px;
			grid-column-gap: 2rem;

			align-items: center;
		}
	}
</style>
