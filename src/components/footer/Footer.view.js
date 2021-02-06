import React from 'react';

import { APP_VERSION } from 'constans';

import classes from './footer.module.scss';
// ToDo href to config
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
    { `. Wersja: ${ APP_VERSION } ` }
  </div>
);

export default Footer;
