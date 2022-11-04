import { Layout } from "antd";
import styled from "styled-components";
import LandingImage from "../../components/main-content/landing-image";
import BurnaBoy from "../../components/main-content/musicians/burna-boy";

const { Content } = Layout
const HomePage = () => {
    return ( 
        <Content style={mainWrapper}>
            <LandingImage />
            <BurnaBoy/>
        </Content>
     );
}
 
export default HomePage;

const ContentWrapper = styled.div`
    boxSizing: border-box;
    position: absolute;
    width: 1593px;
    height: 1002px;
    left: 305px;
    top: 97px;
    border: 1px solid #0F0F0F
`

const mainWrapper = {

    position: 'relative',
    width: '1920px',
    height: '1080px',
    background: '#000000'
}