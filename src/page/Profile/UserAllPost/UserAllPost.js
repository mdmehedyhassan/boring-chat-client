import React from 'react';
import AllPostDetails from '../../Home/AllPostDetails/AllPostDetails';

const UserAllPost = (props) => {
    const posts = props.userPosts;
    return (
        <div className="mt-5">
            <h1>See all Post</h1>
            {
                posts?.length > 0 &&
                posts?.map(post => <AllPostDetails key={post._id} post={post}></AllPostDetails>)
            }
        </div>
    );
};

export default UserAllPost;