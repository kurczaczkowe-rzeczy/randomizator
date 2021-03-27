import { create } from '@storybook/theming';
import unicorn from '../src/assets/logo.svg';

export default create({
  base: 'dark',

  colorPrimary: '#765076',
  colorSecondary: '#771e76',

  // UI
  appBg: '#222',
  appContentBg: '#1b1b1b',
  appBorderColor: '#771e76',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#bdaeae',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#765076',
  barSelectedColor: '#771e76',
  barBg: '#1b1b1b',

  // Form colors
  inputBg: '#222',
  inputBorder: '#771e76',
  inputTextColor: '#bdaeae',
  inputBorderRadius: 4,

  brandTitle: 'Randomizator storybook',
  brandUrl: 'https://randomizator.web.app',
  brandImage: unicorn,
});
