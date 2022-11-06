import styled from "styled-components";

const SideBarYourLibrary = () => {
    return ( 

        <DivWrapper href="#">
            <YourLibraryIcon src="/images/icons/music_album_.svg" alt="Your Library Icon" />
            <YourLibraryText>Your Library</YourLibraryText>
        </DivWrapper>

     );
}
 
export default SideBarYourLibrary;


/* Style Section using styled-component*/
const DivWrapper = styled.a`
width: 100%;
display: flex;
flex-direction: row;
`
const YourLibraryIcon = styled.img`
position: absolute;
width: 17px;
height: 17px;
left: 33px;
top: 237px;
`

const YourLibraryText = styled.h4`
position: absolute;
height: 19px;
width: 97px;
left: 67px;
top: 236px;
border-radius: nullpx;
font-family: 'Bw Modelica';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #D9D9D9;
`

/*End of style section*/