import { configure } from '@storybook/html';

const req = require.context('../src', true, /\.stories\.ts$/);

configure(req, module);
