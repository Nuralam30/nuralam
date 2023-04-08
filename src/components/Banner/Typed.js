import React from 'react';
import TypedJs from "react-typed";

const textLines = [
    `<i>Web Desiner</i>`,
    `<i>Web Developer</i>`,
    `Graphic Designer`,
    `Freelancer`,
    `Photographer`
  ];

const Typed = () => {
    return ( 
        <p className='font-14 blue'>
            <TypedJs strings={textLines} typeSpeed={60} backSpeed={50} endDelay={100} loop={true} />
        </p>
    );
};

export default Typed;