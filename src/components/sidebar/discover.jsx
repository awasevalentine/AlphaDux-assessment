import styled from "styled-components";

const SideBarDiscover = () => {
    return ( 
        <DivWrapper href="#">
            <DiscoverIcon src="../../../public/asset/icons/xfce4_eyes_.svg" alt="Discover Icon" />
            <DiscoverText>Discover</DiscoverText>
        </DivWrapper>
     );
}
 
export default SideBarDiscover;

const DivWrapper = styled.a`
width: 100%;
display: flex;
flex-direction: row;
`

const DiscoverIcon = styled.img`
position: absolute;
width: 17.35px;
height: 14px;
left: 34px;
top: 178px;
`

const DiscoverText = styled.h4`
position: absolute;
height: 19px;
width: 72px;
left: 66px;
top: 175px;
border-radius: nullpx;
font-family: 'Bw Modelica';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #D9D9D9;
`