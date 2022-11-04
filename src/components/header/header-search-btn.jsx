import styled from "styled-components";

const HeaderSearchBtn = () => {
    return ( 
        <>
        <HeaderInputWrapper type="text" />
        <SearchBtnImage src="../../../public/asset/icons/search_.svg" alt="Search Icon" />
        </>
     );
}
 
export default HeaderSearchBtn;

const DivWrapper = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 471px;
    height: 56px;
    left: 483px;
    top: 21px;
    border: 1px solid #0F0F0F;
`

const HeaderInputWrapper = styled.input`
    box-sizing: border-box;
    position: absolute;
    width: 471px;
    height: 56px;
    left: 483px;
    top: 21px;
    background-color: #0F0F0F;
    border: 1px solid #0F0F0F;
`

const SearchBtnImage = styled.img`
    position: absolute;
    width: 18px;
    height: 18px;
    left: 500px;
    top: 40px;
`