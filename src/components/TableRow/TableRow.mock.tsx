import _map from 'lodash/map';

export const bodyCells = _map( Array( 4 ), ( _, id ) => ({ id, children: <span>{ `Komórka ${ id }` }</span> }));

export const headerCells = _map( Array( 4 ),
  ( _, id ) => ({
    id,
    children: <span>{ `Komórka ${ id }` }</span>,
    width: id % 2 === 0 ? 200 : 'calc(50% - 200px)',
  }));
