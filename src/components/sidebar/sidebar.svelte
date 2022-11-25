<script>
	import SidebarItem from './sidebarItem.svelte';
	let svgPath = '/svg/generic.svg#';
</script>

<nav class="sidebar">
	<ul class="sidebar__list">
		<SidebarItem
			title={'Home'}
			href={'#'}
			svgUrlFront={`${svgPath}icon-home`}
			svgUrlBack={`${svgPath}icon-home`}
		/>
		<!-- Possibly add noflip to prevent having to send svgurlback on first element -->
		<SidebarItem
			title={'About'}
			href={'#'}
			svgUrlFront={`${svgPath}icon-happy`}
			svgUrlBack={`${svgPath}icon-grin`}
		/>
		<SidebarItem
			title={'Projects'}
			href={'#'}
			svgUrlFront={`${svgPath}icon-lab`}
			svgUrlBack={`${svgPath}icon-fire`}
		/>
		<SidebarItem
			title={'CV'}
			href={'#'}
			svgUrlFront={`${svgPath}icon-profile`}
			svgUrlBack={`${svgPath}icon-download`}
		/>
		<SidebarItem
			title={'Contact'}
			href={'#'}
			svgUrlFront={`${svgPath}icon-bubble`}
			svgUrlBack={`${svgPath}icon-bubbles3`}
		/>
	</ul>
</nav>

<style lang="scss">
	.sidebar {
		grid-row: 1 / -1;
		grid-column: 1 / 2;
		position: relative;
		z-index: 1000;

		&__list {
			list-style: none;
			display: grid;
			grid-auto-rows: min-content;
			grid-row-gap: 2rem;

			align-items: center;

			position: -webkit-sticky;
			position: sticky;
			top: 0;
		}
	}
</style>
