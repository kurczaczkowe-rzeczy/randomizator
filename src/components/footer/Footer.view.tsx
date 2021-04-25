import Link from 'components/Link';

import {
  APP_VERSION,
  CURRENT_DATE,
  ORGANIZATION_MAIN_PAGE,
} from 'constans';

import classes from './footer.module.scss';
import useLocaleString from '../../hooks/useLocaleString';

/**
 * Component for display info about creators of application
 */
export const Footer = (): JSX.Element => {
  const getString = useLocaleString();

  return (
    <div className={ classes.footer }>
      {`${ getString( 'createBy' ) } `}
      <Link
        href={ ORGANIZATION_MAIN_PAGE }
        label={ getString( 'organizationName' ) }
      />
      {`. ${ getString( 'version' ) }: ${ APP_VERSION } ( ${ CURRENT_DATE } )`}
    </div>
  );
};

export default Footer;
