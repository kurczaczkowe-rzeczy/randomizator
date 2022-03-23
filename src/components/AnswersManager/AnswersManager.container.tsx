import { useMemo } from 'react';
import _first from 'lodash/first';
import _get from 'lodash/get';
import _map from 'lodash/map';
import _includes from 'lodash/includes';
import _isEqual from 'lodash/isEqual';

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

  const fields = useTypedSelector(({ form: { fields }}) => fields, _isEqual );
  const isLoading = useTypedSelector(({ global: { bindToCard }}) => _includes( bindToCard, CARDS.ANSWERS_TABLE ));

  const tabs = useMemo(() => _map( fields, ({ name }) => ({ index: name, label: name })), [ fields ]);

  return (
    <Card
      body={ (
        <Tabs
          defaultTab={ _get( _first( tabs ), 'index' ) ?? '' }
          tabs={ _map( tabs, ( tab ) => ({ ...tab, content: <AnswersTable tab={ tab.index as string } /> })) }
        />
      ) }
      cardClass={ styles.card }
      title={ getString( 'answersWeightManagerTitle' ) }
      isLoading={ isLoading }
    />
  );
};

export default AnswersManager;
