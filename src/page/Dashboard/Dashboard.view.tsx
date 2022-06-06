import AnswersManager from 'components/AnswersManager';
import FormChooser from 'components/FormChooser';
import PageContainer from 'components/PageContainer';
import UserCreator from 'components/UserCreator';

import useStyles from './Dashboard.styles';

/**
 * Component contains multiple widget for user and form management.
 */
export const Dashboard = (): JSX.Element => {
  const styles = useStyles();

  return (
    <PageContainer>
      <div className={ styles.root }>
        <div className={ styles.left }>
          <FormChooser />
          <UserCreator />
        </div>
        <AnswersManager />
      </div>
    </PageContainer>
  );
};

export default Dashboard;
