import React from 'react';
import { MenuHeader } from '@component/menu/MenuHeader';
import { MenuContainer } from '@component/menu/MenuStyles';
import { MenuNavigation } from '@component/menu/MenuNavigation';

interface Props {}

const MenuComponent: React.FC = (props: Props) => {
  return (
    <MenuContainer>
      <MenuHeader />
      <MenuNavigation />
    </MenuContainer>
  );
};

export const Menu = MenuComponent;
