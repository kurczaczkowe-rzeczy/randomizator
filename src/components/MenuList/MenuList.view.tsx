import { matchPath, useHistory } from 'react-router';
import _map from 'lodash/map';

import MenuItem from 'components/MenuItem';

import { IMenuList } from './MenuList.types';

/**
 * Component controls menu elements.
 */
const MenuList = ({ items, onClose }: IMenuList ): JSX.Element => {
  const history = useHistory();

  return (
    <>
      { _map( items, ({
        path,
        id,
        children,
      }) => (
        <MenuItem
          onClick={ (): void => {
            onClose();
            history.push( path );
          } }
          active={ Boolean( matchPath( history.location.pathname, { path, exact: true })?.isExact ) }
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
