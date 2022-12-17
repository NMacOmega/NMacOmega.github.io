<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { showModal } from '$hooks_client';
	import ContactForm from '@comps/contactForm/contactForm.svelte';
	let linkedIn = 'https://www.linkedin.com/in/nmac-12866';

	const  { route } = $page;

	let headerItems = [
		{name: 'Projects', href:`${base}/projects`},
		{name: 'LinkedIn', href: linkedIn, newTab: true},
		{name: 'Contact', href:'#', onClick: ()=> showModal('contact', ContactForm)},
	];

	if (route.id === '/projects') {
		headerItems = [
		{name: 'Home', href:`${base}/`},
		{name: 'LinkedIn', href: linkedIn, newTab: true},
		{name: 'Contact', href:'#', onClick: ()=> showModal('contact', ContactForm)},
	];
	}

</script>

<nav class="navigation">
	<ul class="navigation__list">
		{#each headerItems as {name, href, onClick, newTab}}
			{#if onClick}
				<li class="navigation__item" on:click|preventDefault={onClick}>
					<a {href}>{name}</a>
				</li>
			{:else if newTab}
				<li class="navigation__item" >
					<a {href} target="_blank" noreferrer noopener>{name}</a>
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
	.navigation 
	{
		grid-column: 2 / -1;	
	}
	
	.navigation__list{
		list-style: none;
		display: grid;
		grid-template-columns: 10fr [nav-start] repeat(5, min-content) [nav-end] 1px;
		grid-column-gap: 2rem;
		align-items: center;

		@media(--viewport-phone){
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		}

	.navigation__item{
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
</style>
