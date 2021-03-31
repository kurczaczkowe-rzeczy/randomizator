import classNames from 'classnames';

import Card from 'components/card/Card.view';
import CopyText from 'components/copyText';
import CreatorDescription from 'components/creatorDescription/CreatorDescription.view';
import Form from 'components/form';
import FormName from 'components/guestFormDescription/FormName.view';
import TextBox from 'components/textBox/TextBox.view';

import { IGuest } from 'page/guest/GuestPage.types';

import classes from './guestPage.module.scss';

const GuestPageView = ({
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
