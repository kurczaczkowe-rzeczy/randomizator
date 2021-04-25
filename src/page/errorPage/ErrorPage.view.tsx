import { ReactComponent as Unicorn } from 'assets/unicorn.svg';

import useLocaleString from 'hooks/useLocaleString';

import Link from 'components/Link';
import Card from 'components/card/Card.view';

import classes from './errorPage.module.scss';
import { IErrors } from './ErrorPage.types';

export const ErrorPage = ({ errors }: IErrors ): JSX.Element => {
  const getString = useLocaleString();

  return (
    <>
      <div className={ classes.center }>
        <Unicorn width="200px" />
        <Card
          cardClass={ classes.card }
          title={ getString( 'errorPageNotFound' ) }
          body={ errors }
        />
      </div>
      <div className={ classes.bottom }>
        { getString( 'iconMade' ) }
        <Link
          href="https://www.flaticon.local/authors/freepik"
          title="Freepik"
          label="Freepik"
        />
      </div>
    </>
  );
};

export default ErrorPage;
