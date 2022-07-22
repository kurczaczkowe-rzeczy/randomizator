import AnswersManager from 'components/AnswersManager';
import FormChooser from 'components/FormChooser';
import PageContainer from 'components/PageContainer';
import UserCreator from 'components/UserCreator';
import { USER_ROLES } from 'constans';
import useTypedSelector from 'hooks/useTypedSelector';
import { hasAccess } from 'utils/permissionUtils';

import useStyles from './Dashboard.styles';

/**
 * Component contains multiple widget for user and form management.
 */
export const Dashboard = (): JSX.Element => {
  const styles = useStyles();
  const currentUserRole = useTypedSelector(({ usr: { currentUserRole }}) => currentUserRole );

  return (
    <PageContainer>
      <div className={ styles.root }>
        <div className={ styles.left }>
          <FormChooser />
          {hasAccess([ USER_ROLES.ADMIN ], currentUserRole ) && <UserCreator />}
        </div>
        <AnswersManager />
      </div>
    </PageContainer>
  );
};

export default Dashboard;
