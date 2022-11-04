import styled from "styled-components";

const SideBarHomeText = () => {
    return ( 
        <DivWrapper href="#">
            <HomeIcon src="../../../public/asset/icons/Home_with_Roof_Made_of_Palm_Branches_.svg" alt="Home With Room" />
            <HomeText>Home</HomeText>
        </DivWrapper>

     );
}
 
export default SideBarHomeText;

const DivWrapper = styled.a`
    width: 100%;
    display: flex;
    flex-direction: row;
`

const HomeIcon = styled.img`
position: absolute;
width: 17.97px;
height: 21px;
left: 33px;
top: 135px;
`

const HomeText = styled.h4`
position: absolute;
height: 19px;
width: 55px;
left: 66px;
top: 139px;
border-radius: nullpx;
font-family: 'Bw Modelica';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #D9D9D9;
`