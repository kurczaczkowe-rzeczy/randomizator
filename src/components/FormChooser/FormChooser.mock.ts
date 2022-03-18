import selectMockData from 'components/Select/Select.mock';

const mockData = {
  creatorID: 'creatorID',
  formID: 'formID',
  forms: selectMockData.options,
  onFormSelect: selectMockData.onItemClick,
  defaultFormID: selectMockData.defaultValue,
};

export default mockData;
