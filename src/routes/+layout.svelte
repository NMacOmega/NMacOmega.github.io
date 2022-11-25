<script>
	import '$sass';
	import Footer from '@comps/footer/footer.svelte';
	import Modal from '@comps/modal/modal.svelte';
</script>

<div class="app">
	<slot />
	<Footer />
	<Modal />
</div>
