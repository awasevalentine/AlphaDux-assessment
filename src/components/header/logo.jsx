import styled from "styled-components";
import { device } from "../media-queries/media-query";

const LogoComponent = () => {
    const image = '../../../../public/asset/logo/logo.svg';


    return ( 
        <div>
            <ImageWrapper src={image} alt="Logo header"/>
            <LogoHeader title="Hey! Aleem">Hey! Aleem</LogoHeader>
        </div>
     );
}
 
export default LogoComponent;



const ImageWrapper = styled.img`
    position: absolute;
    width: 49px;
    height: 49px;
    left: 23px;
    top: 21px;


    @media ${device.laptop}{
    width: 62px;
    height: 62px;
    left: 31px;
    top: 18px;
    }
`

const LogoHeader = styled.h2`
    display: none;
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

    @media ${device.laptop}{
        display: flex;
    }
`