import {
  useState,
  FocusEvent,
  TransitionEvent,
} from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import _map from 'lodash/map';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import useLocaleString from 'hooks/useLocaleString';

import Button from 'components/Button';
import Label from 'components/form/components/label';
import TextInput from 'components/form/components/textInput';

import useStyle from './Filters.styles';
import { IFilters } from './Filters.types';

/**
 * Component provides user with a set of fields with which to filter
 * the collection associated with these fields.
 */
export const Filters = ({
  defaultValues,
  fields,
  columnOrder = false,
  onSubmit,
}: IFilters ): JSX.Element => {
  const rowOrder = !columnOrder;
  const styles = useStyle();
  // ToDo: issue #190
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { handleSubmit, register } = useForm<IFilters[ 'defaultValues' ]>({ defaultValues });
  const [ show, setShow ] = useState( false );
  const getString = useLocaleString();

  const filterChevronRootClasses = classNames( styles.filterChevron, { [ styles.filterChevronRotate ]: show });
  const fieldsWrapperClasses = classNames( styles.fieldsWrapper, {
    [ styles.expand ]: show,
    [ styles.rowOrder ]: rowOrder,
    [ styles.columnOrder ]: columnOrder,
  });

  const onToggleVisibility = (): void => { setShow(( currentState ) => !currentState ); };

  const onTransitionEnd = ( event: TransitionEvent<HTMLDivElement> ): void => {
    const parent = event.currentTarget.parentElement;

    parent?.setAttribute( 'style', `overflowY: ${ show ? 'auto' : 'hidden' }` );
  };

  return (
    <div className={ styles.root }>
      <div className={ styles.filterToggle }>
        <Button
          className={ styles.filterButton }
          variant="textIconButton"
          icon={ <KeyboardArrowUpIcon classes={{ root: filterChevronRootClasses }} /> }
          onClick={ onToggleVisibility }
          value={ getString( 'filter' ) }
        />
      </div>
      <form className={ styles.filterForm } onSubmit={ handleSubmit( onSubmit ) }>
        <div className={ fieldsWrapperClasses } onTransitionEnd={ onTransitionEnd }>
          { _map( fields, ({ name, type }) => {
            const registeredProps = register( name );

            return (
              <div>
                <Label content={ name } />
                <TextInput
                  type={ type }
                  { ...register( name ) }
                  onBlur={ ( event: FocusEvent< HTMLInputElement > ) => {
                    handleSubmit( onSubmit )();
                    registeredProps.onBlur( event );
                  } }
                />
              </div>
            );
          }) }
        </div>
        <Button value="" type="submit" className={ styles.hiddenButton } />
      </form>
    </div>
  );
};

export default Filters;
