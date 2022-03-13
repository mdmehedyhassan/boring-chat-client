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
    }, [props.friend])
    console.log(friend)
    return (
        <div className="col-lg-6 mt-2">
            <div className="p-2 h-100 d-flex justify-content-between align-items-center" style={{ border: '1px solid gray', borderRadius: '10px' }}>
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
                    <button className="btn btn-primary"> message</button>
                </div>

            </div>

        </div>
    );
};

export default Friend;