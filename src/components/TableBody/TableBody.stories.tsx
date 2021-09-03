import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import MUITable from '@material-ui/core/Table';
import MUITableContainer from '@material-ui/core/TableContainer';
import MUIPaper from '@material-ui/core/Paper';

import mockData from './TableBody.mock';

import Component, { ITableBody } from '.';

export default{
  title: 'components/TableBody',
  component: Component,
  args: mockData,
} as Meta;

const Template: Story<ITableBody> = ( args ) => (
  <MUITableContainer component={ MUIPaper } style={{ backgroundColor: '#222' }}>
    <MUITable>
      <Component { ...args } />
    </MUITable>
  </MUITableContainer>
);

export const noninteractive = Template.bind({});

export const interactive = Template.bind({});
interactive.args = { onClick: action( 'onClick' ) };
