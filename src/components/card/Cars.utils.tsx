import { StringOrNode, TitleWithContentAndId } from 'types';
import { ReactNode } from 'react';

export const getTitleContent = ( title: StringOrNode | TitleWithContentAndId ): ReactNode => {
  if ( title && typeof title === 'string' ) {
    return <h3>{title}</h3>;
  }

  if ( title && typeof title === 'object' && 'id' in title && 'content' in title ) {
    return <h3 id={ title.id }>{title.content}</h3>;
  }

  return title;
};
