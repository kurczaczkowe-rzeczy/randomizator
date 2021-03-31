import { ThunkAction } from 'redux-thunk';

import { ADD_FORM } from 'store/actions';
import {
  FormsAction,
  IForm,
  IFormsState,
} from 'store/types';

// ToDo change name formProp
export const addForm = ( formProp: IForm ): ThunkAction<void, IFormsState, IForm, FormsAction> =>
  ( dispatch ): void => { dispatch({ type: ADD_FORM, payload: formProp }); };
