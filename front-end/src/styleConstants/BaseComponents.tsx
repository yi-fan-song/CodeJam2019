import styled from 'styled-components';
import { Colors } from '@styleConstants/Colors';
import { NavLink } from 'react-router-dom';

export const BaseText = styled.p`
  font-family: 'Open Sans', sans-serif;
  color: ${Colors.pale};
`;

export const BaseH1 = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 34px;
  color: ${Colors.pale};
`;

export const BaseLink = styled(NavLink)``;
