import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignInHandler } = useAuth();
    const location = useLocation();
    return (
        <div className="text-center mt-4 mb-4 ">
            {
                location?.pathname === '/login' ?
                    ''
                    :
                    <div>
                        <h3>Please Sign in or Login then get services</h3>
                    </div>
            }

            <button onClick={googleSignInHandler} className="btn btn-primary">
                <FontAwesomeIcon icon={faGoogle} />oogle Sign in
            </button>
        </div>
    );
};

export default Login;