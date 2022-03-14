import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { TextField } from '@mui/material';

const Login = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const { googleSignInHandler, signInWithEmailAndPasswordHandler } = useAuth();
    const location = useLocation();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPasswordHandler(data?.email, data?.password);
        reset();
    };

    return (
        <div className="text-center mt-4 mb-4 ">
            {
                location?.pathname === '/login' ?
                    ''
                    :
                    <div>
                        <h3 className="text-danger fw-bolder">Please Sign in or Login</h3>
                    </div>
            }
            <div className="d-flex justify-content-center" >
                <form onSubmit={handleSubmit(onSubmit)} style={{ border: '3px solid #0b5ed7', borderRadius: '10px', margin: '30px 0', width: '75%', padding: '10px' }}>
                    <TextField
                        type="email"
                        {...register("email", { required: true })}
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        className="form-control mt-3"
                    />
                    <br />
                    <TextField
                        type={isShowPassword ? "text" : "password"}
                        {...register("password", { required: true, minLength: 6 })}
                        id="standard-basic"
                        label="Password"
                        variant="standard"
                        className="form-control mt-3"
                    />
                    <div className="text-start">
                        <input type="checkbox" name="" onClick={() => setIsShowPassword(!isShowPassword)} /> show password
                    </div>
                    <br />
                    <input type="submit" value="Login" className="btn btn-primary mt-3 w-50" />
                    <br />
                    <p className="mt-4">Don't have an account? <Link to="/signIn">Create an account</Link></p>
                </form>
            </div>

            <h2 className="mt-4 mb-4 text-primary">--------------Or--------------</h2>
            <button onClick={googleSignInHandler} className="btn btn-primary">
                <span className="text-success bg-light rounded-circle p-2"><FontAwesomeIcon icon={faGoogle} /></span> Log in with Google
            </button>
        </div>
    );
};

export default Login;