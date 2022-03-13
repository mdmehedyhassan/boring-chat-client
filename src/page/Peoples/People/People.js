import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import userPng from '../../../images/images/user.png';

const People = (props) => {
    const { img, name, email } = props.people;
    const friends = props.mainUserFriends;
    let allInOne = ''
    if (friends) {
        for (let i = 0; i < friends.length; i++) {
            const element = friends[i];
            allInOne += element
        }
    }
    return (
        <>
            {
                allInOne.includes(email) === false &&
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
                        <button onClick={() => props.addFriendEmail(email)} className="btn btn-primary">
                            <FontAwesomeIcon icon={faUserPlus}/> Follow
                        </button>
                        <Link to={`/profile/${email}`} className="btn btn-info ms-2">
                            View Profile
                        </Link>
                    </div>
                </div>
            }
        </>
    );
};

export default People;