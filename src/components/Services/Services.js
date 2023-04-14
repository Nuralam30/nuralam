import React from 'react';
import './Services.css';
import { FaFacebook } from 'react-icons/fa';
import { AllServices } from './allServices';

const Services = () => {
    return (
        <div id='services'>
            <div className="container">
                <div className="row">
                    <div className="section-title mb-5">
                        <h1>SERVICES</h1>
                        <h4>SERVICES</h4>
                    </div>

                    {
                        AllServices.map(service => <div className="col-md-4">
                        <div className="service text-center">
                            <div className="service-icon">
                                <FaFacebook />
                            </div>
                            <h5 >{service.heading}</h5>
                            <p>{service.description}</p>
                        </div>
                    </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;