import classNames from 'classnames';
import _includes from 'lodash/includes';

import BackIcon from '@material-ui/icons/Forward';

import useLocaleString from 'hooks/useLocaleString';
import useTypedSelector from 'hooks/useTypedSelector';

import Card from 'components/card';
import CopyText from 'components/copyText';
import CreatorDescription from 'components/creatorDescription';
import Form from 'components/form';
import FormName from 'components/guestFormDescription';
import Button from 'components/Button';
import TextBox from 'components/textBox';
import { CARDS } from 'constans';

import { IGuest } from './Guest.types';
import useStyles from './Guest.styles';

/**
 * Page allows user to send data for creator.
 */
export const GuestView = ({
  creatorName,
  formName = '',
  onSubmit,
  isHighlighted,
  highlightFormName,
  onBackToCreator,
  isCreator,
}: IGuest ): JSX.Element => {
  const styles = useStyles();
  const getString = useLocaleString();

  const isLoading = useTypedSelector(({ global: { bindToCard }}) => _includes( bindToCard, CARDS.GUEST_FORM ));

  return (
    <div className={ styles.root }>
      <div className={ styles.descriptor }>
        { isCreator && (
          <Button
            value={ getString( 'goBackToManagement' ) }
            icon={ <BackIcon classes={{ root: styles.backIcon }} /> }
            onClick={ onBackToCreator }
            variant="iconButton"
          />
        ) }
        <Card
          cardClass={ styles.baseLine }
          centerBody={ false }
          body={ <CreatorDescription content={ creatorName } /> }
        />
        <Card
          id="formName"
          cardClass={ classNames( styles.baseLine, { [ styles.highlightCard ]: isHighlighted }) }
          centerBody={ false }
          body={ (
            <FormName content={ (
              <CopyText
                withFlexStart
                text={ formName }
                content={ (
                  <TextBox
                    additionalClasses={ classNames( styles.textBox, { [ styles.highlightText ]: isHighlighted }) }
                  >
                    { formName }
                  </TextBox>
                ) }
              />
            ) }
            />
          ) }
        />
      </div>
      <Card
        title={ (
          <>
            <h3>{ getString( 'form' ).toUpperCase()}</h3>
            <p>
              { getString( 'formOneFieldRequired' )}
            </p>
          </>
        ) }
        body={ <Form onSubmit={ onSubmit } additionalFunction={ highlightFormName } /> }
        isLoading={ isLoading }
      />
    </div>
  );
};

export default GuestView;
