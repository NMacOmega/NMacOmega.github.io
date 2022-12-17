<script>

	import Header from '@comps/header/header.svelte';
	import Footer from '@comps/footer/footer.svelte';
	import Sidebar from '@comps/sidebar/sidebar.svelte';

	import HeroSection from '@comps/home/hero.svelte';
	import BioSection from '@comps/home/bio.svelte';
	import TechSection from '@comps/home/techs/techs.svelte';
	import ProjectsSection from '@comps/home/projects/projects.svelte';
	import ContactForm from '@comps/contactForm/contactForm.svelte';
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
	<section class="contact">
		<h1 class="contact__heading heading-1">How can I help?</h1>
		<ContactForm/>
	</section>
</main>
<Footer/>

<style lang="postcss">
	.grid-container {
		display: grid;
		grid-template-columns: max-content repeat(7, 1fr);
		grid-template-rows: repeat(6, min-content);
	}

	.contact {
		grid-column: 2 / -1;
		display: grid;
		grid-template-columns: 1fr 70% 1fr;
		padding: 3rem 0;

		@media(--viewport-tab-port){
			grid-template-columns: 2vw 1fr 2vw;
		}

		& > :global(.contact__form) {
			position: relative;
			grid-column: 2 / 3;
			margin-top: 4rem;
		}	
	}
	
	.contact__heading {
		grid-column: 1 / -1;
		padding: 0 3rem;
		background-image: linear-gradient(to right, #7ed56f, #28b485);
		display: inline-block;
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		letter-spacing: 2px;
		text-align: center;
	}
</style>
