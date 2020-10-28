import React, { useEffect, useState } from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import service4 from '../../../images/icons/service4.png';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
    const [ services, setServices ] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:9000/services')
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