import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import React, { useEffect, useState } from 'react';
import People from '../People/People';

const Peoples = () => {
    const { user } = useAuth();
    const [peoples, setPeoples] = useState([]);
    const [mainUser, setMainUser] = useState({})
    useEffect(() => {
        axios('http://localhost:5000/users')
            .then(res => setPeoples(res.data))
    }, []);
    useEffect(() => {
        axios(`http://localhost:5000/users?email=${user?.email}`)
            .then(res => {
                setMainUser(res.data);
            })
    }, [user?.email]);

    const addFriendEmail = getEmail => {
        if (mainUser?.friends) {
            const newFriends = [...mainUser?.friends, getEmail];
            axios.put(`http://localhost:5000/users?addFriends=${mainUser?.email}`, newFriends)
                .then(res => {
                    console.log(res)
                    if (res.data?.acknowledged) {
                        alert("Make Friends Successfully!!")
                        axios(`http://localhost:5000/users?email=${user?.email}`)
                            .then(res => {
                                setMainUser(res.data);
                            })
                    }
                })
        }

        if (!mainUser?.friends) {
            const newFriends = [getEmail]
            axios.put(`http://localhost:5000/users?addFriends=${mainUser?.email}`, newFriends)
                .then(res => {
                    if (res.data?.acknowledged) {
                        alert("Make Friends Successfully!!")
                        axios(`http://localhost:5000/users?email=${user?.email}`)
                            .then(res => {
                                setMainUser(res.data);
                            })
                    }
                })
        }
    }
    // console.log(mainUser);
    const mainUserFriends = mainUser?.friends
    return (
        <div>
            <h1 className='text-center border-bottom border-4 border-primary text-primary fw-bolder'>The All People</h1>
            <div className="row">
                {
                    peoples.map(people => (
                        people.email !== mainUser.email &&
                        <People key={people._id} people={people} mainUserFriends={mainUserFriends} addFriendEmail={addFriendEmail} ></People>
                    ))
                }
                {/* {
                    mainUserFriends &&
                    peoples.map(people => (
                        people.email !== mainUser.email &&
                        mainUserFriends.map(friend => (
                            people.email !== friend &&
                            <People key={people._id} people={people} addFriendEmail={addFriendEmail} ></People>
                        ))
                    ))
                } */}
            </div>
        </div>
    );
};


export default Peoples;