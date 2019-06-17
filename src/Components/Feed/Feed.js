import React from 'react';
import './Feed.scss';
import {Profile} from '../index';


function Feed({data}) {
    return(
        <div className="Feed">
            <Profile nickName={data.nickname} profileImage={data.profile_image_url}/>
            <img className="Rectangle" alt="FeedPhoto" src={data.image_url}/>
            <img className="scrap" alt="scrap" src="./images/scrap_off.svg"/>
        </div>
    );
}

export default Feed;