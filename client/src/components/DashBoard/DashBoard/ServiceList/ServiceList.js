import React, { useEffect, useState } from 'react';
import Service from './Service';

const ServiceList = () => {
    const [ services, setServices ] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:9000/service-list')
        .then(res=>res.json())
        .then(data =>{
            setServices(data)
        })
    },[])
    return (
        <div className='row p-5'>
            {
                services.map(service=><Service
                service = {service} key ={service._id}></Service>)
            }
        </div>
    );
};

export default ServiceList;