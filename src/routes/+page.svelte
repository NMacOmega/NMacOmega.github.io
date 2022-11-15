<script>
	import Header from '@comps/header/header.svelte';
	import Sidebar from '@comps/sidebar/sidebar.svelte';
	import Modal from '@comps/modal/modal.svelte';

	import HeroSection from '@comps/home/hero.svelte';
	import BioSection from '@comps/home/bio.svelte';
	import TechSection from '@comps/home/techs/techs.svelte';
	import ProjectsSection from '@comps/home/projects/projects.svelte';
	// import ContactForm from '@comps/home/contactForm.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Nathaniel's Portfolio" />
</svelte:head>

<section class="grid-container">
	<Header />
	<Sidebar />
	<HeroSection />
	<BioSection />
	<TechSection />
	<ProjectsSection />
</section>
<Modal />

<style lang="scss">
	@import '$sass';
	.grid-container {
		display: grid;
		grid-template-columns: max-content repeat(7, 1fr);
		grid-template-rows: 5rem 50rem 40rem min-content 50rem 50rem 50rem 50rem;

		@include respond(tab-port) {
			grid-template-rows: 50rem 40rem min-content 50rem 50rem 50rem 50rem;
		}
	}
</style>
