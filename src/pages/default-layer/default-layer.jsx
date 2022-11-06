import React from 'react';
import { Layout} from 'antd';
import HeaderComponent from '../../components/header/header';
import SideBar from '../../components/sidebar/sidebar';
import HomePage from '../home/home';
import styled from "styled-components";
import { device } from '../../components/media-queries/media-query';
import MobileFooter from '../../components/mobile-footer/footer';


const DefaultLayer = () => (
    <Layout>
        <HeaderComponent />
    <Layout>
      <SidebarWrapper>
        <SideBar />
      </SidebarWrapper>
      <HomePage />
    </Layout>
    <MobileFooter/>
  </Layout>
);
export default DefaultLayer;

const SidebarWrapper = styled.div`
display: none;

@media ${device.laptop}{
  display: flex
}
`