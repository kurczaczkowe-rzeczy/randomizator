import React, { useEffect } from 'react';
import {
  FormProvider,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import _isEmpty from 'lodash/isEmpty';
import _differenceBy from 'lodash/differenceBy';

import AnswerListener from 'components/AnswerListener';
import AnswerRow from 'components/AnswerRow';
import VirtualizedTable from 'components/VirtualizedTable';
import useLocalize from 'hooks/useLocalize';

import useStyle from './AnswersTable.styles';
import { IAnswersTable, IAnswerRow } from './AnswersTable.types';
import { getColumns } from './AnswersTable.utils';

/** Component display table with answers and allows to manage their weights. */
export const AnswersTable = ({
  rows,
  onLoadMoreRows,
  onWeightUpdate,
  shouldReset = false,
}: IAnswersTable ): JSX.Element => {
  const styles = useStyle();
  const localize = useLocalize();
  const methods = useForm({ defaultValues: { answers: rows }});
  const { fields, append } = useFieldArray({
    control: methods.control,
    name: 'answers',
    keyName: '_id',
  });

  const columns = getColumns( localize );

  useEffect(() => {
    if ( _isEmpty( fields ) || _differenceBy(
      rows,
      fields,
      'id',
    ).length > 0 ) {
      append( rows );
    }
  }, [ append, rows ]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if ( shouldReset ) {
      methods.reset();
    }
  }, [ shouldReset, methods ]);

  return (
    <form className={ styles.tableWrapper }>
      <FormProvider { ...methods }>
        <VirtualizedTable< IAnswerRow >
          rows={ fields }
          columns={ columns }
          onLoadMoreRows={ onLoadMoreRows }
          rowRenderer={ ({ index, ...params }) => <AnswerRow answerIndex={ index } { ...params } /> }
          maxRows={ 10000 }
        />
      </FormProvider>
      <AnswerListener onWeightUpdate={ onWeightUpdate } />
    </form>
  );
};

export default AnswersTable;

