import React from 'react';
import './About.css';
import aboutImage from '../../images/NurImage.png';
import { skills } from './Skills';
import { education } from './Education';

const About = () => {

    const birthDate = "1998-11-12";

    const calculateAge = date => {
        const today = new Date().getTime();
        const birthday = new Date(date).getTime();
        const age_mili = Math.abs(today - birthday);

        let days = Math.floor(age_mili / (1000 * 3600 * 24));
        let years = Math.floor(days / 365);
        days -= years * 365;
        let months = Math.floor(days / 31);
        days -= months * 31;

        return `${years} years, ${months} months, ${days} days!`;
    };

    const age = calculateAge(birthDate);


    return (
        <div id='about'>
            <div className="container">
                <div className="row">
                    <div className="section-title mb-5">
                        <h1>ABOUT</h1>
                        <h4>ABOUT</h4>
                    </div>
                    <div className="col-md-6">
                        <div className="about-image">
                            <img src={aboutImage} alt="about-me-here" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-content">
                            <p className='font-12 gray text-justify'>My name is <span className='font-14 blue'>Nura Alam</span>. Proffessionally, I am a UI/UX designer and Web Developer. I'm working on web design and development for more than 3 years.</p>

                            <div className="row about-info mt-4 font-12 gray">
                                <div className="col-md-6">
                                    <p><span>Name: </span> Nura Alam</p>
                                    <p><span>Age: </span> {age}</p>
                                    <p><span>Nationality: </span> Bangladeshi</p>
                                </div>
                                <div className="col-md-6">
                                    <p><span>Freelance: </span> Available</p>
                                    <p><span>Phone: </span> +8801854405107</p>
                                    <p><span>Address: </span> Noadda, Daudkandi, Cumilla, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="skills">
                        <h3 className='sub-title mb-4'>Skills</h3>
                        {
                            skills.map(sk => <div className="skill mb-4">
                            <div className="skill-content d-flex justify-content-between">
                                <p>{sk.name}</p>
                                <p>{sk.skill}</p>
                            </div>
                            <div className="skill-bar">
                                <div className="bar" style={{width: sk.skill}}></div>
                            </div>
                        </div>)
                        }
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="educations">
                            <h3 className="sub-title mb-4">Education</h3>
                            {
                                education.map(edu => <div className="education">
                                <h5>{edu.degree}</h5>
                                <h6 className='font-12 blue mb-1'>{edu.passYear}</h6>
                                <p className='gray font-11'>{edu.description}</p>
                            </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;