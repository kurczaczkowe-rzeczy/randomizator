import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import _every from 'lodash/every';

import MUITableBody from '@material-ui/core/TableBody';
import MUITableHead from '@material-ui/core/TableHead';

import { bodyCells, headerCells } from './TableRow.mock';
import Component, { ITableRow } from '.';

export default{
  title: 'components/TableRow',
  component: Component,
  args: { cells: bodyCells },
} as Meta;

const Template: Story<ITableRow> = ( args ) => {
  // eslint-disable-next-line react/destructuring-assignment
  const TableGroupComponent = _every( args.cells, 'width' ) ? MUITableHead : MUITableBody;

  return (
    <table>
      <TableGroupComponent>
        <Component { ...args } />
      </TableGroupComponent>
    </table>
  );
};

export const BodyRow = Template.bind({});

export const HeaderRow = Template.bind({});
HeaderRow.args = { cells: headerCells };

export const InteractiveRow = Template.bind({});
InteractiveRow.args = { onClick: action( 'onClick' ) };
