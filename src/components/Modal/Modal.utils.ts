import classNames from 'classnames';

import { classesOverrides } from './Modal.types';

const getClassesWithOverrides: classesOverrides = ({
  styles,
  overrides,
  withIcon,
}) => {
  const contentWrapper = classNames(
    styles.contentWrapper,
    { [ styles.withIcon ]: withIcon },
    overrides?.content,
  );
  const iconWrapper = classNames( styles.iconWrapper, overrides?.icon );
  const titleWrapper = classNames( styles.titleWrapper, overrides?.title );
  const bodyWrapper = classNames( styles.bodyWrapper, overrides?.body );

  return ({
    ...styles,
    contentWrapper,
    iconWrapper,
    titleWrapper,
    bodyWrapper,
  });
};

export { getClassesWithOverrides };
