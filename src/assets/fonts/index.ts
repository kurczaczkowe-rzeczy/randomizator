import FiraSansBold from './FiraSans/FiraSans-Bold.ttf';
import FiraSansBoldItalic from './FiraSans/FiraSans-BoldItalic.ttf';
import FiraSansRegularItalic from './FiraSans/FiraSans-Italic.ttf';
import FiraSansRegular from './FiraSans/FiraSans-Regular.ttf';
import MontserratBold from './Montserrat/Montserrat-Bold.ttf';
import MontserratBoldItalic from './Montserrat/Montserrat-BoldItalic.ttf';
import MontserratRegularItalic from './Montserrat/Montserrat-Italic.ttf';
import MontserratRegular from './Montserrat/Montserrat-Regular.ttf';
import MontserratMediumItalic from './Montserrat/Montserrat-MediumItalic.ttf';
import MontserratMedium from './Montserrat/Montserrat-Medium.ttf';

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
    fontWeight: 500,
    src: `
        local('Montserrat-Medium'),
        url(${ MontserratMedium }) format('ttf')
      `,
  },
  {
    fontFamily: 'Montserrat',
    fontStyle: 'italic',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `
        local('Montserrat-MediumItalic'),
        url(${ MontserratMediumItalic }) format('ttf')
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
