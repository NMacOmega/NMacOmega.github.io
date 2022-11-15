<script>
	import './styles.scss';
	import Footer from '@comps/footer/footer.svelte';
</script>

<div class="app">
	<main>
		<slot />
	</main>

	<Footer />
</div>
