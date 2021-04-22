import Link from 'components/Link';

import { APP_VERSION, CURRENT_DATE } from 'constans';

import classes from './footer.module.scss';

// ToDo href to config
const Footer = () => (
  <div className={ classes.footer }>
    Stworzono przez
    {' '}
    <Link
      href="https://github.com/kurczaczkowe-rzeczy"
      label="Kurczaczkowe rzeczy"
    />
    { `. Wersja: ${ APP_VERSION } ( ${ CURRENT_DATE } )` }
  </div>
);

export default Footer;