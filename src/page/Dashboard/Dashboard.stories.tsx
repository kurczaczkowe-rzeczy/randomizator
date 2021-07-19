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
  onSubmit: action( 'onSubmit' ),
};

export default{
  title: 'pages/Dashboard',
  component: Component,
  args: { userCreatorProps },
} as Meta;

const Template: Story<IDashboard> = ( args ) => <Component { ...args } />;

export const EmptyUserCreator = Template.bind({});
export const FilledUserCreator = Template.bind({});

FilledUserCreator.args = {
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
