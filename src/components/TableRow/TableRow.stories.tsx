import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import _every from 'lodash/every';

import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';

import { bodyCells, headerCells } from './TableRow.mock';
import Component, { ITableRow } from '.';

export default{
  title: 'components/TableRow',
  component: Component,
  args: { cells: bodyCells },
} as Meta;

const Template: Story<ITableRow> = ( args ) => {
  // eslint-disable-next-line react/destructuring-assignment
  const TableComponent = _every( args.cells, 'width' ) ? TableHead : TableBody;

  return (
    <table>
      <TableComponent>
        <Component { ...args } />
      </TableComponent>
    </table>
  );
};

export const BodyRow = Template.bind({});
export const HeaderRow = Template.bind({});
export const InteractiveRow = Template.bind({});

HeaderRow.args = { cells: headerCells };
InteractiveRow.args = { onClick: action( 'onClick' ) };
