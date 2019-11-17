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
      <img src="./images.png" style={{position: 'absolute', top: '0', left: '0', width: '102px', height: '102px'}}/>
    </PageContainer>
  );
};

export const WithMenu = connect()(WithMenuComponent);
