import { Story, Meta } from '@storybook/react';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Button from '.';
import { IButton } from './Button.types';

export default{
  title: 'components/Button',
  component: Button,
  args: { value: 'Przycisk' },
} as Meta;

const Template: Story<IButton> = ( args ) => <Button { ...args } />;

export const ButtonType = Template.bind({});
ButtonType.args = { type: 'button' };

export const SubmitType = Template.bind({});
SubmitType.args = { type: 'submit' };

export const IconButton = Template.bind({});
IconButton.args = {
  type: 'button',
  variant: 'iconButton',
  icon: <ExitToAppIcon />,
};
