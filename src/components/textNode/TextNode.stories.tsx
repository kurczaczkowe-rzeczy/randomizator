import { Story, Meta } from '@storybook/react';

import useStyles from 'components/Draw/Draw.styles';

import Component from '.';
import { ITextNode } from './TextNode.types';

export default{
  title: 'components/TextNode',
  component: Component,
} as Meta;

// eslint-disable-next-line react/prop-types
const Template: Story<ITextNode> = ({ classes, ...args }) => {
  const styles = useStyles();

  return <Component { ...args } classes={ classes ? styles[ classes as keyof typeof styles ] : classes } />;
};

export const Default = Template.bind({});
Default.args = {
  value: 'Etykieta',
  classes: '',
};

export const LabelWithClass = Template.bind({});
LabelWithClass.args = {
  value: 'Etykieta z klasą',
  classes: 'label',
};

export const RequiredLabelWithClass = Template.bind({});
RequiredLabelWithClass.args = {
  required: true,
  value: 'Etykieta z klasą',
  classes: 'label',
};

export const InputText = Template.bind({});
InputText.args = {
  type: 'input-text',
  value: 'Wartość udawanego inputa',
  classes: 'input',
};
