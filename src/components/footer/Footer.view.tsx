import Link from 'components/Link';

import useLocalize from 'hooks/useLocalize';
import {
  APP_VERSION,
  CURRENT_DATE,
  ORGANIZATION_MAIN_PAGE,
} from 'constans';

import classes from './footer.module.scss';

/**
 * Component for display info about creators of application
 */
export const Footer = (): JSX.Element => {
  const localize = useLocalize();

  return (
    <div className={ classes.footer }>
      {`${ localize( 'createBy' ) } `}
      <Link
        href={ ORGANIZATION_MAIN_PAGE }
        label={ localize( 'organizationName' ) }
      />
      {`. ${ localize( 'version' ) }: ${ APP_VERSION } ( ${ CURRENT_DATE } )`}
    </div>
  );
};

export default Footer;
