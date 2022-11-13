import { action } from '@storybook/addon-actions';

const mockData = {
  fileName: 'plik.csv',
  onDropAccepted: action( 'onDropAccepted' ),
  onDropRejected: action( 'onDropRejected' ),
  onRemove: action( 'onRemove' ),
  onSend: action( 'onSend' ),
};

export default mockData;
