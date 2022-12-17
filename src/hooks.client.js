import { formResponse, modalData } from '$stores';

const updateFormResponse = (res) => {
	let { status, message } = res;
	formResponse.update((_) => {
		return { status, message };
	});
};

const showModal = (name, bodyComponent) => {
	modalData.update((_) => {
		return { name, bodyComponent };
	});
};

const processForm = (e) => {
	let endpoint = `https://formspree.io/f/meqdyyjq`;
	const formData = new FormData(e.target);

	return fetch(endpoint, {
		method: 'POST',
		body: formData,
		headers: {
			Accept: 'application/json'
		}
	})
		.then((formResponse) => {
			console.log(formResponse);
			if (formResponse.ok) {
				updateFormResponse({ status: 200, message: 'ok' });
			} else {
				formResponse.json().then((data) => {
					if (Object.hasOwn(formResponse, 'errors')) {
						return updateFormResponse({
							status: 400,
							message: data['errors'].map((error) => error['message']).join(', ')
						});
					} else {
						return updateFormResponse({ status: 500, message: 'internal server error' });
					}
				});
			}
		})
		.catch((error) => {
			return updateFormResponse({ status: 500, message: 'internal server error' });
		});
};

export { processForm, showModal };
