import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import rootReducer from 'store/reducers/rootReducer';
import { theme } from 'theme';

import randoTheme from './randoTheme';

const store = createStore( rootReducer, composeWithDevTools( applyMiddleware( thunk )));

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: randoTheme,
    source: { type: 'dynamic' },
  },
};
