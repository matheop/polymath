import preprocess from "svelte-preprocess";
import node from "@sveltejs/adapter-node";
import netlify from "@sveltejs/adapter-netlify";
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		preserve: ["ld+json"],
		defaults: {
			script: "typescript",
			style: "scss",
		},
		scss: {
			prependData: `@import './src/style/_theme.scss';`,
			renderSync: true,
		},
	}),

	kit: {
		adapter: netlify(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte",
		vite: {
			// server: { https: true },
			build: {
				minify: "terser",
				// target: "es2015",
				chunkSizeWarningLimit: 1000,
			},
			resolve: {
				alias: {
					$uikit: resolve("./src/lib/uikit"),
					$svg: resolve("./src/lib/svg"),
					$lib: resolve("./src/lib"),
					$stores: resolve("./src/stores"),
					$utils: resolve("./src/utils"),
					env: resolve("./src/env.ts"),
				},
			},
		},
	},
};

export default config;
