import _map from 'lodash/map';

import { bodyCells } from 'components/TableRow/TableRow.mock';

const mockData = { rows: _map( Array( 600 ), ( _, id ) => ({ id, cells: bodyCells })) };

export default mockData;
