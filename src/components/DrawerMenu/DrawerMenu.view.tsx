import {
  AnimationEvent,
  useEffect,
  useState,
} from 'react';
import classNames from 'classnames';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { includesSearchValues } from 'utils/includesSearchValues';

import { IDrawerMenu } from 'components/DrawerMenu/DrawerMenu.types';
import MenuList from 'components/MenuList';

import useStyles from './DrawerMenu.styles';

let isAfterFirstSwitch = false;
const animationNames = [ 'collapse', 'expand' ];

/**
 * Component provides bar with navigation. It has two state collapsed and expanded.
 */
const DrawerMenu = ({ items }: IDrawerMenu ): JSX.Element => {
  const [ expanded, setExpanded ] = useState( false );
  const [ showItems, setShowItems ] = useState( false );

  useEffect(() => {
    if ( !isAfterFirstSwitch && expanded ) {
      isAfterFirstSwitch = true;
    }
  }, [ expanded ]);

  const collapsed = isAfterFirstSwitch && !expanded;

  const styles = useStyles();
  const rootClasses = classNames( styles.root, {
    [ styles.expand ]: expanded,
    [ styles.collapse ]: collapsed,
  });
  const menuItemsWrapperClasses = classNames( styles.menuItemsWrapper, { [ styles.hideItems ]: !showItems });

  const toggleExpanded = (): void => {
    setExpanded(( prevState ) => !prevState );
    setShowItems( false );
  };
  const handleOnAnimationStart = ( event: AnimationEvent<HTMLDivElement> ): void => {
    if ( !includesSearchValues( animationNames, event.animationName )) {
      return;
    }

    if ( expanded ) {
      const menuItemsWrapper = event.currentTarget.lastElementChild;

      menuItemsWrapper?.removeAttribute( 'style' );
    }
  };
  const handleOnAnimationEnd = ( event: AnimationEvent<HTMLDivElement> ): void => {
    if ( !includesSearchValues( animationNames, event.animationName )) {
      return;
    }

    const {
      firstElementChild: menuButton,
      lastElementChild: menuItemsWrapper,
    } = event.currentTarget;

    menuButton?.classList.remove( styles.disablePointerEvents );

    if ( expanded ) {
      setShowItems( true );
    }
    if ( collapsed ) {
      menuItemsWrapper?.setAttribute( 'style', 'display: none' );
    }
  };

  return (
    <div
      className={ rootClasses }
      onAnimationStart={ handleOnAnimationStart }
      onAnimationEnd={ handleOnAnimationEnd }
    >
      <IconButton
        size="small"
        classes={{ root: styles.iconButton }}
        onClick={ ( event ): void => {
          toggleExpanded();
          event.currentTarget.classList.add( styles.disablePointerEvents );
        } }
      >
        <MenuIcon classes={{ root: styles.menuIcon }} />
      </IconButton>
      <div className={ menuItemsWrapperClasses }>
        <MenuList items={ items } onClose={ toggleExpanded } />
      </div>
    </div>
  );
};

export default DrawerMenu;
export { DrawerMenu };
