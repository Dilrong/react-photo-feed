import React from 'react';
import './Profile.scss';

function Profile({nickName, profileImage}) {
    return(
        <div className="profile">
            <img className="profile__photo" src="./images/ic-avatar-cat.svg" alt="profileImage"/>
            <span className="profile__text">hey</span>
        </div>
    );
}

export default Profile;