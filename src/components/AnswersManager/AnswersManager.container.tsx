import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import _first from 'lodash/first';
import _get from 'lodash/get';
import _map from 'lodash/map';
import _includes from 'lodash/includes';
import _isEqual from 'lodash/isEqual';
import _isNil from 'lodash/isNil';
import _split from 'lodash/split';
import _last from 'lodash/last';
import _toLower from 'lodash/toLower';
import _some from 'lodash/some';
import _kebabCase from 'lodash/kebabCase';

import Typography from '@material-ui/core/Typography';

import Card from 'components/card';
import Tabs from 'components/Tabs';
import AnswersTable from 'components/AnswersTable';
import useBeforeUnloadEvent from 'hooks/useBeforeUnloadEvent';
import useLocaleString from 'hooks/useLocaleString';
import useTypedSelector from 'hooks/useTypedSelector';
import { CARDS, PAGES, ROUTES } from 'constans';
import { CLEAR_ANSWERS_MANAGER, CLEAR_FIRESTORE_ANSWERS } from 'store/actions';
import { clearFirestoreAnswers, hideLoader, showLoader } from 'store/actions/globalActions';

import useStyle from './AnswersManager.styles';

/**
 * Component allows manage answers properties such as weights. It groups answers by field in tab and display them
 * in table.
 */
export const AnswersManager = (): JSX.Element => {
  const styles = useStyle();
  const getString = useLocaleString();
  const dispatch = useDispatch();
  const { push, location: { pathname }} = useHistory();

  const formID = useTypedSelector(({ form: { id }}) => id );
  const counter = useTypedSelector(({ firestore: { data: { forms }}}) => forms?.[ formID ]?.counter );
  const isEmptyForm = !counter;
  const fields = useTypedSelector(({ firestore: { data: { forms }}}) => forms?.[ formID ]?.fields ?? [], _isEqual );
  const isLoading = useTypedSelector(({ global: { bindToCard }}) => _includes( bindToCard, CARDS.ANSWERS_TABLE ));

  useEffect(() => {
    const action = _isNil( counter ) ? showLoader : hideLoader;

    dispatch( action( PAGES.DASHBOARD ));
  }, [ counter, dispatch ]);

  useEffect(() => {
    const lastPathPart = _last( _split( pathname, '/' ));
    const isTabExist = _some(
      [ ...fields, { name: _toLower( PAGES.DASHBOARD ) }],
      ({ name }) => _kebabCase( name ) === lastPathPart,
    );

    typeof counter == 'number' && !isTabExist && push( ROUTES.notFound );
  }, [ fields, counter, push, pathname ]);

  const blockNavigationActions = useMemo(() => [
    { type: CLEAR_ANSWERS_MANAGER },
    { type: CLEAR_FIRESTORE_ANSWERS },
  ], []);

  const { shouldShowPrompt, Prompt } = useBeforeUnloadEvent(
    ({ answersManager: { areDirtyAnswers }}) => areDirtyAnswers,
    blockNavigationActions,
  );

  const tabs = useMemo(() => _map( fields, ({ name }) => ({ index: name, label: name })), [ fields ]);

  return (
    <>
      <Card
        body={ ( isEmptyForm
          ? (
            <div className={ styles.emptyInfoContainer }>
              <p className={ styles.emptyInfoWrapper }>
                <Typography variant="h6">{ getString( 'emptyFormFirstLine' ) }</Typography>
                <Typography variant="caption">{ getString( 'emptyFormSecondLine' ) }</Typography>
              </p>
            </div>
          )
          : (
            <Tabs
              defaultTab={ _get( _first( tabs ), 'index' ) ?? '' }
              tabs={ _map( tabs, ( tab ) => ({ ...tab, content: <AnswersTable tab={ tab.index as string } /> })) }
              blockChangeTab={ shouldShowPrompt }
              onTabChange={ () => { dispatch( clearFirestoreAnswers()); } }
            />
          )) }
        cardClass={ styles.card }
        title={ getString( 'answersWeightManagerTitle' ) }
        isLoading={ isLoading }
      />
      <Prompt />
    </>
  );
};

export default AnswersManager;
