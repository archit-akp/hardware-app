
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://archit-akp.github.io/hardware-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/hardware-app"
  },
  {
    "renderMode": 2,
    "route": "/hardware-app/about"
  },
  {
    "renderMode": 2,
    "route": "/hardware-app/contact"
  },
  {
    "renderMode": 2,
    "route": "/hardware-app/quote"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23610, hash: '4a28f834bc9a5fbe265ab093b8b0fa24feb090c48b5fa36e8d24baba2ec05a48', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17184, hash: 'd2fb15e209ea79592866455d1728e8a1caf118e6a4a7b04428bacb8e99f204cf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63167, hash: '5d517551c43d7aae5fab4f9ee744ce1e522dacbcf631b1eb242db3ed56cbe46f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 47966, hash: '80d3ffefcddd9511e6b1d2cfbe727df6d7f5b87d2e0c8f199182983523e85b65', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 41944, hash: 'db30fcf9119b1a1987b4d40fecbacde4158cc23f3e34daeefd8c1938085233eb', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'quote/index.html': {size: 107003, hash: '789a86ce62d764c4048aa19c08e0e8abae0333a5544f52b075265c8731728e21', text: () => import('./assets-chunks/quote_index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
