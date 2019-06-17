import React, { useState } from 'react';
import './Feed.scss';
import {Profile} from '../index';


function Feed({data}) {
    const [src, setSrc] = useState("./images/scrap_off.svg");
    return(
        <div className="Feed">
            <Profile nickName={data.nickname} profileImage={data.profile_image_url}/>
            <img className="Rectangle" alt="FeedPhoto" src={data.image_url}/>
            <img className="scrap" alt="scrap" src={src} onClick={()=>{setSrc("./images/scrap_on.svg")}}/>
        </div>
    );
}

export default Feed;