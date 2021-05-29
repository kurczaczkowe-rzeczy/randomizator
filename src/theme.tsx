import { CSSProperties } from 'react';

import { fade } from '@material-ui/core/styles/colorManipulator';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import fonts from 'assets/fonts';

interface IGradients {[ key: string ]: CSSProperties[ 'backgroundImage' ]}

interface IFonts {
  size: {
    [ key: string ]: CSSProperties[ 'fontSize' ];
  };
}

export interface IBorders {[ key: string ]: CSSProperties[ 'border' ]}

interface IShadows {[ key: string ]: CSSProperties[ 'boxShadow' ]}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    borders: IBorders;
    fonts: IFonts;
    gradient: IGradients;
    shadow: IShadows;
    themeName: string;
  }

  interface ThemeOptions {
    borders: IBorders;
    fonts: IFonts;
    gradient: IGradients;
    shadow: IShadows;
    themeName: string;
  }
}
/*
  If you use another part of them such as mixins, breakpoints, etc. add another declaration module
  like below.
*/
declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    backgroundDark: CSSProperties[ 'color' ];
    backgroundLight: CSSProperties[ 'color' ];
    colorText: CSSProperties[ 'color' ];
    colorTextSelected: CSSProperties[ 'color' ];
    fadedMain: () => CSSProperties[ 'color' ];
  }

  interface PaletteOptions {
    backgroundDark: CSSProperties[ 'color' ];
    backgroundLight: CSSProperties[ 'color' ];
    colorText: CSSProperties[ 'color' ];
    colorTextSelected: CSSProperties[ 'color' ];
    fadedMain: () => CSSProperties[ 'color' ];
  }
}

const palette = {
  primary: {
    main: '#771e76',
    light: '#765076',
  },
  secondary: { main: '#e28521' },
  backgroundLight: '#222',
  backgroundDark: '#1b1b1b',
  colorText: '#bdaeae',
  colorTextSelected: '#fff',
  fadedMain(): CSSProperties[ 'color' ] {
    return fade( this.primary.main, 0.2 );
  },
};

const shadow = {
  card: `0 0 5px ${ palette.primary.main }`,
  focus: `0 0 10px ${ palette.primary.main }`,
};

const typography = {
  fontFamily: 'Montserrat',
  h1: { fontFamily: 'FiraSans' },
  h2: { fontFamily: 'FiraSans' },
  h3: { fontFamily: 'FiraSans' },
  h4: { fontFamily: 'FiraSans' },
  h5: { fontFamily: 'FiraSans' },
  h6: { fontFamily: 'FiraSans' },
};

export const theme = createMuiTheme({
  themeName: 'randoTheme',
  palette,
  gradient: {
    input: `linear-gradient(
        180deg,
        ${ palette.backgroundLight } 0%,
        ${ palette.backgroundLight } 49%,
        ${ palette.primary.main } 50%,
        ${ palette.primary.main } 100%
      ) 1`,
  },
  fonts: {
    size: {
      menuButton: '2rem',
      menuItem: 16,
      label: 19,
      base: 17,
    },
  },
  borders: {
    input: '2px solid',
    separator: `2px solid ${ palette.primary.main }`,
    menu: `4px solid ${ palette.primary.main }`,
  },
  shadow,
  typography,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [ ...fonts ],
        '*': {
          scrollbarColor: `${ palette.primary.main } ${ palette.backgroundDark }`,
          scrollbarWidth: 'thin',

          '&::-webkit-scrollbar-track': { backgroundColor: palette.backgroundDark },
          '&::-webkit-scrollbar': {
            height: 4,
            width: 8,
            backgroundColor: palette.backgroundDark,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: palette.primary.main,
            borderRadius: 10,
          },
        },
        body: {
          backgroundColor: palette.backgroundDark,
          margin: 0,
          position: 'relative',
          minHeight: '100vh',
          '& div#root': {
            paddingTop: '48px',
            paddingLeft: '78px',
            paddingRight: '78px',
          },
        },
        input: {
          transition: 'all 0.6s linear',

          '&:focus': {
            borderImage: `linear-gradient(
                 0deg,
                 ${ palette.primary.main } 0%,
                 ${ palette.primary.main } 49%,
                 ${ palette.backgroundDark } 50%,
                 ${ palette.backgroundDark } 100%
               ) 1`,
            outline: 'none',
            boxShadow: shadow.focus,
          },
        },
      },
    },
  },
});
