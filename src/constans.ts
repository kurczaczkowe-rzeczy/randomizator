import prepareLink from 'utils/prepareLink';

// Timeouts
export const DELAY_DISAPPEARING = 800;
export const DELAY_FORM_NAME_HIGHLIGHT = 1500;
export const BACKDROP_TIMEOUT = 500;

// LocalStorage keys
export const FORM_ID_KEY = 'FORM_ID';
export const SHOW_DEV_MODAL_KEY = 'SHOW_DEV_MODAL';

// Configs constants
export { version as APP_VERSION } from '../package.json';
export const HOME_PAGE = process.env.PUBLIC_URL;
export const IS_DEVELOPMENT_MODE = process.env.REACT_APP_ENVIRONMENT === 'development';
export const APP_SUFFIX = IS_DEVELOPMENT_MODE ? '/randomizator' : '';
export const CURRENT_DATE = process.env.REACT_APP_LAST_UPDATE_DATE;
export const ORGANIZATION_MAIN_PAGE = 'https://github.com/kurczaczkowe-rzeczy';

export const ROUTES = {
  home: prepareLink( '/' ),
  error: prepareLink( '/not_found' ),
  guest: prepareLink( '/:creatorId/:formId' ),
  notFound: prepareLink( '/not_found' ),
};

// Sizes
export const HEIGHT_OF_COLLAPSED_MENU = 70;
export const HEIGHT_OF_EXPANDED_MENU = '100vh';
export const WIDTH_OF_COLLAPSED_MENU = 92;
export const WIDTH_OF_EXPANDED_MENU = 180;
export const MENU_ITEM_HEIGHT = 52;
