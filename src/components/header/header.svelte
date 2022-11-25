<script>
	import NavItem from './headerItem.svelte';
	import { base } from '$app/paths';
	import modalData from '$stores';

	export let page;

	const onContactClick = () => {
		modalData.update((_) => {
			return { type: 'form', name: 'contact' };
		});
	};
</script>

<nav class="navigation">
	<ul class="navigation__list">
		{#if page === 'projects'}
			<NavItem num={'1'} href={`/`} name={'Home'} />
			<NavItem num={'2'} href={'#'} name={'CV'} />
			<NavItem num={'2'} href={'#'} name={'LinkedIn'} />
			<NavItem num={'3'} href={'#'} name={'Contact'} onClick={onContactClick} />
		{:else}
			<NavItem num={'1'} href={`${base}/projects`} name={'Projects'} />
			<NavItem num={'2'} href={'#'} name={'CV'} />
			<NavItem num={'2'} href={'#'} name={'LinkedIn'} />
			<NavItem num={'3'} href={'#'} name={'Contact'} onClick={onContactClick} />
		{/if}
	</ul>
</nav>

<style lang="scss">
	@import '$sass';
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
