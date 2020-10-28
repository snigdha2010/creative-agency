import React from 'react';

const Service = ({service}) => {
    return (
        
            <div className='col-md-6'>
                <div className='card pt-3'>
                { service.image && 
                <img style={{height: '200px'}}  src={`data:image/png;base64,${service.image.img}`} alt=""/>
                }  
                <h5>{service.name}</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, itaque!</p>
                </div>

            </div>
      
    );
};

export default Service;