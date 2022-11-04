import styled from "styled-components";
import BurnaBoy from "./musicians/burna-boy";

const LandingImage = () => {
    return ( 
        <DivWrapper>
            <Image src="../../../public/asset/images/landingImage.svg" alt="Landing Image" />
            <TextWrapper>Welcome Back!</TextWrapper>
            {/* <BurnaBoy/> */}
        </DivWrapper>
     );
}
 
export default LandingImage;


const DivWrapper = styled.div`
width: 100%;
`

const Image = styled.img`
position: absolute;
width: 1581px;
height: 255px;
left: 311px;
top: 105px;
`

const TextWrapper = styled.h2`
position: absolute;
width: 230px;
height: 34px;
left: 337px;
top: 396px;
font-family: 'Bw Modelica';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 34px;
letter-spacing: 0.04em;
color: #FFFFFF;
`