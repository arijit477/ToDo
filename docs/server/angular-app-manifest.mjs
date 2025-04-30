
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ng-ToDo/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ng-ToDo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4952, hash: 'acc9ffea286164df70bced69b87d54908a8b6d3499c51b3c1d44b0273e597809', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1068, hash: 'd01d1bcea7de5d8afd4ea8842db257dde13b8b473b05489b5400a411e31c5fcb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 18523, hash: 'b1b147ce45a14beffe5d604d5f759e4c438883ddf543f40c3e82195e9df84f3d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
