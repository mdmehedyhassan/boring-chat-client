import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import SendDetails from '../SendDetails/SendDetails';

const Send = () => {
    const { user } = useAuth();
    const [sendMessage, setSendMessage] = useState([]);
    useEffect(() => {
        axios(`http://localhost:5000/sendMessage/${user?.email}`)
            .then(res => {
                let getAllMessage = []
                res.data?.map(send => getAllMessage = [send, ...getAllMessage])
                setSendMessage(getAllMessage)
            })
    }, [user?.email]);
    return (
        <div>
            <h1 className="border-bottom border-4 text-center border-danger text-danger fw-bolder">Sending Message</h1>
            {
                sendMessage.map(message => <SendDetails key={message._id} message={message}></SendDetails>)
            }
        </div>
    );
};

export default Send;