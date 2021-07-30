import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Component from './Dashboard.view';
import { IDashboard } from '.';

const userCreatorProps = {
  defaultValues: {
    email: '',
    nickname: '',
    password: '',
    formName: '',
  },
  onReset: action( 'onReset' ),
  onSubmit: action( 'onSubmit' ),
  isLoading: false,
};

export default{
  title: 'pages/Dashboard',
  component: Component,
  args: { userCreatorProps },
} as Meta;

const Template: Story<IDashboard> = ( args ) => <Component { ...args } />;

export const Empty = Template.bind({});
export const Filled = Template.bind({});
export const Loading = Template.bind({});

Filled.args = {
  userCreatorProps: {
    ...userCreatorProps,
    defaultValues: {
      email: 'example@mail.com',
      formName: 'Form',
      nickname: 'Nickname',
      password: 'password',
    },
  },
};
Loading.args = {
  userCreatorProps: {
    ...userCreatorProps,
    defaultValues: {
      email: 'example@mail.com',
      formName: 'Form',
      nickname: 'Nickname',
      password: 'password',
    },
    isLoading: true,
  },
};
