import Link from 'components/Link';

import {
  APP_VERSION,
  CURRENT_DATE,
  ORGANIZATION_MAIN_PAGE,
} from 'constans';

import classes from './footer.module.scss';

const Footer = () => (
  <div className={ classes.footer }>
    Stworzono przez
    {' '}
    <Link
      href={ ORGANIZATION_MAIN_PAGE }
      label="Kurczaczkowe rzeczy"
    />
    { `. Wersja: ${ APP_VERSION } ( ${ CURRENT_DATE } )` }
  </div>
);

export default Footer;
