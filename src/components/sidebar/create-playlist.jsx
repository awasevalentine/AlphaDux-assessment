import styled from "styled-components";

const CreatePlayList = () => {
    return ( 

        <DivWrapper href="#">
            <CreatePlaylistIcon src="../../../public/asset/icons/media_playlist_append_.svg" alt="Create PlayList Icon" />
            <CreatePlaylistText>Create Playlist</CreatePlaylistText>
        </DivWrapper>

     );
}
 
export default CreatePlayList;


/* Style Section using styled-component*/
const DivWrapper = styled.a`
width: 100%;
display: flex;
flex-direction: row;
`
const CreatePlaylistIcon = styled.img`
position: absolute;
width: 16px;
height: 16px;
left: 35px;
top: 345px;
`

const CreatePlaylistText = styled.h4`
position: absolute;
height: 19px;
width: 113px;
left: 66px;
top: 344px;
border-radius: nullpx;
font-family: 'Bw Modelica';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #D9D9D9;

`

/*End of style section*/