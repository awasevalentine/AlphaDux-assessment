import { Layout } from "antd";
import { homeSection, musicLibrary } from "../../services/get-icons/get-icons";
import { myPlaylist, playlist } from "../../services/playlist";
import CreatePlayList from "./create-playlist";
import SideBarDiscover from "./discover";
import SideBarHomeText from "./home";
import SideBarLikedSongs from "./liked-songs";
import MyPlayList from "./my-playlist";
import PlayListSongs from "./playlist-songs";
import RecentlyPlayedSongs from "./recently-played";
import './sidebar.css'
import SideBarYourLibrary from "./your-library";

const {Sider} = Layout


const SideBar = () => {



    return ( 

        <Sider width={296} className="sidebar_wrapper">
            <div id='sidebar_content_wrapper'>
                <SideBarHomeText />
                <SideBarDiscover/>
                <hr style={hrStyle}/>
                <SideBarYourLibrary />
                <SideBarLikedSongs />
                <RecentlyPlayedSongs/>
                <CreatePlayList />
                <MyPlayList />
                <hr style={hrStyle2}/>
                <PlayListSongs />

               
            </div>
        </Sider>
     );
}
 
export default SideBar;


const hrStyle ={
    position: 'absolute',
    width: '231px',
    height: '0px',
    left: '30px',
    top: '216.5px',
    border: '0.5px solid #282828',
}

const hrStyle2 = {
    position: 'absolute',
    width: '231px',
    height: '0px',
    left: '31px',
    top: '444px',
    border: '0.5px solid #282828'
}