import {Layout } from "antd";
import LogoComponent from "./logo";
import HeaderNavArrows from "./header-arrow-nav";
import HeaderSearchBtn from "./header-search-btn";
import styled from "styled-components";
import './header-style.css'
import { device } from "../media-queries/media-query";




const HeaderComponent = () => {
    const { Header } = Layout;

    return ( 
        <Header className="headerWrapper">
            <LogoComponent />
            <SearchNavWrapper>
                <HeaderNavArrows/>
                <HeaderSearchBtn/>
            </SearchNavWrapper>
        </Header>
     );
}
 
export default HeaderComponent;

const SearchNavWrapper = styled.div`
display: none;

@media ${device.laptop}{
    display: flex
}
`