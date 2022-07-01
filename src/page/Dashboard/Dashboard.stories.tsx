import { Story, Meta } from '@storybook/react';

import { CARDS, PAGES } from 'constans';
import { dispatchDecorator } from 'decorators';
import {
  clearGlobal,
  forceHideLoader,
  showLoader,
} from 'store/actions/globalActions';

import Component from './Dashboard.view';

export default{
  title: 'pages/Dashboard',
  component: Component,
  decorators: [
    dispatchDecorator(( dispatch ) => {
      dispatch( forceHideLoader());
    }, clearGlobal ),
  ],
} as Meta;

const Template: Story = ( args ) => <Component { ...args } />;

export const EmptyAnswers = Template.bind({});
export const LoadingFullPage = Template.bind({});
export const LoadingAnswers = Template.bind({});

LoadingFullPage.decorators = [
  dispatchDecorator(( dispatch ) => {
    setTimeout(() => {
      dispatch( showLoader( PAGES.DASHBOARD ));
    });
  }, clearGlobal ),
];

LoadingAnswers.decorators = [
  dispatchDecorator(( dispatch ) => {
    setTimeout(() => {
      dispatch( showLoader( PAGES.DASHBOARD, CARDS.ANSWERS_TABLE ));
    });
  }, clearGlobal ),
];
