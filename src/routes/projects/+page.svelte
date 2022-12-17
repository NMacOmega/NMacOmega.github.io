<script>
	import Header from '@comps/header/header.svelte';
	import Footer from '@comps/footer/footer.svelte';
	import Sidebar from '@comps/sidebar/sidebar.svelte';

	import ProjectHero from './projectSections/projectHero.svelte';
	import ProjectMapviewer from './projectSections/projectMapviewer.svelte';
	import ProjectCapstone from './projectSections/projectCapstone.svelte';
	import ProjectFEWD from './projectSections/projectFEWD.svelte';
</script>

<main class="grid-container">
	<Header />
	<!-- <Sidebar /> -->
	<ProjectHero class="project-section" />
	<ProjectMapviewer class="project-section" />
	<ProjectCapstone class="project-section" />
	<ProjectFEWD class="project-section" />
</main>
<Footer/>

<style lang="postcss">
	.grid-container {
		display: grid;
		grid-template-columns: max-content repeat(7, 1fr);
		grid-template-rows: repeat(7, min-content);

		& > :global(.project-section) {
			grid-column: 2 / -1;
			text-align: center;
		}
	}
</style>
