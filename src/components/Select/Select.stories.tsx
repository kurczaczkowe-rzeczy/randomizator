import { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import Select from '.';
import { ISelect } from './Select.types';
import mockData from './Select.mock';

export default{
  title: 'components/Select',
  component: Select,
  args: { ...mockData },
} as Meta;

/* eslint-disable react/destructuring-assignment */
const Template: Story<ISelect> = ( args ) => {
  const [ value, setValue ] = useState( args.defaultValue );

  const onItemClick: ISelect[ 'onItemClick' ] = ( option ) => {
    args.onItemClick( option );
    setValue( option.id );
  };

  return <Select { ...args } value={ value } onItemClick={ onItemClick } />;
};
/* eslint-enable react/destructuring-assignment */

export const Default = Template.bind({});

export const Empty = Template.bind({});
Empty.args = {
  defaultValue: '',
  value: '',
};

export const Open = Template.bind({});
Open.args = { open: true };
