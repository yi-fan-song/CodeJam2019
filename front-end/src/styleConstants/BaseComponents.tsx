import styled from 'styled-components';
import { Colors } from '@styleConstants/Colors';
import { NavLink } from 'react-router-dom';

export const BaseText = styled.p`
  font-family: 'Open Sans', sans-serif;
  color: ${Colors.light_gray};
`;

export const BaseH1 = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 34px;
  color: ${Colors.light_gray};
`;

export const BaseLink = styled(NavLink)``;
