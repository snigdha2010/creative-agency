import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
    return (
        <div>
             <ul className='list-unstyled'>
                 <Link to='/dashboard'><li> Order</li></Link>
                 <Link to='/dashboard/service-list'><li> Service List</li></Link>
                 <Link to='/dashboard/review'><li>Review</li></Link> 
                 <Link to='/dashboard/admin/makeAdmin'><li>Make Admin</li></Link>
                 <Link to='/dashboard/admin/addServices'><li>Add Services</li></Link>
             </ul>
        </div>
    );
};

export default SideBar;