import { ReactNode, isValidElement } from 'react';
import _isString from 'lodash/isString';
import _isObject from 'lodash/isObject';
import _isArray from 'lodash/isArray';

import { ICard, TitleWithContentAndId } from './Card.types';

const isTitleWithContentAndId = ( title: unknown ): title is TitleWithContentAndId => _isObject( title )
  && 'id' in title
  && 'content' in title;

// ToDo: Create form this function standalone component
export const getTitleContent = ( title: ICard[ 'title' ]): ReactNode => {
  if ( !title ) { return null; }

  if ( _isString( title )) { return <h3>{ title }</h3>; }

  if ( isTitleWithContentAndId( title )) { return <h3 id={ title.id }>{title.content}</h3>; }

  if ( !_isArray( title ) && _isObject( title ) && !isValidElement( title )) { return null; }

  return title;
};
