import styled from "styled-components";

const LogoComponent = () => {
    const image = '../../../../public/asset/logo/logo.svg';


    return ( 
        <DivWrapper>
                <ImageWrapper src={image} alt="Logo header"/>
                <LogoHeader title="Hey! Aleem">Hey! Aleem</LogoHeader>
        </DivWrapper>
     );
}
 
export default LogoComponent;


const DivWrapper = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 295px;
    height: 97px;
    left: 0px;
    top: 0px;
    background: #0F0F0F;
`

const ImageWrapper = styled.img`
    position: absolute;
    width: 62px;
    height: 62px;
    left: 31px;
    top: 18px;
`

const LogoHeader = styled.h2`
position: absolute;
height: 19px;
width: 92px;
left: 114px;
top: 39px;
border-radius: nullpx;
font-family: 'Bw Modelica';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #D9D9D9;
`