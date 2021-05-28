import { useState } from 'react';
import _find from 'lodash/find';
import _map from 'lodash/map';

import MenuItem from 'components/MenuItem';
import { IMenuItem } from 'components/MenuItem/MenuItem.types';

import { IMenuList } from './MenuList.types';

/**
 * Component controls menu elements.
 */
const MenuList = ({ items }: IMenuList ): JSX.Element => {
  const [ menuItems, setMenuItems ] = useState( items );

  const handleOnClickMenuItem = ( id: IMenuItem[ 'id' ]): void => {
    const newItems = _map( items, ( item ) => ({
      ...item,
      active: item.id === id,
    }));
    const clickedItem = _find( newItems, { id });

    setMenuItems( newItems );
    clickedItem?.onClick();
  };

  return (
    <>
      { _map( menuItems, ({
        active,
        id,
        children,
      }) => (
        <MenuItem
          onClick={ (): void => handleOnClickMenuItem( id ) }
          active={ active }
          key={ id }
        >
          { children }
        </MenuItem>
      ))}
    </>
  );
};

export default MenuList;
export { MenuList };
