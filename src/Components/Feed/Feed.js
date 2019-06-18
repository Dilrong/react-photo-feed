import React, { useState, useEffect } from 'react';
import './Feed.scss';
import {Profile} from '../index';


function Feed({data, localObj}) {
    const [src, setSrc] = useState("./images/scrap_off.svg");

    useEffect(() => {
        localObj.map((obj) => (
            (obj.id === data.id) ? setSrc("./images/scrap_on.svg") : false
        ))
    }, [data, localObj]);

    return(
        <div className="Feed">
            <Profile nickName={data.nickname} profileImage={data.profile_image_url}/>
            <img className="Rectangle" alt="FeedPhoto" src={data.image_url}/>
            <img className="scrap" alt="scrap" src={src} onClick={()=>{
                setSrc("./images/scrap_on.svg");
                if(src === "./images/scrap_on.svg"){
                    setSrc("./images/scrap_off.svg");
                    let index = localObj.findIndex(obj => obj.id === data.id);
                    localObj.splice(index, 1);
                    localStorage.setItem("scrap", JSON.stringify(localObj));
                }else{
                    localObj.push(data);
                    localStorage.setItem("scrap", JSON.stringify(localObj));
                }
                }}/>
        </div>
    );
}

export default Feed;