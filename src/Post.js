import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, Verified } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react';
import './Post.css';
function Post({displayName,username,verified,text,image,avatar}) {
  return (
    <div className='post'>
    <div className='post__avatar'>
        <Avatar src={avatar} /></div>
    <div className='post__body'>
    <div className='post__header'>
        <div className='post__headerText' >
            <h3>
              {displayName}{" "}
            <span className='post__headerSpecial'>
               {verified &&  <Verified className='post__badge'/>}
                @{username}</span></h3>
            </div>
            <div className='post__headerDescription'>
               <p>{text}</p>
            </div>                                                                                                                                                                                                                                
        </div>
        <img  src={image}/>
        <div className='post__footer'>
            <ChatBubbleOutline/>
            <Repeat/>
            <FavoriteBorder/>
            <PublishOutlined/>
           </div>
        </div>
    </div>
  )
}

export default Post;