import React from 'react';
import './About.css';
import aboutImage from '../../images/NurImage.png';

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
            <div className="container row">
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
        </div>
    );
};

export default About;