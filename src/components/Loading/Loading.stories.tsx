import { Story, Meta } from '@storybook/react';

import classes from './Loading.module.scss';

import Component from '.';
import { ILoading } from './Loading.types';

export default{
  title: 'components/Loading',
  component: Component,
} as Meta;

const Template: Story<ILoading> = ( args ) => <Component { ...args } />;

export const Default = Template.bind({});

export const WithClass = Template.bind({});
WithClass.args = { classes: { root: classes.circleStorybook }};
