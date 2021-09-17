import { useHistory } from 'react-router';

import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import prepareLink from 'utils/prepareLink';
import useLocaleString from 'hooks/useLocaleString';

import Card from 'components/card';
import CopyText from 'components/copyText';
import Select from 'components/Select';

import useStyle from './FormChooser.styles';
import { IFormChooser } from './FormChooser.types';

/** Component allows choose current form context and share link to fill them. */
export const FormChooser = ({ link, selectFormsProps }: IFormChooser ): JSX.Element => {
  const styles = useStyle();
  const { push } = useHistory();
  const getString = useLocaleString();

  const onGoToForm = (): void => { push( prepareLink( link )); };

  return (
    <Card
      centerBody={ false }
      body={ (
        <div className={ styles.root }>
          <div className={ styles.selectWrapper }>
            <Select { ...selectFormsProps } />
          </div>
          <div className={ styles.linkWrapper }>
            <div className={ styles.openInNewIconWrapper } title={ getString( 'openFormLink' ) }>
              <OpenInNewIcon classes={{ root: styles.openInNewIcon }} onClick={ onGoToForm } />
            </div>
            <CopyText
              text={ link }
              content={ (
                <p className={ styles.copyText }>
                  { link }
                </p>
              ) }
            />
          </div>
        </div>
      ) }
    />
  );
};

export default FormChooser;
