import { Story, Meta } from '@storybook/react';

import { ReactComponent as Unicorn } from 'assets/unicorn.svg';

import Component from './Modal.view';
import { IModalWithControls } from './Modal.types';
import args from './Modal.mock';

export default{
  title: 'components/Modal',
  component: Component,
  args,
  parameters: { docs: { inlineStories: false, iframeHeight: 800 }},
} as Meta;

const Template: Story<IModalWithControls> = ( args ) => <Component { ...args } />;

const Open = Template.bind({});
const Close = Template.bind({});
const WithAdditionalIcon = Template.bind({});

Close.args = { isModalOpen: false };
WithAdditionalIcon.args = { icon: <Unicorn /> };

export {
  Open,
  Close,
  WithAdditionalIcon,
};
