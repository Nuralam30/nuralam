import React from 'react';
import Typed from './Typed';
import './Banner.css';
import bannerImg from '../../images/banner.png';
import SocialLinks from '../SocialLinks/SocialLinks';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <span className='dev-name'>Hi, I am <h3  className='blue font-lobster'>Nura Alam</h3></span>
                        <div className="my-text"></div>
                        <span className="dev-expertise d-flex">
                            <p className="font-12">I'm a<span>&nbsp; </span></p> 
                            <Typed />
                        </span>
                        <p className='banner-text font-12 gray'>For the last 3 years I'm working in Web Design & Development and gather a high knowledge in Front-End web development.</p>
                        <button className='btn btn-sm btn-secondary'>Download CV</button>

                        <div className="social-liks mt-4">
                            <SocialLinks />
                        </div>
                    </div>

                    <div className="col-md-6 text-center">
                        <div className="banner-image">
                            <img src={bannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;