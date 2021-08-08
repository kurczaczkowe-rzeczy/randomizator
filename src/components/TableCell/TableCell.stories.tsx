import { Story, Meta } from '@storybook/react';

import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';

import Component, { ITableCell } from '.';

export default{
  title: 'components/TableCell',
  component: Component,
  args: { children: <span>Treść</span> },
} as Meta;

const Template: Story<ITableCell> = ( args ) => {
  // eslint-disable-next-line react/destructuring-assignment
  const TableComponent = args?.width ? TableHead : TableBody;

  return (
    <table>
      <TableComponent>
        <Component { ...args } />
      </TableComponent>
    </table>
  );
};

export const Default = Template.bind({});
export const HeaderCell = Template.bind({});

HeaderCell.args = { width: 300 };
