import styled from "styled-components";

const HeaderNavArrows = () => {
    return ( 
        <DivWrapper>
            <BackArrowContainer>
                <BackArrowImage src="/images/icons/arrowbackios_.svg" alt="Back Arrow Nav" />
            </BackArrowContainer>
            <FrontArrowContainer>
                <FrontArrowImage src="/images/icons/arrow_front_ios.svg" alt="Front Arrow Nav" />
            </FrontArrowContainer>
        </DivWrapper>
     );
}
 
export default HeaderNavArrows;

const DivWrapper = styled.div`
display: flex;
flex-direction: row
`

const BackArrowContainer = styled.div`
    position: absolute;
    width: 48px;
    height: 41px;
    left: 305px;
    top: 28px;
    cursor: pointer
`

const BackArrowImage = styled.img`
    width: 32.58px;
    height: 32.58px;
    left: 313px;
    top: 33px;
    vertical-align: baseline !important;
    mix-blend-mode: normal;
`
const FrontArrowContainer = styled.div`
    position: absolute;
    width: 48px;
    height: 41px;
    left: 409px;
    top: 28px;
    cursor: pointer

`

const FrontArrowImage = styled.img`
    width: 32.58px;
    height: 32.58px;
    left: 401.58px;
    top: 65.58px;
    vertical-align: baseline !important;

`