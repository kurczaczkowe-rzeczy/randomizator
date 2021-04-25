import classNames from 'classnames';

import useLocaleString from 'hooks/useLocaleString';

import Card from 'components/card';
import CopyText from 'components/copyText';
import CreatorDescription from 'components/creatorDescription';
import Form from 'components/form';
import FormName from 'components/guestFormDescription';
import TextBox from 'components/textBox';

import { IGuest } from './GuestPage.types';

import classes from './guestPage.module.scss';

export const GuestPageView = ({
  creatorName,
  formName = '',
  onSubmit,
  isHighlighted,
  highlightFormName,
}: IGuest ): JSX.Element => {
  const getString = useLocaleString();

  return (
    <div className={ classes.guest }>
      <div className={ classes.descriptor }>
        <Card
          cardClass={ classes.baseLine }
          centerBody={ false }
          body={ <CreatorDescription content={ creatorName } /> }
        />
        <Card
          id="formName"
          cardClass={ classNames( classes.baseLine, { [ classes.highlightCard ]: isHighlighted }) }
          centerBody={ false }
          body={ (
            <FormName content={ (
              <CopyText
                withFlexStart
                text={ formName }
                content={ (
                  <TextBox
                    additionalClasses={ classNames( classes.textBox, { [ classes.highlightText ]: isHighlighted }) }
                  >
                    {formName}
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
            <h3>{getString( 'form' ).toUpperCase()}</h3>
            <p>
              {getString( 'formOneFieldRequired' )}
            </p>
          </>
        ) }
        body={ <Form onSubmit={ onSubmit } additionalFunction={ highlightFormName } /> }
      />
    </div>
  );
};

export default GuestPageView;
