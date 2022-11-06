import styled from "styled-components";
import { LandingImages } from "../../services/get-images";
import { device } from "../media-queries/media-query";

const LandingImage = () => {
    return ( 
        <DivWrapper>
                <Image />
            <TextWrapper>Welcome Back!</TextWrapper>
            <CheersToWeekend>Cheers to the Weekend</CheersToWeekend>
            
        </DivWrapper>
     );
}
 
export default LandingImage;


const DivWrapper = styled.div`
width: 100%;
`

const Image = styled.img`
    position: absolute;
    width: 95%;
    height: 159px;
    left: 0px;
    top: 121px;
    background-image: url(${LandingImages.mobileLanding});
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;


@media ${device.laptop}{
    position: absolute;
    width: calc(100% - 310px);
    left: 311px;
    top: 105px;
    background-image: url(/images/images/landingImage.svg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

@media ${device.laptopL}{
    position: absolute;
    width: calc(100% - 310px);
    height: 200px;
    left: 311px;
    top: 105px;
    background-image: url(/images/images/landingImage.svg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

@media ${device.desktop}{
    position: absolute;
    width: calc(100% - 310px);
    height: 255px;
    left: 311px;
    top: 105px;
    background-image: url(/images/images/landingImage.svg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

`

const TextWrapper = styled.h2`

    position: absolute;
    width: 155px;
    height: 24px;
    left: 16px;
    top: 299px;
    font-family: 'Bw Modelica';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;


    @media ${device.laptop}{
    width: 230px;
    height: 34px;
    left: 337px;
    top: 306px;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.04em;
    }

    @media ${device.laptopL}{
    width: 230px;
    height: 34px;
    left: 337px;
    top: 346px;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.04em;
    }

    @media ${device.desktop}{
    width: 230px;
    height: 34px;
    left: 337px;
    top: 396px;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.04em;
}
`


const CheersToWeekend = styled.h2`
    position: absolute;
    width: 167px;
    height: 17px;
    left: 15px;
    top: 619px;
    font-family: 'Bw Modelica';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;


@media ${device.laptop}{
    position: absolute;
    width: 356px;
    height: 17px;
    left: 338px;
    top: 619px;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
}


@media ${device.laptopL}{
    position: absolute;
    width: 356px;
    height: 17px;
    left: 338px;
    top: 710px;
}
@media ${device.desktop}{
    position: absolute;
    width: 356px;
    height: 17px;
    left: 338px;
    top: 619px;
}
`