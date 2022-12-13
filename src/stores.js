import { writable } from 'svelte/store';

const modalData = writable({
	name: '',
	bodyComponent: null
});

export default modalData;
