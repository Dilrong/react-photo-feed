import React from 'react';
import './Profile.scss';

function Profile({nickName, profileImage}) {
    return(
        <div className="profile">
            <img className="profile__photo" src={profileImage} alt="profileImage"/>
            <span className="profile__text">{nickName}</span>
        </div>
    );
}

export default Profile;