import {Layout } from "antd";
import LogoComponent from "./logo";
import HeaderNavArrows from "./header-arrow-nav";
import HeaderSearchBtn from "./header-search-btn";



const HeaderComponent = () => {
    const { Header } = Layout;

    return ( 
        <Header style={style}>
            <LogoComponent />
            <HeaderNavArrows />
            <HeaderSearchBtn />
        </Header>
     );
}
 
export default HeaderComponent;

const style = {
    width: '100%',
    height: '97px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: 'rgba(14,14,14,1)',
    position: 'fixed',
    zIndex: '10',
    width: '100%',
    padding: '0 !important'
}