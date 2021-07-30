import { Story, Meta } from '@storybook/react';

import Component, { ICard } from '.';

export default{
  title: 'components/Card',
  component: Component,
  args: { body: <div><p>Domyślny widok</p></div> },
} as Meta;

const Template: Story<ICard> = ( args ) => <Component { ...args } />;

const Default = Template.bind({});
const WithTitle = Template.bind({});
const WithTitleAsObject = Template.bind({});
const WithId = Template.bind({});
const WithClassPassedFromUp = Template.bind({});
const WithLoadingState = Template.bind({});

WithTitle.args = {
  title: 'Przykładowy tytuł',
  body: 'Z tytułem',
};
WithTitleAsObject.args = {
  title: { id: 'modalTitle', content: 'Przykładowy tytuł' },
  body: 'Z tytułem, który jest obiektem zawierającym id i content',
};
WithId.args = {
  id: 'Identyfikator',
  body: 'Identyfikator może zostać wykorzystany do zanimowania komponentu.' +
    ' Przykład na stronie gościa a dokładnie to animowany jest w ten sposób.',
};
WithClassPassedFromUp.args = {
  cardClass: 'className',
  body: 'Z klasą. Do cardClass przekazujesz klasę z pliku *.styles. Przykład w kontrolkach.',
};
WithLoadingState.args = {
  body: 'Z widocznym loaderem',
  isLoading: true,
};

export {
  Default,
  WithTitle,
  WithTitleAsObject,
  WithId,
  WithClassPassedFromUp,
  WithLoadingState,
};
