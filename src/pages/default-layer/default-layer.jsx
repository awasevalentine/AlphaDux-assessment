import React from 'react';
import { 
        LaptopOutlined, NotificationOutlined, 
        UserOutlined, HomeOutlined, NodeIndexOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Space } from 'antd';
import './default-layer.css'
import HeaderComponent from '../../components/header/header';
import SideBar from '../../components/sidebar/sidebar';
import HomePage from '../home/home';


const {Content } = Layout
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});


const DefaultLayer = () => (
    <Layout>
        <HeaderComponent />
    <Layout>
        <SideBar />
      <Layout><HomePage /></Layout>
    </Layout>
  </Layout>
);










//   <Layout>
//         <HeaderComponent />
//     <Layout>
//       <Sider width={296} height={1082}  className="sidebar_wrapper">

//         {/* <div className='logo_main_wrapper'>
//                 <div className='first_content'>
//                     <div className='items'>
//                     <HomeOutlined className='home-outline-icon'/> <span className='home'>Home</span>
//                     </div>
//                     <div className='items'>
//                     <NodeIndexOutlined className='node-index-icon'/><span className='discover'>Discover</span>
//                     </div>
//                 </div>
//             </div> */}
//         {/* <hr />
//         <div>
//             <div>
//                 thi is me
//             </div>
//         </div> */}
//       </Sider>
//       <Layout
//         style={{
//         //   padding: '0 24px 24px',
//         }}
//       >
//         {/* <Breadcrumb
//           style={{
//             margin: '16px 0',
//           }}
//         >
//           <Breadcrumb.Item>Home</Breadcrumb.Item>
//           <Breadcrumb.Item>List</Breadcrumb.Item>
//           <Breadcrumb.Item>App</Breadcrumb.Item>
//         </Breadcrumb> */}
//         <div style={{backgroundColor: 'black', padding: '0 !important'}}>
//             <h2>Welcome</h2>
//         </div>
//         <Content
//           className="site-layout-background"
//           style={{
//             padding: 24,
//             margin: 0,
//             minHeight: 280,
//           }}
//         >
//           Content
//         </Content>
//       </Layout>
//     </Layout>
//   </Layout>
// );
export default DefaultLayer;