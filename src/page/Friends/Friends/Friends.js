import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const {user} = useAuth();
    const [getUser, setGetUser] = useState({});
    useEffect(() => {
        axios(`http://localhost:5000/users?email=${user?.email}`)
            .then(res => setGetUser(res.data))
    }, [user?.email]);
    console.log(getUser);
    return (
        <div>
            <h1>This is friends</h1>
            <div className="row">
                {
                    getUser?.friends?.length > 0 &&
                    getUser?.friends?.map(friend => <Friend friend={friend}></Friend>)
                    // getUser?.friends?.map(friend => <li>{friend}</li>)
                }
                
            </div>
        </div>
    );
};

export default Friends;