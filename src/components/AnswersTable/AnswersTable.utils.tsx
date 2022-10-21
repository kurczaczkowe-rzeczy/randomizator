import { IVirtualizedTable } from 'components/VirtualizedTable';
import { Localize } from 'hooks/types';
import { ANSWER_EDIT_ICON_COLUMN_WIDTH, ANSWER_WEIGHT_COLUMN_WIDTH } from 'constans';

import { IAnswerRow } from './AnswersTable.types';

export const getColumns = ( localize: Localize ):
  IVirtualizedTable< IAnswerRow >[ 'columns' ] => [
  {
    label: localize( 'content' ),
    dataKey: 'value',
    width: 0,
    flexGrow: 1,
  },
  {
    label: localize( 'weight' ),
    dataKey: 'weight',
    width: ANSWER_WEIGHT_COLUMN_WIDTH,
  },
  {
    label: null,
    dataKey: 'edit',
    width: ANSWER_EDIT_ICON_COLUMN_WIDTH,
  },
];
