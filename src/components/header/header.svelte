<script>
	import { base } from '$app/paths';
	import modalData from '$stores';

	export let page = undefined;

	const onContactClick = () => {
		modalData.update((_) => {
			return { type: 'form', name: 'contact' };
		});
	};

	let headerItems = [
		{name: 'Projects', href:`${base}/projects`},
		{name: 'CV', href:'#'},
		{name: 'LinkedIn', href:'#'},
		{name: 'Contact', href:'#', onClick: onContactClick},
	];

	if (page === 'projects') {
		headerItems = [
		{name: 'Home', href:`${base}/`},
		{name: 'CV', href:'#'},
		{name: 'LinkedIn', href:'#'},
		{name: 'Contact', href:'#', onClick: onContactClick},
	];
	}

</script>

<nav class="navigation">
	<ul class="navigation__list">
		{#each headerItems as {name, href, onClick}}
			{#if onClick}
				<li class="navigation__item" on:click|preventDefault={onClick}>
					<a {href}>{name}</a>
				</li>
			{:else}
				<li class="navigation__item" >
					<a {href}>{name}</a>
				</li>
			{/if}
		{/each}
	</ul>
</nav>

<style lang="postcss">
	.navigation {
		grid-column: 2 / -1;

		& > .navigation__list{
			list-style: none;
		 	display: grid;
		 	grid-template-columns: 10fr [nav-start] repeat(5, min-content) [nav-end] 1px;
		 	grid-column-gap: 2rem;
		 	align-items: center;

			& > .navigation__item{
				text-align: center;

				&:first-of-type {
					grid-column: 2 / 3;
				}

				& > a {
					&:link, &:visited{
						font-size: 1.4rem;
						color: var(--color-black);
						text-decoration: none;
						text-transform: uppercase;
						text-align: center;
						padding: 1.5rem;
						display: block;						
						transition: alls 0.2s;
					}

					&:hover, &:active{
						background-color: rgba(0, 0, 0, 0.05);
						transform: translateY(-3px);
					}
				}

			}
		}
	}
</style>
