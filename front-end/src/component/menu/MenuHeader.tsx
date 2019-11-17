import React from 'react';
import { HeaderTitle, HeaderSubtitleContainer, HeaderSubtitle } from '@component/menu/MenuStyles';
import { NavLink } from 'react-router-dom';

interface Props {}

const MenuHeaderComponent: React.FC = (props: Props) => {
  return (
    <header>
      <HeaderTitle>Code Jam 2019</HeaderTitle>
      <HeaderSubtitleContainer>
        <HeaderSubtitle>Your Fridge List</HeaderSubtitle>
      </HeaderSubtitleContainer>
    </header>
  );
};

export const MenuHeader = MenuHeaderComponent;
