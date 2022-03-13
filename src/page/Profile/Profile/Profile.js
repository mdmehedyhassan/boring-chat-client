import React, { useEffect, useState } from 'react';
import ProfileCover from '../ProfileCover/ProfileCover';
import UserPost from '../UserPost/UserPost';
import useAuth from '../../../hooks/useAuth';
import UserAllPost from '../UserAllPost/UserAllPost';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const { user } = useAuth();
    const { profileEmail } = useParams();
    const [getUser, setGetUser] = useState({});
    const [userPosts, setUserPosts] = useState([]);
    useEffect(() => {
        axios(`http://localhost:5000/users?email=${profileEmail}`)
            .then(res => setGetUser(res.data))
    }, [profileEmail]);

    useEffect(() => {
        axios(`http://localhost:5000/userPosts/${profileEmail}`)
        .then(res => setUserPosts(res.data))
    }, [profileEmail]);

    return (
        <div>
            <ProfileCover user={getUser} />
            <div style={{ marginTop: 200 }}>
                {
                    getUser?.email === user.email &&
                    <UserPost user={getUser} />
                }
            </div>
            
            <UserAllPost userPosts={userPosts} />
        </div>
    );
};

export default Profile;