import React from 'react';
import userPng from '../../../images/images/user.png';
import userCoverPng from '../../../images/images/user-cover.jpg';

const ProfileCover = ({user}) => {
    const profileCoverStyle = {
        height: 200,
        background: 'red',
        backgroundImage: `url(${userCoverPng})`,
        backgroundSize: 'cover',
        textAlign: 'center',
    };
    return (
        <div style={profileCoverStyle}>
            <img
                style={{ background: 'gray', height: 200, marginTop: 100, borderRadius: '50%' }}
                src={user?.photoURL ? user?.photoURL : userPng} alt=""
            />
            <br />
            <h1 className="border-bottom border-4 mt-3 text-center border-danger text-danger fw-bolder">{user?.name}</h1>
            <h6 className="text-start">email: {user?.email}</h6>
        </div>
    );
};

export default ProfileCover;