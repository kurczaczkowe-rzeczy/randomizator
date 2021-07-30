import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';

import { RootState } from 'store/reducers/rootReducer';
import { hasAccess } from 'utils/permissionUtils';
import { ROUTES } from 'constans';

import { IProtectedRoute } from './ProtectedRoute.types';

/**
 * Component description.
 */
export const ProtectedRoute = ({ access, ...routeProps }: IProtectedRoute ): JSX.Element => {
  const currenUserRole = useSelector(( state: RootState ) => state.usr.currentUserRole );

  return hasAccess( access, currenUserRole )
    ? <Route { ...routeProps } />
    : <Redirect to={ ROUTES.notFound } />;
};

export default ProtectedRoute;
