import {
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { useDispatch } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';
import _map from 'lodash/map';
import _forEach from 'lodash/forEach';
import _compact from 'lodash/compact';

import { clearAnswerManager } from 'store/actions/answersManagerActions';
import { showLoader, hideLoader } from 'store/actions/globalActions';
import { Filters } from 'hooks/types';
import useAnswersConnect from 'hooks/useAnswersConnect';
import useTypedSelector from 'hooks/useTypedSelector';
import { CARDS, PAGES } from 'constans';
import { IAnswer } from 'types';

import {
  IAnswerTableContainer,
  IAnswersTable,
  IAnswerRow,
} from './AnswersTable.types';
import AnswersTable from './AnswersTable.view';

const AnswersTableContainer = ({ tab }: IAnswerTableContainer ): JSX.Element => {
  const { batch: firestoreBatch, doc } = useFirestore();
  const dispatch = useDispatch();
  const creatorID = useTypedSelector(({ firebase: { auth: { uid }}}) => uid );
  const filters = useMemo< Filters >(() => [[ 'fieldName', '==', tab ]], [ tab ]);
  const {
    answers,
    isLoading,
    updateStartAfter,
    formID,
    formWasChanged,
  } = useAnswersConnect({ filters });

  const answersRows = _map<IAnswer, IAnswerRow>( answers, ( answer ) => ({ ...answer, edit: false }));

  const onLoadMoreRows: IAnswersTable[ 'onLoadMoreRows' ] = useCallback(() => {
    updateStartAfter();

    return Promise.resolve( null );
  }, [ updateStartAfter ]);
  const onWeightUpdate: IAnswersTable[ 'onWeightUpdate' ] = async ( answers ) => {
    dispatch( showLoader( PAGES.DASHBOARD, CARDS.ANSWERS_TABLE ));
    try {
      const batch = firestoreBatch();

      const notEmptyAnswers = _compact( answers );

      _forEach( notEmptyAnswers, ({
        id,
        weight,
        answerID,
      }) => {
        const docRef = doc( `${ creatorID }/${ formID }/answers/${ answerID }/fields/${ id }` );

        batch.update( docRef, { weight });
      });

      await batch.commit();
      dispatch( clearAnswerManager());
    } catch ( e: unknown ) {
      // ToDo: Better error handling
      console.error( 'onWeightUpdate:', e );
    } finally {
      dispatch( hideLoader( PAGES.DASHBOARD, CARDS.ANSWERS_TABLE ));
    }
  };

  useEffect(() => {
    const action = isLoading ? showLoader : hideLoader;

    dispatch( action( PAGES.DASHBOARD, CARDS.ANSWERS_TABLE ));
  }, [ dispatch, isLoading ]);

  return (
    <AnswersTable
      rows={ answersRows }
      onLoadMoreRows={ onLoadMoreRows }
      onWeightUpdate={ onWeightUpdate }
      shouldReset={ formWasChanged }
    />
  );
};

export default AnswersTableContainer;
