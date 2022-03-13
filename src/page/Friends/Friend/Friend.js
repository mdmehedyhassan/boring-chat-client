import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userPng from '../../../images/images/user.png';

const Friend = (props) => {
    console.log(props);
    const [friend, setFriend] = useState({});
    const { img, name, email } = friend;
    useEffect(() => {
        axios(`http://localhost:5000/users?email=${props.friend}`)
        .then(res => setFriend(res.data));
    },[props.friend])
    console.log(friend)
    return (
        <div className="col-xxl-3 col-lg-4 col-sm-6 mt-2">
            <div className="p-2 text-center h-100" style={{ border: '1px solid gray', borderRadius: '10px' }}>
                {
                    img ?
                        <img
                            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                            src={img} alt=""
                        />
                        :
                        <img
                            style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'gray' }}
                            src={userPng} alt=""
                        />
                }
                <h5>{name}</h5>
                {/* <button onClick={() => addFriendEmail(email)} className="btn btn-primary">
                    Message
                </button> */}
                <button>message</button>
                {/* <Link to={`/profile/${email}`} className="btn btn-info ms-2">
                    View Profile
                </Link> */}
            </div>

        </div>
    );
};

export default Friend;