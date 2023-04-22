import React from 'react';
import "./App.js"
import './Sidebar.css';
import SidebarOptions from './SidebarOptions.js';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import  SearchIcon from '@mui/icons-material/Search';
import  NotificationsIcon from '@mui/icons-material/Notifications';
import  MailOutlineIcon  from '@mui/icons-material/MailOutline';
import  BookmarkBorderIcon  from '@mui/icons-material/Bookmark';

import  PermIdentityIcon  from '@mui/icons-material/PermIdentity';
import  MoreHorizIcon  from '@mui/icons-material/MoreHoriz';
import { ListAlt } from '@mui/icons-material';
import { Button } from '@mui/material';


function Sidebar() {
  return (
    <div  className='sidebar'>
        <TwitterIcon className='sidebar__TwitterIcon'/>
        <SidebarOptions active Icon={HomeIcon} text="Home"/>
        <SidebarOptions Icon={SearchIcon} text="Explore"/>
        <SidebarOptions Icon={NotificationsIcon} text="Notifications"/>
        <SidebarOptions Icon={MailOutlineIcon} text="Message"/>
        <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks"/>
        <SidebarOptions Icon={ListAlt} text="Lists"/>
        <SidebarOptions Icon={PermIdentityIcon} text="Profile"/>
        <SidebarOptions Icon={MoreHorizIcon} text="More"/>
   
      <Button className="sidebar__tweet" variant="outlined">Tweet</Button>  
    </div>
  );
}

export default Sidebar;