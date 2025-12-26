import adapter from '@sveltejs/adapter-netlify'; // Ubah baris ini
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// Ganti adapter-auto dengan adapter-netlify
		adapter: adapter()
	}
};

export default config;