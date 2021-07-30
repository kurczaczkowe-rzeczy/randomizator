import _includes from 'lodash/includes';
import _isEmpty from 'lodash/isEmpty';

export type Role = string;
export type IsRolePermitted = ( permittedRoles: Role[], role: Role ) => boolean;
export type IsAllRolesPermitted = ( permittedRoles: Role[]) => boolean;
export type HasAccess = ( permittedRoles: Role[], role: Role ) => boolean;

export const isRolePermitted: IsRolePermitted = ( permittedRoles, role ) =>
  _includes( permittedRoles, role );

export const isAllRolesPermitted: IsAllRolesPermitted = ( permittedRoles ) =>
  _isEmpty( permittedRoles );

export const hasAccess: HasAccess = ( permittedRoles, role ) =>
  isAllRolesPermitted( permittedRoles ) || isRolePermitted( permittedRoles, role );
