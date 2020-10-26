import React from 'react';
import './ServiceCard.css';

const ServicesCard = ({service}) => {
    return (
        <div className='col-md-4 p-3 mt-5 service-card'>
            <div>
            <img height='50px' src={service.img} alt=""/>
            <h6 className='pt-3'>{service.title}</h6>
            <p><small>{service.description}</small></p>
            </div>
        </div>
    );
};

export default ServicesCard;