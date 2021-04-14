import _union from 'lodash/union';
import _pull from 'lodash/pull';
import _isEmpty from 'lodash/isEmpty';

import {
  HIDE_LOADER,
  FORCE_HIDE_LOADER,
  SHOW_LOADER,
  CLEAR_GLOBAL,
  HIDE_MODAL,
  SHOW_MODAL,
} from 'store/actions';
import { GlobalAction, IGlobalState } from 'store/types';

const initialState: IGlobalState = {
  isLoading: true,
  isModalOpen: false,
  loadingsQueue: [],
};

const reducer = ( state = initialState, action: GlobalAction = { type: CLEAR_GLOBAL }): IGlobalState => {
  switch ( action.type ) {
    case SHOW_LOADER: {
      return {
        ...state,
        loadingsQueue: _union( state.loadingsQueue, [ action.payload.callFrom ]),
        isLoading: true,
      };
    }
    case HIDE_LOADER: {
      const newLoadingQueue = _pull( state.loadingsQueue, action.payload.callFrom );

      return {
        ...state,
        loadingsQueue: newLoadingQueue,
        isLoading: !_isEmpty( newLoadingQueue ),
      };
    }
    case FORCE_HIDE_LOADER: {
      return {
        ...state,
        loadingsQueue: [],
        isLoading: false,
      };
    }
    case SHOW_MODAL: {
      return {
        ...state,
        isModalOpen: true,
      };
    }
    case HIDE_MODAL: {
      return {
        ...state,
        isModalOpen: false,
      };
    }
    case CLEAR_GLOBAL: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
