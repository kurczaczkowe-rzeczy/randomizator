import { Story, Meta } from '@storybook/react';

import MUITableBody from '@material-ui/core/TableBody';
import MUITableHead from '@material-ui/core/TableHead';

import Component, { ITableCell } from '.';

export default{
  title: 'components/TableCell',
  component: Component,
  args: { children: <span>Treść</span> },
} as Meta;

const Template: Story<ITableCell> = ( args ) => {
  // eslint-disable-next-line react/destructuring-assignment
  const TableGroupComponent = args?.width ? MUITableHead : MUITableBody;

  return (
    <table>
      <TableGroupComponent>
        <Component { ...args } />
      </TableGroupComponent>
    </table>
  );
};

export const Default = Template.bind({});
export const HeaderCell = Template.bind({});

HeaderCell.args = { width: 300 };
