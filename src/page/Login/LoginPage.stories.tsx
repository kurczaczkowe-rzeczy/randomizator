import { Story, Meta } from '@storybook/react';

import Component from './LoginPage.view';
import { ILogin } from './LoginPage.types';

export default{
  title: 'pages/LoginPage',
  component: Component,
} as Meta;

const Template: Story<ILogin> = ( args ) => <Component { ...args } />;

const Default = Template.bind({});
const WithError = Template.bind({});

WithError.args = { authError: 'Wystąpił błąd podczas logowania.' };

export {
  Default,
  WithError,
};
