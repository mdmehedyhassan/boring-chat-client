import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userPng from '../../../images/images/user.png';

const AllPostDetails = (props) => {
    const [isLoveReact, setIsLoveReact] = useState(false);
    const { name, email, img, date, post } = props.post;
    const differentTime = new Date() - Date.parse(date);
    console.log(differentTime);
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
    else{
        postTimes = null;
    }
    
    return (
        <div className="mt-3 p-3 border-bottom border-2 border-primary">
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
                    <Link to={`/profile/${email}`} style={{textDecoration: 'none' }}>
                        <h5>{name}</h5>
                    </Link>
                    <p><i>{postTimes}</i></p>
                </div>
            </div>
            <div>
                <p>{post}</p>
                <span style={{cursor: 'pointer'}} onClick={() => setIsLoveReact(!isLoveReact)} className={`fs-4 ${isLoveReact ? 'text-danger' : 'text-secondary'}`}>
                    <FontAwesomeIcon icon={faHeart} />
                </span>
            </div>
        </div>
    );
};

export default AllPostDetails;