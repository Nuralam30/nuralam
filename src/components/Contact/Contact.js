import React from 'react';
import './Contact.css';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa';
import SocialLinks from './../SocialLinks/SocialLinks';

const Contact = () => {
    return (
        <div id='contact'>
            <div className="container">
                <div className="row">
                    <div className="section-title mb-5">
                        <h1>contact</h1>
                        <h4>contact</h4>
                    </div>

                    <h4 className='mb-3'>Find me on</h4>
                    <div className="col-md-4 col-12">
                        <div className="contact-links">
                            <div className="link">
                                <FaFacebook className='font-16 blue' />
                                <a href="https://web.facebook.com/nuralom.bhuiyain.1" target='_blank' rel='noreferrer'>NurAlam Bhuiyain </a>
                            </div>
                            <div className="link">
                                <FaLinkedin className='font-16 blue' />
                                <a href="https://www.linkedin.com/in/nur-alam-5a10541b3/" target='_blank' rel='noreferrer'>in/nur-alam</a>
                            </div>
                            <div className="link">
                                <FaInstagram className='font-16 blue' />
                                <a href="https://www.instagram.com/nuralom5107/" target='_blank' rel='noreferrer'>instagram.com/nuralom5107</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="contact-links">
                            <div className="link">
                                <FaGithub className='font-16 blue' />
                                <a href="https://github.com/Nuralam30/" target='_blank' rel='noreferrer'>github.com/Nuralam30</a>
                            </div>
                            <div className="link">
                                <FaTwitter className='font-16 blue' />
                                <a href="https://twitter.com/NuraAla23500955" target='_blank' rel='noreferrer'>@NuraAla23500955</a>
                            </div>
                            <div className="link">
                                <FaStackOverflow className='font-16 blue' />
                                <a href="https://stackoverflow.com/users/21362808/nura-alam?tab=profile" target='_blank' rel='noreferrer'>@nura-alam</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-12">
                        <div className="social-contacts">
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;