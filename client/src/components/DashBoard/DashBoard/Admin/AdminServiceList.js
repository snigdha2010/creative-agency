import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../../../App';
import Service from '../Customer/Service';

const AdminServiceList = () => {

    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const [ services, setServices ] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:9000/admin-order-list',{
            method: 'POST',
            headers:{ 'content-type': 'application/json' },
            body:JSON.stringify({email:signedInUser.email})
        })

        .then(res => res.json())
        .then(data => setServices(data))
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

export default AdminServiceList;