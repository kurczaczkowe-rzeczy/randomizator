import { action } from '@storybook/addon-actions';

const options = [
  {
    id: '1',
    name: 'Opcja 1',
  },
  {
    id: '2',
    name: 'Opcja 2',
  },
  {
    id: '3',
    name: 'Opcja 3',
  },
  {
    id: '4',
    name: 'Opcja 4',
  },
  {
    id: '5',
    name: 'Opcja 5',
  },
  {
    id: '6',
    name: 'Opcja 6',
  },
  {
    id: '7',
    name: 'Opcja 7',
  },
  {
    id: '8',
    name: 'Opcja 8',
  },
  {
    id: '9',
    name: 'Opcja 9',
  },
  {
    id: '10',
    name: 'Opcja 10',
  },
  {
    id: '11',
    name: 'Opcja 11',
  },
  {
    id: '12',
    name: 'Opcja 12',
  },
  {
    id: '13',
    name: 'Opcja 13',
  },
  {
    id: '14',
    name: 'Opcja 14',
  },
  {
    id: '15',
    name: 'Opcja 15',
  },
  {
    id: '16',
    name: 'Opcja 16',
  },
  {
    id: '17',
    name: 'Opcja 17',
  },
  {
    id: '18',
    name: 'Opcja 18',
  },
  {
    id: '19',
    name: 'Opcja 19',
  },
  {
    id: '20',
    name: 'Opcja 20',
  },
  {
    id: '21',
    name: 'Opcja 21',
  },
  {
    id: '22',
    name: 'Opcja 22',
  },
  {
    id: '23',
    name: 'Opcja 23',
  },
  {
    id: '24',
    name: 'Opcja 24',
  },
  {
    id: '25',
    name: 'Opcja 25',
  },
  {
    id: '26',
    name: 'Opcja 26',
  },
  {
    id: '27',
    name: 'Opcja 27',
  },
  {
    id: '28',
    name: 'Opcja 28',
  },
  {
    id: '29',
    name: 'Opcja 29',
  },
  {
    id: '30',
    name: 'Opcja 30',
  },
  {
    id: '31',
    name: 'Opcja 31',
  },
  {
    id: '32',
    name: 'Opcja 32',
  },
  {
    id: '33',
    name: 'Opcja 33',
  },
  {
    id: '34',
    name: 'Opcja 34',
  },
  {
    id: '35',
    name: 'Opcja 35',
  },
  {
    id: '36',
    name: 'Opcja 36',
  },
  {
    id: '37',
    name: 'Opcja 37',
  },
  {
    id: '38',
    name: 'Opcja 38',
  },
  {
    id: '39',
    name: 'Opcja 39',
  },
  {
    id: '40',
    name: 'Opcja 40',
  },
  {
    id: '41',
    name: 'Opcja 41',
  },
  {
    id: '42',
    name: 'Opcja 42',
  },
  {
    id: '43',
    name: 'Opcja 43',
  },
  {
    id: '44',
    name: 'Opcja 44',
  },
  {
    id: '45',
    name: 'Opcja 45',
  },
  {
    id: '46',
    name: 'Opcja 46',
  },
  {
    id: '47',
    name: 'Opcja 47',
  },
  {
    id: '48',
    name: 'Opcja 48',
  },
  {
    id: '49',
    name: 'Opcja 49',
  },
  {
    id: '50',
    name: 'Opcja 50',
  },
];

const mockData = {
  answersCounter: 15,
  link: 'link/to/form',
  selectFormsProps: {
    defaultValue: '1',
    options,
    name: 'forms',
    label: 'Nazwa aktywnego formularza',
    value: '1',
    onItemClick: action( 'onItemClick' ),
  },
  fileContainerProps: {
    acceptedFileNames: [],
    onDropAccepted: action( 'onDropAccepted' ),
    onDropRejected: action( 'onDropRejected' ),
    onRemove: action( 'onRemove' ),
    onSend: action( 'onSend' ),
  },
};

export default mockData;
