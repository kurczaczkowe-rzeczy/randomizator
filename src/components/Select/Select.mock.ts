import { action } from '@storybook/addon-actions';

const options = [
  {
    id: 'option1',
    name: 'Option 1',
  },
  {
    id: 'option2',
    name: 'Option 2',
  },
  {
    id: 'option3',
    name: 'Option 3',
  },
  {
    id: 'option4',
    name: 'Option 4',
  },
  {
    id: 'option5',
    name: 'Option 5',
  },
  {
    id: 'option6',
    name: 'Option 6',
  },
];

const mockData = {
  label: 'Etykieta',
  name: 'Pole-wyboru',
  defaultValue: 'option2',
  options,
  onItemClick: action( 'onItemClick' ),
};

export default mockData;
