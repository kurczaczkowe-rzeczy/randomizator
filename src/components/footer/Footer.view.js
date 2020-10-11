import React from 'react';

import classes from './footer.module.scss';

const Footer = () => (
  <div className={ classes.footer }>
    Stworzono przez
    {' '}
    <a
      href="https://github.com/kurczaczkowe-rzeczy"
      target="_blank"
      rel="noopener noreferrer"
    >
      Kurczaczkowe rzeczy
    </a>
    { `. Wersja: ${ process.env.REACT_APP_VERSION } ` }
  </div>
);

export default Footer;
