import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import(""@sveltejs/kit").Config} */
const config = {
	preprocess: sveltePreprocess({
		typescript: false,
		postcss: true
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
			'@postcss': 'src/lib/postcss',
			'@pdf': 'src/lib/pdf',
			$stores: 'src/stores.js',
			$hooks_client: 'src/hooks.client.js'
		}
	}
};

export default config;
