import styled from "styled-components";

const RecentlyPlayedSongs = () => {
    return ( 

        <DivWrapper href="#">
            <RecentlyPlayedSongIcon src="../../../public/asset/icons/audio_.svg" alt="Recently played Songs Icon" />
            <RecentlyPlayedSongText>Recently Played</RecentlyPlayedSongText>
        </DivWrapper>

     );
}
 
export default RecentlyPlayedSongs;


/* Style Section using styled-component*/
const DivWrapper = styled.a`
width: 100%;
display: flex;
flex-direction: row;
`
const RecentlyPlayedSongIcon = styled.img`
position: absolute;
width: 16px;
height: 19.37px;
left: 34px;
top: 308px;

`

const RecentlyPlayedSongText = styled.h4`
position: absolute;
height: 19px;
width: 126px;
left: 67px;
top: 308px;
border-radius: nullpx;
font-family: 'Bw Modelica';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #D9D9D9;


`

/*End of style section*/