import { IVirtualizedTable } from 'components/VirtualizedTable';
import { GetString } from 'hooks/types';
import { ANSWER_EDIT_ICON_COLUMN_WIDTH, ANSWER_WEIGHT_COLUMN_WIDTH } from 'constans';

import { IAnswerRow } from './AnswersTable.types';

export const getColumns = ( getString: GetString ):
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
    width: ANSWER_WEIGHT_COLUMN_WIDTH,
  },
  {
    label: null,
    dataKey: 'edit',
    width: ANSWER_EDIT_ICON_COLUMN_WIDTH,
  },
];
