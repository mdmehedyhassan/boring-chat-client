import React from 'react';
import { Link } from 'react-router-dom';

const SendDetails = (props) => {
    const { time, receiverName, message, receiverEmail } = props.message;
    const presentGMTTime = new Date().toGMTString();
    const presentTime = Date.parse(presentGMTTime);
    const postTime = Date.parse(time);
    const differentTime = presentTime - postTime;
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const minutes = Math.floor(differentTime / minute);
    const hours = Math.floor(differentTime / hour);
    const days = Math.floor(differentTime / day);

    let postTimes;
    if (minutes < 60) {
        postTimes = minutes + ' minutes ago';
    }
    else if (hours < 24) {
        postTimes = hours + ' hours ago';
    }
    else if (days > 0) {
        postTimes = days + ' days ago';
    }
    else{
        postTimes = null;
    }
    return (
        <div className="">
            <div className="m-2 p-2 text-end message-global-style">
                <h5>
                    <Link to={`/profile/${receiverEmail}`} style={{textDecoration: 'none' }}>
                        {receiverName}
                    </Link>
                </h5>
                <p style={{ fontSize: 10 }}>{postTimes}</p>
                {message}
            </div>
        </div>
    );
};

export default SendDetails;