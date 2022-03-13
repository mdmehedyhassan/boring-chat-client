import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllPostDetails from '../AllPostDetails/AllPostDetails';

const AllPost = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios('http://localhost:5000/posts')
            .then(res => {
                let getAllPosts = []
                res.data.map(post => getAllPosts = [post, ...getAllPosts])
                setPosts(getAllPosts)
            })
    }, []);
    console.log(posts)
    return (
        <div>
            <h1>ALL post</h1>
            <div className="row">
                { 
                    posts.length > 0 &&
                    posts.map(post => <AllPostDetails key={post._id} post={post}></AllPostDetails>)
                }
            </div>
        </div>
    );
};

export default AllPost;