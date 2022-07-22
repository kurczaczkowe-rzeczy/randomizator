import { ThunkAction } from 'redux-thunk';

import { ADD_FORM } from 'store/actions';
import {
  FormsAction,
  IFormsState,
} from 'store/types';
import { IForm } from 'types';

// ToDo change name formProp, probably to remove
export const addForm = ( formProp: IForm ): ThunkAction<void, IFormsState, IForm, FormsAction> =>
  ( dispatch ): void => { dispatch({ type: ADD_FORM, payload: formProp }); };
