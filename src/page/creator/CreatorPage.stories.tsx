import { Story, Meta } from '@storybook/react';

import Component from './CreatorPage.view';
import { ICreator } from './CreatorPage.types';
import mockData from './CreatorPage.mock';

export default{
  title: 'components/Select',
  component: Component,
  args: { ...mockData },
} as Meta;

const Template: Story<ICreator> = ( args ) => <Component { ...args } />;

/* ToDo: change this if redux decorator was added or FilesContainer doesn't have connection with redux
   export const Default = Template.bind({}); */
