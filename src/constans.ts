export const DELAY_DISAPPEARING = 800;
export const DELAY_FORM_NAME_HIGHLIGHT = 1500;
export const FORM_ID_KEY = 'FORM_ID';
export { version as APP_VERSION } from '../package.json';
export const HOME_PAGE = process.env.PUBLIC_URL;

export const IS_DEVELOPMENT = process.env.REACT_APP_ENVIRONMENT === 'development';
export const APP_NAME = IS_DEVELOPMENT ? '/randomizator' : '';
