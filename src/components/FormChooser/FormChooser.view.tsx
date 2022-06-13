import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import _isEmpty from 'lodash/isEmpty';

import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import prepareLink from 'utils/prepareLink';
import useLocaleString from 'hooks/useLocaleString';
import useTypedSelector from 'hooks/useTypedSelector';
import { APP_NAME_SUFFIX, HOME_PAGE } from 'constans';

import Card from 'components/card';
import CopyText from 'components/copyText';
import Select from 'components/Select';

import useStyle from './FormChooser.styles';
import { IFormChooser } from './FormChooser.types';

/** Component allows to choose current form context and share link to fill them. */
export const FormChooser = ({
  creatorID,
  formID,
  forms,
  onFormSelect,
  defaultFormID,
}: IFormChooser ): JSX.Element => {
  const styles = useStyle();
  const { push } = useHistory();
  const getString = useLocaleString();
  const isRequesting = useTypedSelector(({ firestore: { status: { requesting: { forms }}}}) => !!forms );

  const link = prepareLink( `/${ creatorID }/${ formID }`, HOME_PAGE + APP_NAME_SUFFIX );

  const onGoToForm = (): void => { push( link ); };

  return (
    <Card
      centerBody={ false }
      isLoading={ isRequesting }
      body={ (
        <div className={ styles.root }>
          <div className={ styles.selectWrapper }>
            <Select
              name="forms"
              label={ getString( 'activeNameForm' ) }
              defaultValue={ defaultFormID }
              options={ forms }
              value={ _isEmpty( forms ) ? defaultFormID : formID }
              onItemClick={ onFormSelect }
            />
          </div>
          <div className={ styles.linkWrapper }>
            <Link
              className={ styles.openInNewIconWrapper }
              title={ getString( 'openFormLink' ) }
              to={ link }
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenInNewIcon classes={{ root: styles.openInNewIcon }} onClick={ onGoToForm } />
            </Link>
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
