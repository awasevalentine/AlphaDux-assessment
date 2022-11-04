import styled from "styled-components";
import { musiciansImages } from "../../../services/musicians-images";

const BurnaBoy = () => {
    return ( 

        <DivWrapper>
            {
                musiciansImages.map((details)=>(
                    <SecondContainer>
                        <ImageWrapper src={details.image}  alt={details.alt} />
                        <TextWrapper>
                            <TextContent>
                                <Title>{details.title}</Title>
                                <MusicDescription>{details.description}</MusicDescription>
                            </TextContent>
                        </TextWrapper>
                    </SecondContainer>
                ))
            }
        </DivWrapper>
     );
}
 
export default BurnaBoy;

const DivWrapper = styled.div`
position: absolute;
width: 226.38px;
height: 285.01px;
left: 337px;
top: 482px;
display: flex;
flex-direction: row;
`

const SecondContainer = styled.div`
margin: 10px;
width: 100%;
`


const ImageWrapper = styled.img`
width: 226.38px;
height: 285.01px;
left: 337px;
top: 482px;
// margin: 10px
`

const TextWrapper = styled.div`
position: absolute;
width: 225.57px;
height: 74.92px;
// left: 337.81px;
top: 200px;
// background: linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%);
`

const TextContent= styled.div`
    width: 100%;
    padding: 15px 22px;
`


const Title = styled.h2`
// position: absolute;
width: 111px;
height: 17px;
left: 359px;
top: 690px;

font-family: 'Bw Modelica';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
letter-spacing: 0.04em;

color: #FFFFFF;
`

const MusicDescription = styled.p`
// position: absolute;
width: 178px;
height: 27px;
left: 359px;
top: 717px;

font-family: 'Bw Modelica';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;
letter-spacing: 0.04em;

color: rgba(255, 255, 255, 0.9);
`