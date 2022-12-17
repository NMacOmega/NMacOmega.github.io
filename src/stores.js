import { writable, derived } from 'svelte/store';

const modalData = writable({
	name: '',
	bodyComponent: null
});

const formResponse = writable({
	status: null,
	message: null
});

const isFormsDisabled = derived(formResponse, ($formResponse) =>
	$formResponse.status ? true : false
);

export { modalData, formResponse, isFormsDisabled };
