import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { UserContext } from '../../../../App';

const SideBar = () => {
    const [ signedInUser, setSignedInUser ] = useContext(UserContext);
    const [ admin,setAdmin ] = useState(false);
    useEffect(()=>{
        fetch('http://localhost:9000/isAdmin',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: signedInUser.email })
        })
        .then(res=>res.json())
        .then(data => setAdmin(data))
    },[])
    console.log(admin)
    return (
        <div className='pt-4'>
             <ul className='list-unstyled'>
                { !admin&&<div>
                     <li><Link to='/dashboard'>Order</Link></li>
                     <li><Link to='/dashboard/customer/service-list'>Service List</Link></li>
                     <li><Link to='/dashboard/review'>Review</Link></li>
                 </div>}
                { admin &&
                <div>
                     <li><Link to='/dashboard/admin/makeAdmin'>Make Admin</Link></li>
                     <li><Link to='/dashboard/admin/addServices'>Add Services</Link></li>
                     <li><Link to='/dashboard/admin/service-list'>Service List</Link></li>
                 </div>}

             </ul>
        </div>
    );
};

export default SideBar;