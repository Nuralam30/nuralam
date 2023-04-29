import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div className='social-links'>
            <a href="https://web.facebook.com/nuralom.bhuiyain.1" target='_blank' rel='noreferrer'><FaFacebook className='icon font-18' /></a>
            <a href="https://twitter.com/NuraAla23500955" target='_blank' rel='noreferrer'><FaTwitter className='icon font-18' /></a>
            <a href="https://www.linkedin.com/in/nur-alam-5a10541b3/" target='_blank' rel='noreferrer'><FaLinkedin className='icon font-18' /></a>
            <a href="https://www.instagram.com/nuralom5107/" target='_blank' rel='noreferrer'><FaInstagram className='icon font-18' /></a>
            <a href="https://github.com/Nuralam30/" target='_blank' rel='noreferrer'><FaGithub className='icon font-18' /></a>
        </div>
    );
};

export default SocialLinks;