import _isEmpty from 'lodash/isEmpty';
import _pull from 'lodash/pull';
import _union from 'lodash/union';

import {
  BLOCK_NAVIGATION_CB,
  CLEAR_GLOBAL,
  FORCE_HIDE_LOADER,
  HIDE_LOADER,
  HIDE_MODAL,
  SET_BLOCK_NAVIGATION_CB,
  SHOW_LOADER,
  SHOW_MODAL,
} from 'store/actions';
import { GlobalAction, IGlobalState } from 'store/types';

const initialState: IGlobalState = {
  bindToCard: [],
  blockNavigationActions: [],
  isLoading: true,
  isModalOpen: false,
  language: 'PL',
  loadingsQueue: [],
};

const reducer = ( state = initialState, action: GlobalAction = { type: CLEAR_GLOBAL }): IGlobalState => {
  switch ( action.type ) {
    case SHOW_LOADER: {
      const isEmptyBindings = !action.payload.bindToCard;
      const newBindings = isEmptyBindings ? [] : [ ...state.bindToCard, action.payload.bindToCard ];

      return {
        ...state,
        loadingsQueue: _union( state.loadingsQueue, [ action.payload.callFrom ]),
        isLoading: true,
        bindToCard: newBindings,
      };
    }
    case HIDE_LOADER: {
      const newLoadingQueue = _pull( state.loadingsQueue, action.payload.callFrom );
      const isEmptyBindings = !action.payload.bindToCard;
      const newBindings = isEmptyBindings ? [] : _pull( state.bindToCard, action.payload.bindToCard );

      return {
        ...state,
        loadingsQueue: newLoadingQueue,
        isLoading: !_isEmpty( newLoadingQueue ),
        bindToCard: newBindings,
      };
    }
    case FORCE_HIDE_LOADER: {
      return {
        ...state,
        loadingsQueue: [],
        isLoading: false,
        bindToCard: [],
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
    case SET_BLOCK_NAVIGATION_CB: {
      return {
        ...state,
        blockNavigationActions: action.payload.blockNavigationActions,
      };
    }
    case BLOCK_NAVIGATION_CB: {
      return {
        ...state,
        blockNavigationActions: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
