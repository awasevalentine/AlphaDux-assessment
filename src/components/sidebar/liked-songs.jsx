import styled from "styled-components";

const SideBarLikedSongs = () => {
    return ( 

        <DivWrapper href="#">
            <LikedSongsIcon src="../../../public/asset/icons/love_france_heart_national_culture_paris_.svg" alt="Liked Songs Icon" />
            <LikedSongsText>Liked Songs</LikedSongsText>
            <SuffixIcon src="../../../public/asset/icons/sound_on_.svg" alt="Sounds Icon"/>
        </DivWrapper>

     );
}
 
export default SideBarLikedSongs;


/* Style Section using styled-component*/
const DivWrapper = styled.a`
width: 100%;
display: flex;
flex-direction: row;
`
const LikedSongsIcon = styled.img`
position: absolute;
width: 17.64px;
height: 18px;
left: 33px;
top: 272px;
`

const LikedSongsText = styled.h4`
position: absolute;
height: 19px;
width: 97px;
left: 67px;
top: 272px;
border-radius: nullpx;
font-family: 'Bw Modelica';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #FBBA12;

`

const SuffixIcon = styled.img`
position: absolute;
width: 18.75px;
height: 15px;
left: 180px;
top: 274px;
`

/*End of style section*/