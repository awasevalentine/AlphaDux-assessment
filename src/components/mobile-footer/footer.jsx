import styled from "styled-components";
import { Layout } from "antd";
import './footer.css'
import { FooterIcons } from "../../services/get-icons/get-icons";


const {Footer} = Layout

const MobileFooter = () => {
    return ( 
        <Footer className="foot_wrapper">
            {
                FooterIcons.map((icons)=>(
                    <a href="#">
                        <FooterImage src={icons.image} alt={icons.alt} />
                    </a>
                ))
            }
        </Footer>
     );
}
 
export default MobileFooter;


const FooterImage = styled.img`
    width: 25.16px;
    height: 29.4px;
`