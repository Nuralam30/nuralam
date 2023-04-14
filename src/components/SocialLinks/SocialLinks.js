import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div>
            <a href="#facebook"><FaFacebook className='icon font-18' /></a>
            <a href="#twitter"><FaTwitter className='icon font-18' /></a>
            <a href="#linkedin"><FaLinkedin className='icon font-18' /></a>
            <a href="#instagram"><FaInstagram className='icon font-18' /></a>
            <a href="#instagram"><FaGithub className='icon font-18' /></a>
        </div>
    );
};

export default SocialLinks;