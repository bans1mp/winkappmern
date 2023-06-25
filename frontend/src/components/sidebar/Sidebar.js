import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import {Users} from "../../dummyData"
import CloseFriend from '../closeFriend/CloseFriend';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className='sidebarIcon'/>
            <span className="sidebarItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className='sidebarIcon'/>
            <span className="sidebarItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <VideocamIcon className='sidebarIcon'/>
            <span className="sidebarItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className='sidebarIcon'/>
            <span className="sidebarItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className='sidebarIcon'/>
            <span className="sidebarItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <QuestionMarkIcon className='sidebarIcon'/>
            <span className="sidebarItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className='sidebarIcon'/>
            <span className="sidebarItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className='sidebarIcon'/>
            <span className="sidebarItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className='sidebarIcon'/>
            <span className="sidebarItemText">Courses</span>
          </li>
        </ul>


        <button className="sidebarButton">Show More</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
          {Users.map(u => (
            <CloseFriend user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
