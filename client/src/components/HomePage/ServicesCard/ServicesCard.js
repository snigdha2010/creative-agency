import React from 'react';
import './ServiceCard.css';
import { useHistory } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const history = useHistory();
    return (
        <div onClick={()=>history.push(`/dashboard`)} className='col-md-4 mt-5 service-card p-3'>
            <div>
            {
                service.image &&  <img  src={`data:image/png;base64,${service.image.img}`} alt=""/>
            } 
            <h6>{service.title}</h6>
            <p><small>{service.description}</small></p>
            </div>
        </div>
    );
};

export default ServicesCard;