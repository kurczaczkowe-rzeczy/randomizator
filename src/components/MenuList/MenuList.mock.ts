import { action } from '@storybook/addon-actions';

const mockData = {
  items: [
    {
      children: 'raz',
      id: 1,
      active: false,
      onClick: action( 'onClick' ),
    },
    {
      children: 'dwa',
      id: 2,
      active: false,
      onClick: action( 'onClick' ),
    },
    {
      children: 'trzy',
      id: 3,
      active: true,
      onClick: action( 'onClick' ),
    },
    {
      children: 'cztery',
      id: 4,
      active: false,
      onClick: action( 'onClick' ),
    },
    {
      children: 'pięć',
      id: 5,
      active: false,
      onClick: action( 'onClick' ),
    },
    {
      children: 'sześć',
      id: 36,
      active: false,
      onClick: action( 'onClick' ),
    },
    {
      children: 'siedem',
      id: 7,
      active: false,
      onClick: action( 'onClick' ),
    },
    {
      children: 'osiem',
      id: 8,
      active: false,
      onClick: action( 'onClick' ),
    },
    {
      children: 'dziewięć',
      id: 9,
      active: false,
      onClick: action( 'onClick' ),
    },
  ],
};

export default mockData;
