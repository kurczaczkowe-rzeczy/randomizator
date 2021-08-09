import _map from 'lodash/map';

import { bodyCells } from 'components/TableRow/TableRow.mock';

const mockData = { rows: _map( Array( 10 ), ( _, id ) => ({ id, cells: bodyCells })) };

export default mockData;
