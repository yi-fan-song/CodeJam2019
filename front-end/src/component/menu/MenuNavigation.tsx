import React from 'react';
import { MenuNavigationContainer } from '@component/menu/MenuStyles';

interface Props {}

const MenuNavigationComponent: React.FC = (props: Props) => {
  return (
    <MenuNavigationContainer>
      <a>wat</a>
    </MenuNavigationContainer>
  );
};

export const MenuNavigation = MenuNavigationComponent;
