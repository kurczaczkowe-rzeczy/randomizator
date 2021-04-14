import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import randoTheme from './randoTheme';
import { theme } from 'theme';

const decorators = [
  (story) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      { story() }
    </ThemeProvider>
  ),
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
