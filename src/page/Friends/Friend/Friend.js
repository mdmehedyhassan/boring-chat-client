import axios from 'axios';
import './Friends.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userPng from '../../../images/images/user.png';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";

const Friend = (props) => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()
    const [friend, setFriend] = useState({});
    const { img, name, email } = friend;
    useEffect(() => {
        axios(`https://fierce-thicket-37124.herokuapp.com/users?email=${props.friend}`)
            .then(res => setFriend(res.data));
    }, [props.friend])

    const sendMessageHandler = (emailStyle) => {
        document.getElementById(`messageInput${emailStyle}`).style.display = 'block';
        const allFriendsMessage = document.getElementsByClassName('friendMessage');
        for (let i = 0; i < allFriendsMessage.length; i++) {
            allFriendsMessage[i].style.display = 'none';
        }
    }
    const onSubmit = data => {
        const sendMessage = {
            senderName: user?.displayName,
            senderEmail: user?.email,
            message: data.message,
            receiverName: name,
            receiverEmail: email,
            time: new Date().toGMTString()
        }

        axios.post(`https://fierce-thicket-37124.herokuapp.com/sendMessage`, sendMessage)
            .then(res => {
                if (res.data?.insertedId) {
                    alert('Message Send Successfully!!');
                    document.getElementById(`messageInput${email}`).style.display = 'none';
                    const allFriendsMessage = document.getElementsByClassName('friendMessage');
                    for (let i = 0; i < allFriendsMessage.length; i++) {
                        allFriendsMessage[i].style.display = 'block';
                    }
                    reset();
                }
            })
    };
    return (

        <div
            data-aos="flip-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className=" mt-2">
            <div className="friendMessage" id={`friendMessage${email}`}>
                <div className="p-2 d-flex justify-content-between align-items-center friend-global-style" style={{ borderRadius: '10px' }}>
                    <div className='d-flex align-items-center'>
                        {
                            img ?
                                <img
                                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                                    src={img} alt=""
                                />
                                :
                                <img
                                    style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'gray' }}
                                    src={userPng} alt=""
                                />
                        }
                        <Link to={`/profile/${email}`} style={{ textDecoration: 'none' }}>
                            <h5 className="p-2">{name}</h5>
                        </Link>
                    </div>

                    <div>
                        <button
                            onClick={() => sendMessageHandler(email)}
                            className="btn btn-primary"
                        > message</button>
                    </div>

                </div>
            </div>

            <div className="messageInput p-2 " id={`messageInput${email}`}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h6 ><small className="text-secondary">Message To:</small> {name}</h6>
                    <textarea
                        className="form-control"
                        {...register("message", { required: true })}
                        placeholder="Enter Your Message.."
                    />
                    <input type="submit" value="send" className="btn btn-primary mt-2" />
                </form>
            </div>
        </div>
    );
};

export default Friend;