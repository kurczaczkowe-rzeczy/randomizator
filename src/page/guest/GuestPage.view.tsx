import classNames from 'classnames';

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
}: IGuest ): JSX.Element => (
  /* ToDo use constants instead of hardcoded strings */
  <div className={ classes.guest }>
    <div className={ classes.description }>
      <Card
        cardClass={ classes.baseLine }
        body={ <CreatorDescription content={ creatorName } /> }
      />
      <Card
        id="formName"
        cardClass={ classNames( classes.baseLine, { [ classes.highlightCard ]: isHighlighted }) }
        body={ (
          <FormName content={ (
            <CopyText
              withFlexStart
              text={ formName }
              content={ (
                <TextBox
                  additionalClasses={ classNames( classes.textBox, { [ classes.highlightText ]: isHighlighted }) }
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
    <Card title="FORMULARZ" body={ <Form onSubmit={ onSubmit } additionalFunction={ highlightFormName } /> } />
  </div>
);

export default GuestPageView;
