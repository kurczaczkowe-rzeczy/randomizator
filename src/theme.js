import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const accent = '#771e76';
const backgroundLight = '#222';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: accent,
      light: '#765076',
    },
    backgroundLight,
    backgroundDark: '#1b1b1b',
    colorText: '#bdaeae',
    colorTextSelected: '#fff',
    gradient: {
      input: `linear-gradient(
        180deg,
        ${ backgroundLight } 0%,
        ${ backgroundLight } 49%,
        ${ accent } 50%,
        ${ accent } 100%
      ) 1`,
    },
  },
  fonts: {
    size: {
      label: '19px',
      base: '17px',
    },
  },
  borders: { input: '2px solid' },
});
