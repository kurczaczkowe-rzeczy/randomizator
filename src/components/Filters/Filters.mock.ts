import { action } from '@storybook/addon-actions';

const mockData = {
  defaultValues: {
    col1: '',
    col2: '',
    col3: '',
    col4: '',
    col5: '',
    col6: '',
    col7: '',
    col8: '',
    col9: '',
  },
  fields: [
    {
      name: 'col1',
      type: 'text,',
    },
    {
      name: 'col2',
      type: 'text,',
    },
    {
      name: 'col3',
      type: 'text,',
    },
    {
      name: 'col4',
      type: 'text,',
    },
    {
      name: 'col5',
      type: 'text,',
    },
    {
      name: 'col6',
      type: 'text,',
    },
    {
      name: 'col7',
      type: 'text,',
    },
    {
      name: 'col8',
      type: 'text,',
    },
    {
      name: 'col9',
      type: 'text,',
    },
  ],
  onSubmit: action( 'onSubmit' ),
};

export default mockData;
