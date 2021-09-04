import _times from 'lodash/times';

import { bodyCells } from 'components/TableRow/TableRow.mock';

const cellsGetter = ( id: number ) => [{ id: 'index', children: <span>{ id }</span> }, ...bodyCells ] as const;

const mockData = { rows: _times( 150, ( id ) => ({ id, cells: cellsGetter( id ) })) };

export default mockData;
