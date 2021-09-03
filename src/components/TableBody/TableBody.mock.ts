import _times from 'lodash/times';

import { bodyCells } from 'components/TableRow/TableRow.mock';

const mockData = { rows: _times( 600, ( id ) => ({ id, cells: bodyCells })) };

export default mockData;
