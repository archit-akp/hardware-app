
export default {
  basePath: 'https://archit-akp.github.io/hardware-app',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
