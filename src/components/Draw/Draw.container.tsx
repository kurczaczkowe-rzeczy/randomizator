import React from 'react';
import { useDispatch } from 'react-redux';
import _isEqual from 'lodash/isEqual';
import _includes from 'lodash/includes';

import { CARDS } from 'constans';
import Card from 'components/card';
import { setDrawResult } from 'store/actions/drawAction';
import useLocaleString from 'hooks/useLocaleString';
import useTypedSelector from 'hooks/useTypedSelector';

import DrawView from './Draw.view';

/** Component draw answers from available answers. It allows also draw answers by query. */
const Draw = (): JSX.Element => {
  const getString = useLocaleString();
  const dispatch = useDispatch();

  const result = useTypedSelector(({ draw: { result }}) => result );
  const errors = useTypedSelector(({ draw: { errorFields }}) => errorFields );
  const formID = useTypedSelector(({ form: { id }}) => id );
  const fields = useTypedSelector(({ firestore: { data: { forms }}}) => forms?.[ formID ]?.fields ?? [], _isEqual );
  const isRequesting = useTypedSelector(({ firestore: { status: { requesting: { forms }}}}) => !!forms );
  const isDrawing = useTypedSelector(({ global: { bindToCard }}) => _includes( bindToCard, CARDS.DRAW ));

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
