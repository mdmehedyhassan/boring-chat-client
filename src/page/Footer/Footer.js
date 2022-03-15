import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className="border-top border-5 border-danger pt-3 mt-5 text-center">
            <p><small>C Mehedy Hassan 2022</small></p>
            <a href="https://mehedy-portfolio.web.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary m-1 rounded-circle">
                <FontAwesomeIcon icon={faUserTie} />
            </a>
            <a href="https://www.linkedin.com/in/md-mehedy-hassan-387278203/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary m-1 rounded-circle">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/mdmehedyhassan" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary m-1 rounded-circle">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.facebook.com/mehedysr" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary m-1 rounded-circle">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <br />
            <a href="https://github.com/mdmehedyhassan/boring-chat-client" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary m-1">Client code</a>
            <a href="https://github.com/mdmehedyhassan/boring-chat-server" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary m-1">Server code</a>

        </div>
    );
};

export default Footer;