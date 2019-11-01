import { configure } from '@storybook/html';

// configure(require.context('../src', true, /\.stories\.js$/), module);

const req = require.context('../src', true, /\.stories\.ts$/);

configure(req, module);
