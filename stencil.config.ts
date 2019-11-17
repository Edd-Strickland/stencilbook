import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stencilbook',
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
  plugins: [
    sass()
  ],
  excludeSrc: [
    '/test/',
    '**/*.spec.*',
    '**/*.e2e.*',
    '**/*.stories.*'
  ]
};
