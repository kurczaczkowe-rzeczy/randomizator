import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import _isEqual from 'lodash/isEqual';
import _isEmpty from 'lodash/isEmpty';
import _includes from 'lodash/includes';

import { CARDS } from 'constans';
import Card from 'components/card';
import { clearDraw, setDrawResult } from 'store/actions/drawAction';
import useLocaleString from 'hooks/useLocaleString';
import useTypedSelector from 'hooks/useTypedSelector';

import DrawView from './Draw.view';

/** Component draw answers from available answers. It allows also draw answers by query. */
const Draw = (): JSX.Element => {
  const getString = useLocaleString();
  const dispatch = useDispatch();

  const { listen } = useHistory();

  const result = useTypedSelector(({ draw: { result }}) => result );
  const errors = useTypedSelector(({ draw: { errorFields }}) => errorFields );
  const formID = useTypedSelector(({ form: { id }}) => id );
  const fields = useTypedSelector(({ firestore: { data: { forms }}}) => forms?.[ formID ]?.fields ?? [], _isEqual );
  const isRequesting = useTypedSelector(({ firestore: { status: { requesting: { forms }}}}) => !!forms );
  const isDrawing = useTypedSelector(({ global: { bindToCard }}) => _includes( bindToCard, CARDS.DRAW ));

  useEffect(() => {
    if ( !_isEmpty( formID )) { dispatch( clearDraw()); }
  }, [ formID, dispatch ]);

  useEffect(() => {
    const detachListener = listen(() => { dispatch( clearDraw()); });

    return () => { detachListener(); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Card
      fullWidthBody
      title={ getString( 'draw' ) }
      isLoading={ isRequesting || isDrawing }
      body={ (
        <DrawView
          fields={ fields }
          result={ result }
          errors={ errors }
          onRandomClick={ (): void => { dispatch( setDrawResult()); } }
        />
      ) }
    />

  );
};

export default Draw;
