import classNames from 'classnames';

import BackIcon from '@material-ui/icons/Forward';

import useLocaleString from 'hooks/useLocaleString';

import Card from 'components/card';
import CopyText from 'components/copyText';
import CreatorDescription from 'components/creatorDescription';
import Form from 'components/form';
import FormName from 'components/guestFormDescription';
import Button from 'components/Button';
import TextBox from 'components/textBox';

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

  return (
    <div className={ styles.root }>
      <div className={ styles.descriptor }>
        { isCreator && (
          <Button
            value={ getString( 'goBackToCreator' ) }
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
      />
    </div>
  );
};

export default GuestView;
