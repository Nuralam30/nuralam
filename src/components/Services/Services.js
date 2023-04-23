import React from 'react';
import './Services.css';
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
                        AllServices.map((service, i) => <div className="col-lg-4 col-md-6 col-12" key={i}>
                        <div className="service text-center">
                            <div className="service-icon blue">
                                {service.icon}
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