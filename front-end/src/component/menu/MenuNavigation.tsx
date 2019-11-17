import React from 'react';
import { MenuNavigationContainer, StyledNavLink } from '@component/menu/MenuStyles';

interface Props {}

const MenuNavigationComponent: React.FC = (props: Props) => {
  return (
    <MenuNavigationContainer>
      <StyledNavLink to={'/about'}>About</StyledNavLink>
      <StyledNavLink to={'/list'}>List</StyledNavLink>
      <StyledNavLink to={'/example'}>Example</StyledNavLink>
    </MenuNavigationContainer>
  );
};

export const MenuNavigation = MenuNavigationComponent;
