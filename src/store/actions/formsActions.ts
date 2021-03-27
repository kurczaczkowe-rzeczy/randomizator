import { ThunkAction } from 'redux-thunk';

import { ADD_FORM } from 'store/actions';
import { FormsAction, IFormState } from 'store/types';

// ToDo change name formProp
export const addForm = ( formProp: IFormState ): ThunkAction<void, IFormState, IFormState, FormsAction> =>
  ( dispatch ): void => { dispatch({ type: ADD_FORM, payload: formProp }); };
