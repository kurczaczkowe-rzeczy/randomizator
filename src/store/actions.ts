export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export type LoginActionsTypes = typeof LOGIN_SUCCESS | typeof LOGIN_ERROR;

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export type LogoutActionsTypes = typeof LOGOUT_SUCCESS;

export const SET_ANSWERS = 'SET_ANSWERS';
export type AnswersActionsTypes = typeof SET_ANSWERS;

export const GET_USER_NAME = 'GET_USER_NAME';
export const ERROR_USER_DONT_EXIST = 'ERROR_USER_DONT_EXIST';
export type UserActionsTypes = typeof GET_USER_NAME | typeof ERROR_USER_DONT_EXIST;

export const SET_FORM_NAME = 'SET_FORM_NAME';
export const ERROR_FORM_DONT_EXIST = 'ERROR_FORM_DONT_EXIST';
export const CLEAR_FORM = 'CLEAR_FORM';
export type FormActionsTypes = typeof SET_FORM_NAME | typeof ERROR_FORM_DONT_EXIST | typeof CLEAR_FORM;

export const ADD_FORM = 'ADD_FORM';
export const CLEAR_FORMS = 'CLEAR_FORMS';
export type FormsActionsTypes = typeof ADD_FORM | typeof CLEAR_FORMS;

export const SET_TAGS = 'SET_TAGS';
export const ADD_TAG = 'ADD_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export type TagActionsTypes = typeof SET_TAGS | typeof ADD_TAG | typeof REMOVE_TAG;

export const DRAW_RESULT = 'DRAW_RESULT';
export const CLEAR_DRAW_RESULT = 'CLEAR_DRAW_RESULT';
export const ERROR_DRAW_RESULT = 'ERROR_DRAW_RESULT';
export const SET_ERROR_DRAW_RESULT = 'SET_ERROR_DRAW_RESULT';
export type DrawActionsTypes = typeof DRAW_RESULT
  | typeof CLEAR_DRAW_RESULT
  | typeof ERROR_DRAW_RESULT
  | typeof SET_ERROR_DRAW_RESULT;

export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const FORCE_HIDE_LOADER = 'FORCE_HIDE_LOADER';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const CLEAR_GLOBAL = 'CLEAR_GLOBAL';
export type GlobalActionsTypes =
  | typeof FORCE_HIDE_LOADER
  | typeof SHOW_MODAL
  | typeof HIDE_MODAL
  | typeof CLEAR_GLOBAL;
export type GlobalActionsTypesWithPayload =
  | typeof SHOW_LOADER
  | typeof HIDE_LOADER;
