import React from 'react';
import './Feed.scss';
import Profile from '../Profile/Profile'

function Feed() {
    return(
        <div className="Feed">
            <Profile/>
            <img className="Rectangle" alt="FeedPhoto" src="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547907139_Oc9.jpeg/640/640"/>
        </div>
    );
}

export default Feed;