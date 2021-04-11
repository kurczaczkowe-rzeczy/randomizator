import { Story, Meta } from '@storybook/react';

import Form from './Form.view';
import { IForm } from './Form.types';
import { action } from '@storybook/addon-actions';

export default{
  title: 'components/Form',
  component: Form,
} as Meta;

const Template: Story<IForm> = ( args ) => <Form { ...args } />;

export const Default = Template.bind({});
Default.args = {
  preview: false,
  additionalFunction: action( 'additionalFunction' ),
  onSubmit: action( 'onSubmit' ),
};

