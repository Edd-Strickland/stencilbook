import { configure } from '@storybook/html';

const req = require.context('../src', true, /\.stories\.tsx?$/);

configure(req, module);
