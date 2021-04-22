import { Story, Meta } from '@storybook/react';

import Select from '.';
import { ISelect } from './Select.types';
import mockData from './Select.mock';

export default{
  title: 'components/Select',
  component: Select,
  args: { ...mockData },
} as Meta;

const Template: Story<ISelect> = ( args ) => <Select { ...args } />;

export const Default = Template.bind({});
