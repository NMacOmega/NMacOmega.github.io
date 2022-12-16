// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load = async () => {
	return {
		processForm
	};
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
				return { status: 200, message: 'ok' };
			} else {
				formResponse.json().then((data) => {
					if (Object.hasOwn(formResponse, 'errors')) {
						return {
							status: 400,
							message: data['errors'].map((error) => error['message']).join(', ')
						};
					} else {
						return { status: 500, message: 'internal server error' };
					}
				});
			}
		})
		.catch((error) => {
			return { status: 500, message: 'internal server error' };
		});
};
