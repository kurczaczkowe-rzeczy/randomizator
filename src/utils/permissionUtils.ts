import _includes from 'lodash/includes';
import _isEmpty from 'lodash/isEmpty';

import { Role, Roles } from 'types';

export type IsRolePermitted = ( permittedRoles: Roles, role: Role ) => boolean;
export type IsAllRolesPermitted = ( permittedRoles: Roles ) => boolean;
export type HasAccess = ( permittedRoles: Roles, role: Role ) => boolean;

export const isRolePermitted: IsRolePermitted = ( permittedRoles, role ) =>
  _includes( permittedRoles, role );

export const isAllRolesPermitted: IsAllRolesPermitted = ( permittedRoles ) =>
  _isEmpty( permittedRoles );

export const hasAccess: HasAccess = ( permittedRoles, role ) =>
  isAllRolesPermitted( permittedRoles ) || isRolePermitted( permittedRoles, role );
