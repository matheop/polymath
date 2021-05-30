import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "../../src/hooks.ts";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.svg\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-a98f0461.js",
			css: ["/./_app/assets/start-5f1180db.css"],
			js: ["/./_app/start-a98f0461.js","/./_app/chunks/vendor-48cdb5a0.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.svg","size":4943,"type":"image/svg+xml"},{"file":"fonts/FiraCode-Bold.ttf","size":324328,"type":"font/ttf"},{"file":"fonts/FiraCode-Light.ttf","size":285000,"type":"font/ttf"},{"file":"fonts/FiraCode-Medium.ttf","size":294960,"type":"font/ttf"},{"file":"fonts/FiraCode-Regular.ttf","size":299152,"type":"font/ttf"},{"file":"fonts/FiraCode-Retina.ttf","size":295252,"type":"font/ttf"},{"file":"fonts/FiraCode-SemiBold.ttf","size":311452,"type":"font/ttf"},{"file":"fonts/MrDafoe-Regular.ttf","size":46624,"type":"font/ttf"},{"file":"logo-polymath.png","size":8687,"type":"image/png"},{"file":"logo.svg","size":27857,"type":"image/svg+xml"},{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-80dcb1a8.js","css":["/./_app/assets/pages/__layout.svelte-9ad38dcc.css"],"js":["/./_app/pages/__layout.svelte-80dcb1a8.js","/./_app/chunks/vendor-48cdb5a0.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-7703ba07.js","css":[],"js":["/./_app/error.svelte-7703ba07.js","/./_app/chunks/vendor-48cdb5a0.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-3fc4c1b1.js","css":["/./_app/assets/pages/index.svelte-87ddf1f5.css"],"js":["/./_app/pages/index.svelte-3fc4c1b1.js","/./_app/chunks/vendor-48cdb5a0.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}