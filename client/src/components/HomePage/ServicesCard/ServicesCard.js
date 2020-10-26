import React from 'react';
import './ServiceCard.css';

const ServicesCard = ({service}) => {
    return (
        <div className='col-md-4 mt-5 service-card p-3'>
            <div>
            <img src={service.img} alt=""/>
            <h6>{service.title}</h6>
            <p><small>{service.description}</small></p>
            </div>
        </div>
    );
};

export default ServicesCard;