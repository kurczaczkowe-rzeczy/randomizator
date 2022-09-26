import _isEmpty from 'lodash/isEmpty';
import _toUpper from 'lodash/toUpper';
import _has from 'lodash/has';
import _split from 'lodash/split';

import { PAGES } from 'constans';

type Pages = keyof typeof PAGES;

/**
 * Method gets from pathname page.
 * @param pathname - path of the URL
 *
 * @return page key
 */
export const getPageFromPathname = ( pathname: string ): Pages => {
  const [ ,, page ] = _split( pathname, '/' );

  if ( _isEmpty( page )) {
    return PAGES.HOME;
  }

  const pageKey = _toUpper( page );

  if ( _has( PAGES, pageKey )) {
    return pageKey as Pages;
  }

  return PAGES.HOME;
};
