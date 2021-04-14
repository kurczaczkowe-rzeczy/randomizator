import FiraSansBold from 'assets/fonts/FiraSans/FiraSans-Bold.ttf';
import FiraSansBoldItalic from 'assets/fonts/FiraSans/FiraSans-BoldItalic.ttf';
import FiraSansRegularItalic from 'assets/fonts/FiraSans/FiraSans-Italic.ttf';
import FiraSansRegular from 'assets/fonts/FiraSans/FiraSans-Regular.ttf';
import MontserratBold from 'assets/fonts/Montserrat/Montserrat-Bold.ttf';
import MontserratBoldItalic from 'assets/fonts/Montserrat/Montserrat-BoldItalic.ttf';
import MontserratRegularItalic from 'assets/fonts/Montserrat/Montserrat-Italic.ttf';
import MontserratRegular from 'assets/fonts/Montserrat/Montserrat-Regular.ttf';

export default[
  {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
        local('Montserrat-Regular'),
        url(${ MontserratRegular }) format('ttf')
      `,
  },
  {
    fontFamily: 'Montserrat',
    fontStyle: 'italic',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
        local('Montserrat-Italic'),
        url(${ MontserratRegularItalic }) format('ttf')
      `,
  },
  {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `
        local('Montserrat-Bold'),
        url(${ MontserratBold }) format('ttf')
      `,
  },
  {
    fontFamily: 'Montserrat',
    fontStyle: 'italic',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `
        local('Montserrat-BoldItalic'),
        url(${ MontserratBoldItalic }) format('ttf')
      `,
  },
  {
    fontFamily: 'FiraSans',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
       local('FiraSans-Regular'),
       url(${ FiraSansRegular }) format('ttf')
     `,
  },
  {
    fontFamily: 'FiraSans',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
       local('FiraSans-Italic'),
       url(${ FiraSansRegularItalic }) format('ttf')
     `,
  },
  {
    fontFamily: 'FiraSans',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `
       local('FiraSans-Bold'),
       url(${ FiraSansBold }) format('ttf')
     `,
  },
  {
    fontFamily: 'FiraSans',
    fontStyle: 'italic',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `
       local('FiraSans-BoldItalic'),
       url(${ FiraSansBoldItalic }) format('ttf')
     `,
  },
] as const;
