import Card from 'components/card';
import FormChooser from 'components/FormChooser';
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
      <div className={ styles.left }>
        <FormChooser />
        <Card
          centerBody={ false }
          isLoading={ userCreatorProps.isLoading }
          body={ <UserCreator { ...userCreatorProps } /> }
        />
      </div>
    </div>
  );
};

export default Dashboard;
