import { CSSProperties } from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

interface IGradients {
  [ key: string ]: CSSProperties['backgroundImage'];
}

interface IFonts {
  size: {
    [ key: string ]: CSSProperties['fontSize'];
  };
}

interface IBorders {
  [ key: string ]: CSSProperties['border'];
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    borders: IBorders;
    fonts: IFonts;
    gradient: IGradients;
    themeName: string;
  }

  interface ThemeOptions {
    borders: IBorders;
    fonts: IFonts;
    gradient: IGradients;
    themeName: string;
  }
}
/*
  If you use another part of them such as mixins, breakpoints, etc. add another declaration module
  like below.
*/
declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    backgroundDark: CSSProperties['color'];
    backgroundLight: CSSProperties['color'];
    colorText: CSSProperties['color'];
    colorTextSelected: CSSProperties['color'];
  }

  interface PaletteOptions {
    backgroundDark: CSSProperties['color'];
    backgroundLight: CSSProperties['color'];
    colorText: CSSProperties['color'];
    colorTextSelected: CSSProperties['color'];
  }
}

const accent = '#771e76';
const backgroundLight = '#222';

export const theme = createMuiTheme({
  themeName: 'randoTheme',
  palette: {
    primary: {
      main: accent,
      light: '#765076',
    },
    backgroundLight,
    backgroundDark: '#1b1b1b',
    colorText: '#bdaeae',
    colorTextSelected: '#fff',
  },
  gradient: {
    input: `linear-gradient(
        180deg,
        ${ backgroundLight } 0%,
        ${ backgroundLight } 49%,
        ${ accent } 50%,
        ${ accent } 100%
      ) 1`,
  },
  fonts: {
    size: {
      label: '19px',
      base: '17px',
    },
  },
  borders: { input: '2px solid' },
});
