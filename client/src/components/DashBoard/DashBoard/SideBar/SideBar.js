import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { UserContext } from '../../../../App';

const SideBar = () => {
    const { signedInUser, setSignedInUser } = useContext(UserContext);
    const [ admin,setAdmin ] = useState(false);
    useEffect(()=>{
        fetch('https://fast-bastion-55056.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: signedInUser.email })
        })
        .then(res=>res.json())
        .then(data => setAdmin(data))
    },[])
    const style = {
        textDecoration:'none',
        color:'black'
    }
    return (
        <div className='pt-4'>
             <ul className='list-unstyled'>
                { !admin&&<div>
                     <li><Link className='list-unstyled' to='/dashboard'>Order</Link></li>
                     <li><Link className='list-unstyled' to='/dashboard/customer/service-list'>Service List</Link></li>
                     <li><Link className='list-unstyled' to='/dashboard/review'>Review</Link></li>
                 </div>}
                { admin &&
                <div>
                     <li><Link className='list-unstyled' to='/dashboard/admin/makeAdmin'>Make Admin</Link></li>
                     <li><Link className='list-unstyled' to='/dashboard/admin/addServices'>Add Services</Link></li>
                     <li><Link className='list-unstyled' to='/dashboard/admin/service-list'>Service List</Link></li>
                 </div>}

             </ul>
        </div>
    );
};

export default SideBar;