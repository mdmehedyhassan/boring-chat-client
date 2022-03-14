import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import React, { useEffect, useState } from 'react';
import People from '../People/People';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';

const Peoples = () => {
    const { user } = useAuth();
    const [peoples, setPeoples] = useState([]);
    const [mainUser, setMainUser] = useState({})
    useEffect(() => {
        axios('https://fierce-thicket-37124.herokuapp.com/users')
            .then(res => setPeoples(res.data))
    }, []);
    useEffect(() => {
        axios(`https://fierce-thicket-37124.herokuapp.com/users?email=${user?.email}`)
            .then(res => {
                setMainUser(res.data);
            })
    }, [user?.email]);

    const addFriendEmail = getEmail => {
        if (mainUser?.friends) {
            const newFriends = [...mainUser?.friends, getEmail];
            axios.put(`https://fierce-thicket-37124.herokuapp.com/users?addFriends=${mainUser?.email}`, newFriends)
                .then(res => {
                    if (res.data?.acknowledged) {
                        alert("Make Friends Successfully!!")
                        axios(`https://fierce-thicket-37124.herokuapp.com/users?email=${user?.email}`)
                            .then(res => {
                                setMainUser(res.data);
                            })
                    }
                })
        }

        if (!mainUser?.friends) {
            const newFriends = [getEmail]
            axios.put(`https://fierce-thicket-37124.herokuapp.com/users?addFriends=${mainUser?.email}`, newFriends)
                .then(res => {
                    if (res.data?.acknowledged) {
                        alert("Make Friends Successfully!!")
                        axios(`https://fierce-thicket-37124.herokuapp.com/users?email=${user?.email}`)
                            .then(res => {
                                setMainUser(res.data);
                            })
                    }
                })
        }
    }
    const mainUserFriends = mainUser?.friends
    return (
        <div>
            <h1 className="border-bottom border-4 text-center border-danger text-danger fw-bolder">The All People</h1>
            <Link to="/friends" className="btn btn-primary">
                <FontAwesomeIcon icon={faUserGroup} /> See Your Following List
            </Link>
            <div className="row">
                {
                    peoples.map(people => (
                        people.email !== mainUser.email &&
                        <People key={people._id} people={people} mainUserFriends={mainUserFriends} addFriendEmail={addFriendEmail} ></People>
                    ))
                }
            </div>
        </div>
    );
};


export default Peoples;