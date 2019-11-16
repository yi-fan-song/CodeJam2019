import React from 'react';
import { connect } from 'react-redux';
import { Menu } from '@component/menu/Menu';
import { PageContent, PageContainer } from '@component/menu/MenuStyles';

interface Props {}

const WithMenuComponent: React.FC = props => {
  return (
    <PageContainer>
      <Menu />
      <PageContent>{props.children}</PageContent>
    </PageContainer>
  );
};

export const WithMenu = connect()(WithMenuComponent);
