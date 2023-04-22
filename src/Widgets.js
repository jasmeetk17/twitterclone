import React from 'react';
import './Widgets.css';
import { Search } from '@mui/icons-material';
import { TwitterTimelineEmbed, TwitterShareButton,  TwitterTweetEmbed} from 'react-twitter-embed';



function Widgets() {
  return (
    <div className='widgets'>
      <h2>Widgets</h2>
       <div className='widgets__Input'>
        <Search className='widgets__SearchIcon'/>
        <input  placeholder='Search Twitter' type='text'/> </div>
            <div className='widgets__Container'>
                <h2>What's happening</h2>
               <TwitterTweetEmbed tweetId={"1649052609590992901"}  />
               <TwitterTimelineEmbed sourceType="profile" screenName="ElonMusk"
                                  options={{ height:400 }} />
                <TwitterShareButton url={"https://twitter.com/Jasmeet37256834"} options= {{text:"Check out my profile",via:"jasmeet"}}/>  </div>
           


        </div>

    
  )
}

export default  Widgets;
