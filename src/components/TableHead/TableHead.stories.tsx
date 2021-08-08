import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import MUITable from '@material-ui/core/Table';
import MUITableContainer from '@material-ui/core/TableContainer';
import MUIPaper from '@material-ui/core/Paper';

import { headerCells as cells } from 'components/TableRow/TableRow.mock';

import Component, { TableHeadProps } from '.';

export default{
  title: 'components/TableHead',
  component: Component,
  args: { cells },
} as Meta;

const Template: Story<TableHeadProps> = ( args ) => (
  <MUITableContainer component={ MUIPaper }>
    <MUITable>
      <Component { ...args } />
    </MUITable>
  </MUITableContainer>
);

export const noninteractive = Template.bind({});
export const interactive = Template.bind({});

interactive.args = { onClick: action( 'onClick' ) };
