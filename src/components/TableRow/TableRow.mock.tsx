import _times from 'lodash/times';

export const bodyCells = _times( 4, ( id ) => ({ id, children: <span>{ `Komórka ${ id + 1 }` }</span> }));

export const headerCells = _times( 4,
  ( id ) => ({
    id,
    children: <span>{ `Komórka ${ id + 1 }` }</span>,
    width: id % 2 === 0 ? 200 : 'calc(50% - 200px)',
  }));
