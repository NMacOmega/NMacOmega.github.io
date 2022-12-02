import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import(""@sveltejs/kit").Config} */
const config = {
	preprocess: sveltePreprocess({
		typescript: false
	}),
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
			base: process.env.NODE_ENV === 'production' ? '' : ''
			//Use this when you have a project name in your github pages path, such as /portfolio. That way the built pages know how to route on Github
		},
		alias: {
			'@comps': 'src/components',
			'@img': 'src/lib/images',
			'@vid': 'src/lib/videos',
			'@svg': 'src/lib/svg',
			'@sass': 'src/lib/sass',
			$sass: 'src/lib/sass/styles.scss',
			$mixins: 'src/lib/sass/abstracts/mixins.scss',
			$functions: 'src/lib/sass/abstracts/functions.scss',
			$stores: 'src/stores.js'
		}
	}
};

export default config;
