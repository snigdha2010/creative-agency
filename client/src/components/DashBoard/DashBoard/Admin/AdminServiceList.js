import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../../../App';
import ServiceList from './ServiceList';

const AdminServiceList = () => {

    const { signedInUser, setSignedInUser } = useContext(UserContext);
    const [ services, setServices ] = useState([]);
    useEffect(()=>{
        fetch('https://fast-bastion-55056.herokuapp.com/admin-order-list',{
            method: 'POST',
            headers:{ 'content-type': 'application/json' },
            body:JSON.stringify({email:signedInUser.email})
        })
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <>
        <h5 className='mt-3'>All Service List</h5>
        <div className='row p-5'>
            <ServiceList service = {services} ></ServiceList>
        </div></>
    );
};

export default AdminServiceList;