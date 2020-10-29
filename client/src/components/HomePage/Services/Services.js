import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
    const [ services, setServices ] = useState([]);
    useEffect(()=>{
        fetch('https://fast-bastion-55056.herokuapp.com/services')
        .then(res=> res.json())
        .then(data => {
            setServices(data);
        })
    },[])
    return (
        <section className='container text-center mt-5 pt-5 mb-5'>
            <h5>Provide awesome <span style={{color:'#7AB259'}}> services</span></h5>
            <div className='row pt-5'>
                {
                    services.map(service =><ServicesCard key= {service._id}
                    service = {service}
                    ></ServicesCard>)
                }
            </div>
        </section>
    );
};

export default Services;