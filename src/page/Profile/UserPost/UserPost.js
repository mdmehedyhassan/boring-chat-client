import { TextField } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const UserPost = ({ user }) => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const postData = {
            email: user?.email,
            date: new Date().toGMTString(),
            post: data.post,
            name: user?.name,
            img: user?.img
        }
        axios.post(`https://fierce-thicket-37124.herokuapp.com/posts`, postData)
            .then(res => {
                if(res?.data?.insertedId){
                    alert("You post added Successfully!!!")
                    reset();
                }
            })
    };
    return (
        <div>
            <h4>Update a Post</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    {...register("post", { required: true })}
                    id="standard-basic"
                    label="Enter Your Post"
                    variant="standard"
                    className="form-control mt-2 w-75" />
                <br />
                <input type="submit" value="Post" className="form-control mt-2 btn btn-primary w-25" />
            </form>
        </div>
    );
};

export default UserPost;