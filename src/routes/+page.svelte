<script>

	import Header from '@comps/header/header.svelte';
	import Footer from '@comps/footer/footer.svelte';
	import Sidebar from '@comps/sidebar/sidebar.svelte';

	import HeroSection from '@comps/home/hero.svelte';
	import BioSection from '@comps/home/bio.svelte';
	import TechSection from '@comps/home/techs/techs.svelte';
	import ProjectsSection from '@comps/home/projects/projects.svelte';
	import ContactForm from '@comps/home/contactForm.svelte';

	export let data;
	const {processForm = ()=>{}} = data; 

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Nathaniel's Portfolio" />
</svelte:head>

<main class="grid-container">
	<Header />
	<!-- <Sidebar /> -->
	<HeroSection />
	<BioSection />
	<TechSection />
	<ProjectsSection />
	<ContactForm onSubmit = {processForm}/>
</main>
<Footer/>

<style lang="postcss">
	.grid-container {
		display: grid;
		grid-template-columns: max-content repeat(7, 1fr);
		grid-template-rows: repeat(6, min-content);
	}
</style>
