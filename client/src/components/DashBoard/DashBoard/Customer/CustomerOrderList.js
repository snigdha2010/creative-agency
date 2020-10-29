import React, { useEffect, useState, useContext } from 'react';
import Service from './Service';
import { UserContext } from '../../../../App';

const ServiceList = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const [ services, setServices ] = useState([]);
    useEffect(()=>{
        fetch('https://fast-bastion-55056.herokuapp.com/customer-order-list',{
            method: 'POST',
            headers:{ 'content-type': 'application/json' },
            body:JSON.stringify({email:signedInUser.email})
        })
        .then(res=>res.json())
        .then(data =>{
            setServices(data)
        })
    },[])
    console.log(services)
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