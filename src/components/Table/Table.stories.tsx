import { Story, Meta } from '@storybook/react';

import bodyMock from 'components/TableBody/TableBody.mock';
import { headerCells } from 'components/TableRow/TableRow.mock';

import Component, { ITable } from '.';

export default{
  title: 'components/Table',
  component: Component,
  args: {
    body: bodyMock.rows,
    head: headerCells,
  },
} as Meta;

const Template: Story<ITable> = ( args ) => <Component { ...args } />;

export const Default = Template.bind({});
