import { useMemo } from 'react';
import _first from 'lodash/first';
import _get from 'lodash/get';
import _map from 'lodash/map';
import _includes from 'lodash/includes';
import _isEqual from 'lodash/isEqual';

import Typography from '@material-ui/core/Typography';

import Card from 'components/card';
import Tabs from 'components/Tabs';
import AnswersTable from 'components/AnswersTable';
import useLocaleString from 'hooks/useLocaleString';
import useTypedSelector from 'hooks/useTypedSelector';
import { CARDS } from 'constans';

import useStyle from './AnswersManager.styles';

/**
 * Component allows manage answers properties such as weights. It groups answers by field in tab and display them
 * in table.
 */
export const AnswersManager = (): JSX.Element => {
  const styles = useStyle();
  const getString = useLocaleString();

  const formID = useTypedSelector(({ form: { id }}) => id );
  const isEmptyForm = useTypedSelector(({ form: { counter }}) => !counter );
  const fields = useTypedSelector(({ firestore: { data: { forms }}}) => forms?.[ formID ]?.fields ?? [], _isEqual );
  const isLoading = useTypedSelector(({ global: { bindToCard }}) => _includes( bindToCard, CARDS.ANSWERS_TABLE ));

  const tabs = useMemo(() => _map( fields, ({ name }) => ({ index: name, label: name })), [ fields ]);

  return (
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
          />
        )) }
      cardClass={ styles.card }
      title={ getString( 'answersWeightManagerTitle' ) }
      isLoading={ isLoading }
    />
  );
};

export default AnswersManager;