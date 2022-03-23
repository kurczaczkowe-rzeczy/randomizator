import AnswerListener, { IAnswerListener } from 'components/AnswerListener';
import { IAnswerRow } from './AnswersTable.types';
import { IVirtualizedTable } from 'components/VirtualizedTable';
import { GetString } from 'hooks/types';

export const getColumns = ( getString: GetString, onWeightUpdate: IAnswerListener[ 'onWeightUpdate' ]):
  IVirtualizedTable< IAnswerRow >[ 'columns' ] => [
  {
    label: getString( 'content' ),
    dataKey: 'value',
    width: 0,
    flexGrow: 1,
  },
  {
    label: getString( 'weight' ),
    dataKey: 'weight',
    width: 80,
  },
  {
    label: <AnswerListener onWeightUpdate={ onWeightUpdate } />,
    dataKey: 'edit',
    width: 48,
  },
];
