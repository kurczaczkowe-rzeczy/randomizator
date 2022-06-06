import { Story, Meta } from '@storybook/react';

import Component from './UserCreator.view';
import { IUserCreator } from './UserCreator.types';
import { defaultUserValues } from './UserCreator.consts';

export default{
  title: 'components/UserCreator',
  component: Component,
  args: { defaultValues: { ...defaultUserValues }},
} as Meta;

const Template: Story<IUserCreator> = ( args ) => <Component { ...args } />;

export const Empty = Template.bind({});
export const Filled = Template.bind({});

Filled.args = {
  defaultValues: {
    email: 'example@mail.com',
    formName: 'Form',
    nickname: 'Nickname',
    password: 'password',
  },
};
