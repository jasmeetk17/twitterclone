import { Avatar } from '@mui/material'
import React from 'react'
import { Button } from '@mui/material';
import  './TweetBox.css';

function TweetBox() {
  return (
    <div className='tweetBox'>
    <form>
        <div className='tweetBox__input'>
         <Avatar
            src="https://imgs.search.brave.com/R6a3l4T0tujM3Ik8Gnxb-UcZHNAOKDTBAvWB_GM0h6c/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5sVWk4MVVF/bXdPbHh0aGJjcVJF/RzdnSGFIYSZwaWQ9/QXBp" >
         
        
         </Avatar>
          <input type="text" placeholder="What's happening"/>
          
        </div>
        <input className='tweetBox__imageInput'placeholder='optional:Enter image URL'/>

        <Button className='tweetBox__tweetButton' >Tweet</Button>
    </form> 

    </div>
  )
}

export default TweetBox;