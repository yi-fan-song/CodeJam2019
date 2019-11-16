import React from 'react';
import { HeaderTitle, HeaderSubtitleContainer, HeaderSubtitle } from '@component/menu/MenuStyles';
import { NavLink } from 'react-router-dom';

interface Props {}

const MenuHeaderComponent: React.FC = (props: Props) => {
  return (
    <header>
      <HeaderTitle>Title</HeaderTitle>
      <HeaderSubtitleContainer>
        <HeaderSubtitle>Okay</HeaderSubtitle>
        <HeaderSubtitle>Okay 2</HeaderSubtitle>
      </HeaderSubtitleContainer>
      <NavLink to={'/'}>dashboard</NavLink>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/signup'}>Signup</NavLink>
    </header>
  );
};

export const MenuHeader = MenuHeaderComponent;
