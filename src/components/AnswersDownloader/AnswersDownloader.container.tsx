import { useDispatch } from 'react-redux';
import _includes from 'lodash/includes';

import useLocalize from 'hooks/useLocaleString';
import useTypedSelector from 'hooks/useTypedSelector';
import { downloadAnswersCSV } from 'store/actions/answersAction';
import { CARDS } from 'constans';

import Button from 'components/Button';
import Card from 'components/card';

/**
 * Component Allows make backup answers of selected form.
 */
export const AnswersDownloader = (): JSX.Element => {
  const localize = useLocalize();
  const isLoading = useTypedSelector(({ global: { bindToCard }}) => _includes( bindToCard, CARDS.ANSWERS_DOWNLOADER ));
  const dispatch = useDispatch();

  return (
    <Card
      fullWidthBody
      transparent
      isLoading={ isLoading }
      body={ (
        <Button
          label={ localize( 'getAnswers' ) }
          onClick={ () => { dispatch( downloadAnswersCSV()); } }
        />
      ) }
    />
  );
};

export default AnswersDownloader;
