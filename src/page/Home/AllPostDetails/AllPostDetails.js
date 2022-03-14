import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userPng from '../../../images/images/user.png';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';


const AllPostDetails = (props) => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const [isLoveReact, setIsLoveReact] = useState(false);
    const { _id, name, email, postComments, img, date, post } = props.post;
    const presentGMTTime = new Date().toGMTString();
    const presentTime = Date.parse(presentGMTTime);
    const postTime = Date.parse(date);
    const differentTime = presentTime - postTime;
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const minutes = Math.floor(differentTime / minute);
    const hours = Math.floor(differentTime / hour);
    const days = Math.floor(differentTime / day);

    let postTimes;
    if (minutes < 60) {
        postTimes = minutes + ' minutes ago';
    }
    else if (hours < 24) {
        postTimes = hours + ' hours ago';
    }
    else if (days > 0) {
        postTimes = days + ' days ago';
    }
    else {
        postTimes = null;
    }

    const onSubmit = data => {
        if (user?.email) {
            if (postComments) {
                const updateComment = [
                    ...postComments,
                    {
                        commentAuthors: user?.displayName,
                        authorEmails: user?.email,
                        comments: data.comment
                    }
                ]
                axios.put(`https://fierce-thicket-37124.herokuapp.com/posts/comment/${_id}`, updateComment)
                    .then(res => {
                        if (res.data?.acknowledged) {
                            axios(`https://fierce-thicket-37124.herokuapp.com/posts`)
                                .then(res => {
                                    let getAllPosts = []
                                    res.data.map(post => getAllPosts = [post, ...getAllPosts])
                                    props.setPosts(getAllPosts);
                                })
                        }
                        reset();
                    })
            }
            if (!postComments) {
                const updateComment = [
                    {
                        commentAuthors: user?.displayName,
                        authorEmails: user?.email,
                        comments: data.comment
                    }
                ]
                axios.put(`https://fierce-thicket-37124.herokuapp.com/posts/comment/${_id}`, updateComment)
                    .then(res => {
                        if (res.data?.acknowledged) {
                            axios(`https://fierce-thicket-37124.herokuapp.com/posts`)
                                .then(res => {
                                    let getAllPosts = []
                                    res.data.map(post => getAllPosts = [post, ...getAllPosts])
                                    props.setPosts(getAllPosts);
                                })
                        }
                        reset();
                    })
            }
        }
        if (!user?.email) {
            alert('Sorry You cannot comment with out any account')
        }
    };
    return (
        <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="mt-3 p-3 post-global-style">
            <div className="d-flex">
                <div style={{ height: 55, width: 55, overflow: 'hidden', background: '#3f71cc', textAlign: 'center', borderRadius: '50%', color: 'white' }}>
                    {
                        img ?
                            <img style={{ width: 55, borderRadius: '50%' }} src={img} alt="" />
                            :
                            <img style={{ width: 55, borderRadius: '50%' }} src={userPng} alt="" />
                    }
                </div>
                <div className="ps-2 text-secondary">
                    <Link to={`/profile/${email}`} style={{ textDecoration: 'none' }}>
                        <h5>{name}</h5>
                    </Link>
                    <p><i>{postTimes}</i></p>
                </div>
            </div>
            <div>
                <p>{post}</p>
                <span style={{ cursor: 'pointer' }} onClick={() => setIsLoveReact(!isLoveReact)} className={`fs-4 ${isLoveReact ? 'text-danger' : 'text-secondary'}`}>
                    <FontAwesomeIcon icon={faHeart} />
                </span>
                {
                    postComments &&
                    <div style={{ width: '80%', marginLeft: '10%' }}>
                        <p style={{ borderBottom: '1px solid gray' }}>All Comments</p>
                        {
                            postComments?.map((getComment, index) => <div
                                key={index}
                            >
                                <p>
                                    <Link to={`/profile/${getComment.authorEmails}`} style={{ textDecoration: 'none' }}>
                                        {getComment.commentAuthors}
                                    </Link>
                                    : {getComment.comments}
                                </p>
                            </div>
                            )
                        }
                    </div>
                }
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("comment", { required: true })} className="form-control" placeholder="Write your comment..." />

                    <input type="submit" value="comment" className="btn btn-secondary mt-2" />
                </form>
            </div>


        </div>
    );
};

export default AllPostDetails;