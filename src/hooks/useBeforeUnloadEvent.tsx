import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Prompt } from 'react-router';
import _isEmpty from 'lodash/isEmpty';
import _isNil from 'lodash/isNil';

import useLocaleString from 'hooks/useLocaleString';
import useTypedSelector from 'hooks/useTypedSelector';
import { setBlockNavigationCb } from 'store/actions/globalActions';
import { RootState } from 'store/reducers/rootReducer';
import { IGlobalState } from 'store/types';

interface IUseBeforeUnloadEvent {
  Prompt: () => JSX.Element;
  shouldShowPrompt: boolean;
}

const useBeforeUnloadEvent = (
  selector: ( state: RootState ) => boolean,
  blockNavigationActions: IGlobalState[ 'blockNavigationActions' ] = [],
): IUseBeforeUnloadEvent => {
  const shouldShowPrompt = useTypedSelector( selector );
  const dispatch = useDispatch();
  const getString = useLocaleString();
  const message = getString( 'promptConfirmation' );

  useEffect(() => {
    const eventListener = ( event: BeforeUnloadEvent ): string | undefined => {
      if ( !shouldShowPrompt ) { return; }

      event.preventDefault();
      event.returnValue = message;

      return message;
    };

    window.addEventListener( 'beforeunload', eventListener );

    return () => {
      window.removeEventListener( 'beforeunload', eventListener );
    };
  }, [ shouldShowPrompt, message ]);

  useEffect(() => {
    if ( shouldShowPrompt
      && !_isNil( blockNavigationActions )
      && !_isEmpty( blockNavigationActions )) {
      dispatch( setBlockNavigationCb( blockNavigationActions ));
    }
  }, [
    shouldShowPrompt,
    dispatch,
    blockNavigationActions,
  ]);

  return {
    shouldShowPrompt,
    Prompt: () => <Prompt when={ shouldShowPrompt } message={ message } />,
  };
};

export default useBeforeUnloadEvent;
