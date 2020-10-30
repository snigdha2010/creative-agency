import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { UserContext } from '../../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserPlus, faListAlt, faCommentDots, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

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
 
    return (
        <div className='pt-4'>
             <ul className='list-unstyled'>
                { !admin&&<div>
                    <li className='p-2'><Link className='list-unstyled' to='/dashboard/customer/order'>
                     <FontAwesomeIcon icon={faShoppingCart} /> <span className='p-2'>Order</span></Link></li>
                      <li className='p-2'><Link className='list-unstyled' to='/dashboard/customer/service-list'>
                     <FontAwesomeIcon icon={faListAlt} /> <span className='p-2'>Service List</span></Link></li>
                     <li className='p-2'><Link className='list-unstyled' to='/dashboard/review'>
                     <FontAwesomeIcon icon={faCommentDots} /><span className='p-2'>Review</span></Link></li>
                 </div>}
                { admin &&
                <div>
                     <li className='p-2'><Link className='list-unstyled ' to='/dashboard/admin/service-list'>
                    <FontAwesomeIcon icon={faListAlt} /> <span className='p-2'>Service List</span></Link></li>
                     <li className='p-2'><Link className='list-unstyled' to='/dashboard/admin/addServices'>
                     <FontAwesomeIcon icon={faPlus} /> <span className='p-2'>Add Services</span></Link></li>
                     <li className='p-2'><Link className='list-unstyled' to='/dashboard/admin/makeAdmin'>
                     <FontAwesomeIcon icon={faUserPlus} /> <span className='p-2'>Make Admin</span></Link></li>
                     </div>}
             </ul>
        </div>
    );
};

export default SideBar;