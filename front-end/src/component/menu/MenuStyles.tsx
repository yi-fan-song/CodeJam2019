import styled from 'styled-components';
import { BaseH1, BaseText } from '@styleConstants/BaseComponents';

export const PageContent = styled.div``;

export const PageContainer = styled.div`
  text-align: center;
  max-width: 320px;
  margin: 0 auto;
`;

export const HeaderTitle = styled(BaseH1)`
  font-weight: 600;
  line-height: 46px;
  margin: 20px 0 10px;
`;

export const HeaderSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderSubtitle = styled(BaseText)`
  font-size: 16px;
  line-height: 24px;
`;

export const MenuContainer = styled.div``;

export const MenuNavigationContainer = styled.div``;
