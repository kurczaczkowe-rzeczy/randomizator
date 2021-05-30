import { Story, Meta } from '@storybook/react';

import Component from './ErrorPage.view';
import { IErrors } from './ErrorPage.types';

export default{
  title: 'pages/ErrorPage',
  component: Component,
  args: {
    errors: [
      <p key={ 1 }>Nie istnieje taki formularz tego użytkownika</p>,
      <p key={ 2 }>Nie istnieje taki użytkownik</p>,
      <p key={ 3 }>Wystąpił nieoczekiwany błąd</p>,
    ],
  },
} as Meta;

const Template: Story<IErrors> = ( args ) => <Component { ...args } />;

export const Default = Template.bind({});
