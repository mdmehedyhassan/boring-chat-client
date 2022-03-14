import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';

const Friends = () => {
    const {user} = useAuth();
    const [getUser, setGetUser] = useState({});
    useEffect(() => {
        axios(`https://fierce-thicket-37124.herokuapp.com/users?email=${user?.email}`)
            .then(res => setGetUser(res.data))
    }, [user?.email]);
    return (
        <div>
            <h1 className="border-bottom border-4 text-center border-danger text-danger fw-bolder">Following</h1>
            <Link to="/peoples" className="btn btn-primary">
               <FontAwesomeIcon icon={faUserGroup} /> Follow more
            </Link>
            <div className="row">
                {
                    getUser?.friends?.length > 0 &&
                    getUser?.friends?.map(friend => <Friend friend={friend}></Friend>)
                }
                
            </div>
        </div>
    );
};

export default Friends;