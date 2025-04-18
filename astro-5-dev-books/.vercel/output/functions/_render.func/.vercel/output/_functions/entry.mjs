import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DveUL_lQ.mjs';
import { manifest } from './manifest_DGUZFj0q.mjs';
import { onRequest } from './_noop-middleware.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/libro/_id_.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');
const _page2 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/libro/[id].astro", _page0],
    ["src/pages/index.astro", _page1],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "e4e9e009-a3c3-479e-a018-a1381409cf68",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
