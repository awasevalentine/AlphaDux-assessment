import styled from "styled-components";
import { playlist } from "../../services/playlist";

const PlayListSongs = () => {

    return ( 
        <MainDiv>
        <DivWrapper href="#">
            {
                playlist.map((songs, index)=> (
                    <PlaylistSongsText key={index}>{songs}</PlaylistSongsText>
                ))
            }
            
        </DivWrapper>
        </MainDiv>
     );
}
 
export default PlayListSongs;


/* Style Section using styled-component*/
const MainDiv= styled.div`
position: absolute;
height: 19px;
left: 31px;
top: 470px;
font-family: 'Bw Modelica';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #D9D9D9;
`
const DivWrapper = styled.a`
width: 100%;
display: flex;
flex-direction: column;

`
const PlaylistSongsIcon = styled.img`

`

const PlaylistSongsText = styled.h4`
font-family: 'Bw Modelica';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #D9D9D9;
`

/*End of style section*/