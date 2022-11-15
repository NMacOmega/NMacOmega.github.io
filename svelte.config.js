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
import sveltePreprocess from 'svelte-preprocess';

/** @type {import(""@sveltejs/kit").Config} */
const config = {
	preprocess: sveltePreprocess({ typescript: false, scss: false }),
	vitePlugin: {
		experimental: {
			useVitePreprocess: true
		}
	},
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),

		paths: {
			base: process.env.NODE_ENV === 'production' ? '/portfolio' : ''
		},
		alias: {
			'@comps': 'src/components',
			'@img': 'src/lib/images',
			'@svg': 'src/lib/svg',
			'@sass': 'src/lib/sass',
			$sass: 'src/lib/sass/main.scss',
			$mixins: 'src/lib/sass/abstracts/mixins.scss'
		}
	}
};

export default config;
