import { muiTheme } from 'storybook-addon-material-ui';

import randoTheme from './randoTheme';
import { theme } from 'theme';

const decorators = [
  muiTheme([theme]),
];

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: randoTheme,
    source: { type: 'dynamic' },
  },
};

export {
  parameters,
  decorators,
};
