import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import ReceiveDetails from '../ReceiveDetails/ReceiveDetails';

const Receive = () => {
    const { user } = useAuth();
    const [receiveMessage, setReceiveMessage] = useState([]);
    useEffect(() => {
        axios(`https://fierce-thicket-37124.herokuapp.com/receiveMessage/${user?.email}`)
            .then(res => {
                let getAllMessage = []
                res.data?.map(receive => getAllMessage = [receive, ...getAllMessage])
                setReceiveMessage(getAllMessage)
            })
    }, [user?.email]);
    return (
        <div>
            <h1 className="border-bottom border-4 text-center border-danger text-danger fw-bolder">Receiving Message</h1>
            {
                receiveMessage.map(message => <ReceiveDetails key={message._id} message={message}></ReceiveDetails>)
            }
        </div>
    );
};

export default Receive;