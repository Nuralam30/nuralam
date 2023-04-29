import React from 'react';
import { FaServicestack } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer bg-light p-2 pt-3'>
            <p className='text-center'><FaServicestack className='font-12' /> To get my services, find me on <a href="https://www.fiverr.com/nuralam30?up_rollout=true" target="_blank" rel="noopener noreferrer">Fiverr</a></p>
        </div>
    );
};

export default Footer;