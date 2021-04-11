import { Story, Meta } from '@storybook/react';

import Component from '.';
import { ILink } from './Link.types';

export default{
  title: 'components/Link',
  component: Component,
  args: {
    label: 'Fajny link',
    href: '#',
  },
} as Meta;

const Template: Story<ILink> = ( args ) => <Component { ...args } />;

const Default = Template.bind({});
const WithTitle = Template.bind({});

WithTitle.args = { title: 'Tytuł fajnego linku' };

export { Default, WithTitle };

