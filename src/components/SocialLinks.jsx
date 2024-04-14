import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
    return (
        <div className='socialLinks'>
            <a href="https://www.instagram.com/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="custom-icon" />
            </a>
            <a href="https://www.linkedin.com/in/" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} className="custom-icon" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} className="custom-icon" />
            </a>
        </div>
    );
};

export default SocialLinks;