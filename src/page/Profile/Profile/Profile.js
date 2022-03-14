import React, { useEffect, useState } from 'react';
import ProfileCover from '../ProfileCover/ProfileCover';
import UserPost from '../UserPost/UserPost';
import useAuth from '../../../hooks/useAuth';
import UserAllPost from '../UserAllPost/UserAllPost';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";

const Profile = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const { profileEmail } = useParams();
    const [getUser, setGetUser] = useState({});
    const [userPosts, setUserPosts] = useState([]);
    useEffect(() => {
        axios(`https://fierce-thicket-37124.herokuapp.com/users?email=${profileEmail}`)
            .then(res => setGetUser(res.data))
    }, [profileEmail]);

    useEffect(() => {
        axios(`https://fierce-thicket-37124.herokuapp.com/userPosts/${profileEmail}`)
            .then(res => setUserPosts(res.data))
    }, [profileEmail]);

    const onSubmit = data => {
        const sendMessage = {
            senderName: user?.displayName,
            senderEmail: user?.email,
            message: data.message,
            receiverName: getUser?.name,
            receiverEmail: getUser?.email,
            time: new Date().toGMTString()
        }

        axios.post(`https://fierce-thicket-37124.herokuapp.com/sendMessage`, sendMessage)
            .then(res => {
                if (res.data?.insertedId) {
                    alert('Message Send Successfully!!');
                    reset();
                }
            })
    };
    return (
        <div>
            <ProfileCover user={getUser} />
            <div style={{ marginTop: 250 }}>
                {
                    getUser?.email === user.email &&
                    <UserPost user={getUser} />
                }
                {
                    getUser?.email !== user.email &&
                    <div className="p-2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h6 ><small className="text-secondary">Message To:</small> {getUser?.name}</h6>
                            <textarea
                                className="form-control"
                                {...register("message", { required: true })}
                                placeholder="Enter Your Message.."
                            />
                            <input type="submit" value="send" className="btn btn-primary mt-2" />
                        </form>
                    </div>
                }
            </div>

            <UserAllPost userPosts={userPosts} />
        </div>
    );
};

export default Profile;