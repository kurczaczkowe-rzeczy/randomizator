import { Route } from 'react-router';
import { useSelector } from 'react-redux';

import { RootState } from 'store/reducers/rootReducer';
import { hasAccess } from 'utils/permissionUtils';

import { IProtectedRoute } from './ProtectedRoute.types';

/**
 * Component description.
 */
export const ProtectedRoute = ({ access, ...routeProps }: IProtectedRoute ): JSX.Element | null => {
  const currenUserRole = useSelector(( state: RootState ) => state.usr.currentUserRole );

  return hasAccess( access, currenUserRole )
    ? <Route { ...routeProps } />
    : null;
};

export default ProtectedRoute;
