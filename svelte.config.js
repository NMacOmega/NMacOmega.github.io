// import adapter from '@sveltejs/adapter-auto';
// import preprocessor from 'svelte-preprocess';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	preprocess: preprocessor(),

// 	kit: {
// 		adapter: adapter()
// 	}
// };

// export default config;

import adapter from '@sveltejs/adapter-static';
import preprocessor from 'svelte-preprocess';

/** @type {import(""@sveltejs/kit").Config} */
const config = {
	preprocess: preprocessor(),
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),

		paths: {
			// change below to your repo name
			base: process.env.NODE_ENV === 'production' ? '/portfolio' : ''
		}
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte'
	}
};

export default config;
