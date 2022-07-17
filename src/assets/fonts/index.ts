import FiraSansBoldTTF from './FiraSans/FiraSans-Bold.ttf';
import FiraSansBoldWOFF from './FiraSans/FiraSans-Bold.woff';
import FiraSansBoldWOFF2 from './FiraSans/FiraSans-Bold.woff2';
import FiraSansBoldItalicTTF from './FiraSans/FiraSans-BoldItalic.ttf';
import FiraSansBoldItalicWOFF from './FiraSans/FiraSans-BoldItalic.woff';
import FiraSansBoldItalicWOFF2 from './FiraSans/FiraSans-BoldItalic.woff2';
import FiraSansRegularItalicTTF from './FiraSans/FiraSans-Italic.ttf';
import FiraSansRegularItalicWOFF from './FiraSans/FiraSans-Italic.woff';
import FiraSansRegularItalicWOFF2 from './FiraSans/FiraSans-Italic.woff2';
import FiraSansRegularTTF from './FiraSans/FiraSans-Regular.ttf';
import FiraSansRegularWOFF from './FiraSans/FiraSans-Regular.woff';
import FiraSansRegularWOFF2 from './FiraSans/FiraSans-Regular.woff2';
import MontserratBoldTTF from './Montserrat/Montserrat-Bold.ttf';
import MontserratBoldWOFF from './Montserrat/Montserrat-Bold.woff';
import MontserratBoldWOFF2 from './Montserrat/Montserrat-Bold.woff2';
import MontserratBoldItalicTTF from './Montserrat/Montserrat-BoldItalic.ttf';
import MontserratBoldItalicWOFF from './Montserrat/Montserrat-BoldItalic.woff';
import MontserratBoldItalicWOFF2 from './Montserrat/Montserrat-BoldItalic.woff2';
import MontserratRegularItalicTTF from './Montserrat/Montserrat-Italic.ttf';
import MontserratRegularItalicWOFF from './Montserrat/Montserrat-Italic.woff';
import MontserratRegularItalicWOFF2 from './Montserrat/Montserrat-Italic.woff2';
import MontserratRegularTTF from './Montserrat/Montserrat-Regular.ttf';
import MontserratRegularWOFF from './Montserrat/Montserrat-Regular.woff';
import MontserratRegularWOFF2 from './Montserrat/Montserrat-Regular.woff2';
import MontserratMediumItalicTTF from './Montserrat/Montserrat-MediumItalic.ttf';
import MontserratMediumItalicWOFF from './Montserrat/Montserrat-MediumItalic.woff';
import MontserratMediumItalicWOFF2 from './Montserrat/Montserrat-MediumItalic.woff2';
import MontserratMediumTTF from './Montserrat/Montserrat-Medium.ttf';
import MontserratMediumWOFF from './Montserrat/Montserrat-Medium.woff';
import MontserratMediumWOFF2 from './Montserrat/Montserrat-Medium.woff2';

export default[
  {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
        local('Montserrat-Regular'),
        url(${ MontserratRegularTTF }) format('ttf')
        url(${ MontserratRegularWOFF }) format('woff')
        url(${ MontserratRegularWOFF2 }) format('woff2')
      `,
  },
  {
    fontFamily: 'Montserrat',
    fontStyle: 'italic',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
        local('Montserrat-Italic'),
        url(${ MontserratRegularItalicTTF }) format('ttf')
        url(${ MontserratRegularItalicWOFF }) format('woff')
        url(${ MontserratRegularItalicWOFF2 }) format('woff2')
      `,
  },
  {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `
        local('Montserrat-Medium'),
        url(${ MontserratMediumTTF }) format('ttf')
        url(${ MontserratMediumWOFF }) format('woff')
        url(${ MontserratMediumWOFF2 }) format('woff2')
      `,
  },
  {
    fontFamily: 'Montserrat',
    fontStyle: 'italic',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `
        local('Montserrat-MediumItalic'),
        url(${ MontserratMediumItalicTTF }) format('ttf')
        url(${ MontserratMediumItalicWOFF }) format('woff')
        url(${ MontserratMediumItalicWOFF2 }) format('woff2')
      `,
  },
  {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `
        local('Montserrat-Bold'),
        url(${ MontserratBoldTTF }) format('ttf')
        url(${ MontserratBoldWOFF }) format('woff')
        url(${ MontserratBoldWOFF2 }) format('woff2')
      `,
  },
  {
    fontFamily: 'Montserrat',
    fontStyle: 'italic',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `
        local('Montserrat-BoldItalic'),
        url(${ MontserratBoldItalicTTF }) format('ttf')
        url(${ MontserratBoldItalicWOFF }) format('woff')
        url(${ MontserratBoldItalicWOFF2 }) format('woff2')
      `,
  },
  {
    fontFamily: 'FiraSans',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
       local('FiraSans-Regular'),
       url(${ FiraSansRegularTTF }) format('ttf')
        url(${ FiraSansRegularWOFF }) format('woff')
        url(${ FiraSansRegularWOFF2 }) format('woff2')
     `,
  },
  {
    fontFamily: 'FiraSans',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
       local('FiraSans-Italic'),
       url(${ FiraSansRegularItalicTTF }) format('ttf')
        url(${ FiraSansRegularItalicWOFF }) format('woff')
        url(${ FiraSansRegularItalicWOFF2 }) format('woff2')
     `,
  },
  {
    fontFamily: 'FiraSans',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `
       local('FiraSans-Bold'),
       url(${ FiraSansBoldTTF }) format('ttf')
        url(${ FiraSansBoldWOFF }) format('woff')
        url(${ FiraSansBoldWOFF2 }) format('woff2')
     `,
  },
  {
    fontFamily: 'FiraSans',
    fontStyle: 'italic',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `
       local('FiraSans-BoldItalic'),
       url(${ FiraSansBoldItalicTTF }) format('ttf')
        url(${ FiraSansBoldItalicWOFF }) format('woff')
        url(${ FiraSansBoldItalicWOFF2 }) format('woff2')
     `,
  },
] as const;
