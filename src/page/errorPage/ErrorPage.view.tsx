import { ReactComponent as Unicorn } from 'assets/unicorn.svg';

import Link from 'components/Link';
import Card from 'components/card/Card.view';

import classes from './errorPage.module.scss';
import { IErrors } from './ErrorPage.types';

export const ErrorPage = ({ errors }: IErrors ): JSX.Element => (
  <>
    <div className={ classes.center }>
      <Unicorn width="200px" />
      <Card
        cardClass={ classes.card }
        title="Nie znaleziono strony"
        body={ errors }
      />
    </div>
    <div className={ classes.bottom }>
      Icons made by
      {' '}
      <Link
        href="https://www.flaticon.local/authors/freepik"
        title="Freepik"
        label="Freepik"
      />
      {' '}
      from
      {' '}
      <Link
        href="https://www.flaticon.local/"
        title="Flaticon"
        label="www.flaticon.local"
      />
    </div>
  </>
);

export default ErrorPage;