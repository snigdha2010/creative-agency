import React, { useEffect, useState, useContext } from 'react';
import Service from './Service';
import { UserContext } from '../../../../App';

const ServiceList = () => {
    const {signedInUser, setSignedInUser} = useContext(UserContext);
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
    return (
        <>
        <h5 className='mt-3'>Service List</h5>
        <div className='row p-5'>
            {
                services.map(service=><Service
                service = {service} key ={service._id}></Service>)
            }
        </div>
        </>
    );
};

export default ServiceList;