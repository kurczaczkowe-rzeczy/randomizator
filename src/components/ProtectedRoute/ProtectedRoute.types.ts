import { RouteProps } from 'react-router';

export interface IProtectedRoute extends RouteProps {
  /**
   * Array or roles that has access to route. If empty all users has access.
   */
  access: string[];
}
