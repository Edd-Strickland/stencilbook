import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'vanilla-demo',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  enableCache: false,
};
