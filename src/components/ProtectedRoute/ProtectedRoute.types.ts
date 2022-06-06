import { RouteProps } from 'react-router';

import { Role, Roles } from 'types';

export interface IProtectedRoute extends RouteProps {
  /** Array or roles that has access to route. If empty all users has access. */
  access: Roles;
  /** Role of logged user. If user is guest role should be also GUEST. */
  currentUserRole: Role;
}
