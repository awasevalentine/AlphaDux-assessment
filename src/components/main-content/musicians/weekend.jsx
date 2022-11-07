import styled from "styled-components";
import { WeekendMusics } from "../../../services/get-images";
import { musiciansImages } from "../../../services/musicians-images";
import { device } from "../../media-queries/media-query";

const WeekendMusic = () => {
    return ( 
        <div>
            <SeeMore><a href="#">See More</a></SeeMore>
            <DivWrapper>
            {
                
                musiciansImages.map((details)=>(
                    <Items>
                        <ImageWrapper src={details.image}  alt={details.alt} />
                        {/* <TextWrapper> */}
                            <TextContent>
                                <Title>{details.title}</Title>
                                <MusicDescription>{details.description}</MusicDescription>
                            </TextContent>
                        {/* </TextWrapper> */}
                    </Items>
                ))
            }
        </DivWrapper>
        </div>
     );
}
 
export default WeekendMusic;


/*Main wrapper Section*/
const DivWrapper = styled.div`
position: absolute;
width: 95%;
height: 229px;
left: 15px;
top: 653px;
display: flex;
flex-direction: row;
overflow-x: scroll;
overflow-y: hidden;


@media ${device.laptop} {
    position: absolute;
    width: 100%;
    height: 220.01px;
    top: 650px;
    left: 337px;
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
    overflow-y: hidden;
    }

    @media ${device.laptopL} {
    position: absolute;
    width: 100%;
    height: 220.01px;
    left: 337px;
    top: 773px;
    display: flex;
    flex-direction: row;
    }


    @media ${device.desktop} {
    position: absolute;
    width: 100%;
    height: 285.01px;
    left: 337px;
    top: 950px;
    display: flex;
    flex-direction: row;
    }
`
/* End of Main Wrapper */



/*Section for wrapping both Image and Content */
const Items = styled.div`
    width: 100%;

    @media ${device.laptop}{
        width: 150px;
        height: 220.01px;
        left: 337px;
        display: flex;
        flex-direction: row;
        overflow: hidden;
        }

    @media ${device.laptopL}{
        width: 200.38px;
        height: 240.01px;
        left: 337px;
        top: 873px;
        display: flex;
        flex-direction: row;
        overflow: hidden;
    }
    @media ${device.desktop}{
        width: 260.38px;
        height: 285.01px;
        left: 337px;
        top: 690px;
        display: flex;
        flex-direction: row;
        overflow: hidden;
    }

`
/* End of Section for Image and content wrapper */


/*Section for Image wrapper */
const ImageWrapper = styled.img`
    width: 181.13px;
    height: 228.05px;
    display: flex;
    flex-direction: row;
    left: 0px;
    top: 0px;
    margin: 0 5px;


    @media ${device.laptop}{
        width: 180px;
        height: 220.01px;
        left: 337px;
        top: 782px;
        overflow: hidden;
    }
    
    @media ${device.laptopL}{
        width: 100%;
        height: 220.01px;
        top: 873px;
        left: 337px;
        display: flex;
        flex-direction: row;
        overflow: hidden;
    }
    
    @media ${device.desktop}{
        width: 226.38px;
        height: 282.01px;
        left: 337px;
        display: flex;
        flex-direction: row;
        overflow: hidden;
    }
`
/* End of section for Image wrapper */

/*Section for Content text */
const TextContent= styled.div`
    width: 100%;
    padding: 0;

    @media ${device.laptop}{
    position: absolute;
    width: 100%;
    padding: 15px 22px;
}
`


const Title = styled.h2`
    position: relative;
    width: 121px;
    height: 14px;
    left: 22px;
    top: -65px;

    font-family: 'Bw Modelica';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #FFFFFF;

    @media ${device.laptop}{
        width: 111px;
        height: 17px;
        left: -10px;
        top: 130px;
        font-size: 16px;
        line-height: 19px;
    }

    @media ${device.laptopL}{
        width: 111px;
        height: 17px;
        left: 10px;
        top: 140px;
        font-size: 16px;
        line-height: 19px;
    }
    @media ${device.desktop}{
        width: 111px;
        height: 17px;
        left: 10px;
        top: 185px;
        font-size: 16px;
        line-height: 19px;
    }
`

const MusicDescription = styled.p`
position: relative;
width: 142.42px;
height: 21.6px;
left: 22px;
top: -65px;
font-family: 'Bw Modelica';
font-style: normal;
font-weight: 500;
font-size: 8px;
line-height: 10px;
letter-spacing: 0.04em;
color: rgba(255, 255, 255, 0.9);

@media ${device.laptop}{
    width: 135px;
    height: 27px;
    left: -10px;
    top: 125px;
    font-size: 9.5px;
    line-height: 10px;
}

@media ${device.laptopL}{
    width: 135px;
    height: 27px;
    left: 10px;
    top: 140px;
    font-size: 9.5px;
    line-height: 10px;
}
@media ${device.desktop}{
    width: 178px;
    height: 27px;
    left: 10px;
    top: 185px;
    font-size: 10px;
    line-height: 12px;
}
`
/* End of content text */



const SeeMore = styled.div.attrs(()=>
({tableIndex: 0}))`
display: flex;
justify-content: end;
position: absolute;
width: 100%;
height: 14px;
top: 619px;
padding-right: 20px;
font-family: 'Bw Modelica';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
letter-spacing: 0.04em;
color: rgba(217, 217, 217, 0.9);


& a{
color: rgba(217, 217, 217, 0.9);

}

@media ${device.laptop}{
    display: none;
}
`