import { Layout } from "antd";
import styled from "styled-components";
import LandingImage from "../../components/main-content/landing-image";
import BurnaBoy from "../../components/main-content/musicians/burna-boy";
import WeekendMusic from "../../components/main-content/musicians/weekend";
import { device } from "../../components/media-queries/media-query";

const { Content } = Layout
const HomePage = () => {
    return ( 
        <ContentWrapper>
            <LandingImage />
            <BurnaBoy/>
            <WeekendMusic/>
        </ContentWrapper>
     );
}
 
export default HomePage;

const ContentWrapper = styled.div`
position: relative;
width: 100%;
height: 926px;
background: #000000;

@media ${device.laptop}{
    width: 1920px;
    height: 1080px;
}   
`