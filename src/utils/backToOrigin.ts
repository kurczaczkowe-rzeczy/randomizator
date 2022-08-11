import { match } from 'react-router';
import _isEmpty from 'lodash/isEmpty';
import _isObject from 'lodash/isObject';

import { ASK_FOR_PAGE_ORIGIN } from 'constans';

/**
 * When logged user open in new tab form back button didn't know what was the previous page.
 * So the form page send ask for origin page path. If message handler receive ask it wil send them
 * origin pathname so the form will be known what is origin page.
 * */
interface IOriginPageResource {
  /** Contains path to origin page. */
  pathname: string;
}

/** Check if value is object with property *pathname* */
const hasPathname = ( value: unknown ): value is IOriginPageResource => _isObject( value ) && 'pathname' in value;

/**
 * It allows to get origin path from broadcast data and set them. If path will be already set method not run setter.
 * This prevents user from back to page other than the one from which he open form, if he had switched origin page.
 * @param broadcastData - data provided from broadcast channel
 * @param originPath - path from which the form was moved to a new tab
 * @param originPathSetter - path setter
 */
export const handleSetOriginPath = (
  broadcastData: unknown,
  originPath: string,
  originPathSetter: ( path: string ) => void,
): void => {
  if ( hasPathname( broadcastData ) && _isEmpty( originPath )) {
    originPathSetter( broadcastData.pathname );
  }
};

/**
 * If a function recognizes asking for an origin path, it will provide the path via sendOriginPath.
 * This prevents user from back to form page.
 * @param broadcastData - data provided from broadcast channel
 * @param historyLength - length of history entries
 * @param routeMatch - information about matched route
 * @param sendOriginPath - method that save path
 * @param pathname - path from which the form was moved to a new tab
 */
export const handleAskForPageOrigin = (
  broadcastData: unknown,
  historyLength: number,
  routeMatch: match | null,
  sendOriginPath: ( originPageResource: IOriginPageResource ) => void,
  pathname: string,
): void => {
  if ( broadcastData === ASK_FOR_PAGE_ORIGIN && historyLength > 1 && _isEmpty( routeMatch )) {
    sendOriginPath({ pathname });
  }
};
