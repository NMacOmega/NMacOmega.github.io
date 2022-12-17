<script>

	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { showModal } from '$hooks_client';
	import ContactForm from '@comps/contactForm/contactForm.svelte';
	let linkedIn = 'https://www.linkedin.com/in/nmac-12866';

	const  { route } = $page;


let footerItems = [
	{name: 'Projects', href:`${base}/projects`},
	{name: 'LinkedIn', href: linkedIn, newTab: true},
	{name: 'Contact', href:'#', onClick: ()=> showModal('contact', ContactForm)},
];

if (route.id === '/projects') {
	footerItems = [
	{name: 'Home', href:`${base}/`},
	{name: 'LinkedIn', href: linkedIn, newTab: true},
	{name: 'Contact', href:'#', onClick: ()=> showModal('contact', ContactForm)},
];
}


</script>

<footer class="footer">
<ul class="footer__list">
	{#each footerItems as {name, href, onClick, newTab}}
		{#if onClick}
			<li class="footer__item" on:click|preventDefault={onClick}>
				<a {href}>{name}</a>
			</li>
		{:else if newTab}
		<li class="footer__item" >
			<a {href} target="_blank" noreferrer noopener>{name}</a>
		</li>
		{:else}
			<li class="footer__item" >
				<a {href}>{name}</a>
			</li>
		{/if}
	{/each}
</ul>
<!-- <p class="copyright">
	&copy; Nathaniel. This is my stuff. Please attribute me if you copy my stuff. Thanks
</p> -->
</footer>

<style lang="postcss">

	.footer {
		background-color: var(--color-primary-dark);
		color: var(--color-white);
		padding: 8rem;
		grid-column: 1 / -1;

		& > .footer__list {
			list-style: none;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
			grid-gap: 2rem;
			align-items: center;

			& > .footer__item{
				text-align: center;

				& > a {
					&:link, &:visited{
						font-size: 1.4rem;
						color: var(--color-white);
						text-decoration: none;
						text-transform: uppercase;
						text-align: center;
						padding: 1.5rem;
						display: block;

						transition: all 0.2s;
					}

					&:hover, &:active{
						background-color: rgba(0, 0, 0, 0.05);
						transform: translateY(-3px);
					}
				}

			}
		}
	}

	.copyright {
		font-size: 1.4rem;
		text-align: center;
		width: 70%;
		margin: 8rem auto 0;
	}
</style>




