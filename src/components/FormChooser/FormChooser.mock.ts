import selectMockData from 'components/Select/Select.mock';

const mockData = {
  creatorID: 'creatorID',
  formID: selectMockData.defaultValue,
  forms: selectMockData.options,
  onFormSelect: selectMockData.onItemClick,
  defaultFormID: selectMockData.defaultValue,
};

export default mockData;
