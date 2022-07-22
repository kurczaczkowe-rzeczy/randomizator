import { Route, Redirect } from 'react-router';

import { hasAccess } from 'utils/permissionUtils';
import { ROUTES } from 'constans';

import { IProtectedRoute } from './ProtectedRoute.types';

/** Component check if user has access to specific route. */
export const ProtectedRoute = ({
  access,
  currentUserRole,
  ...routeProps
}: IProtectedRoute ): JSX.Element => hasAccess( access, currentUserRole )
  ? <Route { ...routeProps } />
  : <Redirect to={ ROUTES.notFound } />;

export default ProtectedRoute;
