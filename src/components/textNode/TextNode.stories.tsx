import { Story, Meta } from '@storybook/react';

import classes from 'components/drawResult/drawResult.module.scss';

import Component from '.';
import { ITextNode } from './TextNode.view';

export default{
  title: 'test/components/TextNodeView',
  component: Component,
} as Meta;

const Template: Story<ITextNode> = ( args ) => <Component { ...args } />;

export const Default = Template.bind({});
Default.args = {
  value: 'Etykieta',
  classes: '',
};

export const LabelWithClass = Template.bind({});
LabelWithClass.args = {
  value: 'Etykieta z klasą',
  classes: classes.label,
};

export const RequiredLabelWithClass = Template.bind({});
RequiredLabelWithClass.args = {
  required: true,
  value: 'Etykieta z klasą',
  classes: classes.label,
};

export const InputText = Template.bind({});
InputText.args = {
  type: 'input-text',
  value: 'Wartość udawanego inputa',
  classes: classes.input,
};
