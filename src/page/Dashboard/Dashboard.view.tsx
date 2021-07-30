import Card from 'components/card';
import UserCreator from 'components/UserCreator';

import useStyles from './Dashboard.styles';
import { IDashboard } from './Dashboard.types';

/**
 * Component contains multiple widget for user and form management.
 */
export const Dashboard = ({ userCreatorProps }: IDashboard ): JSX.Element => {
  const styles = useStyles();

  return (
    <div className={ styles.root }>
      <Card
        centerBody={ false }
        isLoading={ userCreatorProps.isLoading }
        body={ <UserCreator { ...userCreatorProps } /> }
      />
    </div>
  );
};

export default Dashboard;
