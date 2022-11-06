import styled from "styled-components";

const MyPlayList = () => {
    return ( 

        <DivWrapper href="#">
            <MyPlaylistIcon src="/images/icons/records_.svg" alt="My PlayList Icon" />
            <MyPlaylistText>My Playlists</MyPlaylistText>
        </DivWrapper>
     );
}
 
export default MyPlayList;


/* Style Section using styled-component*/
const DivWrapper = styled.a`
width: 100%;
display: flex;
flex-direction: row;
`
const MyPlaylistIcon = styled.img`
position: absolute;
width: 20px;
height: 20px;
left: 32px;
top: 405px;
`

const MyPlaylistText = styled.h4`
position: absolute;
height: 19px;
width: 93px;
left: 67px;
top: 405px;
border-radius: nullpx;
font-family: 'Bw Modelica';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #D9D9D9;

`

/*End of style section*/