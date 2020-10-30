import React, { useState, useEffect, useContext } from 'react';
import DashBoradHeader from './DashBoradHeader';
import SideBar from './SideBar/SideBar';
import ServiceOrder from './Customer/CustomerOrder';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import ServiceList from './Customer/CustomerOrderList';
import CustomerReview from './Customer/Review';
import Admin from './Admin/AddAdmin';
import AddServices from './Admin/AddServices';
import AdminServiceList from './Admin/AdminServiceList';
import { UserContext } from '../../../App';

const DashBoard = () => {
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
        <main>
            <DashBoradHeader/>
             <div className='row'>
            <div className='col-md-3'>
              <SideBar/>
            </div>
            <div style={{backgroundColor:'#E5E5E5'}} className='col-md-9'>
                        {admin && <Route exact path={`/dashboard`}>
                             <AdminServiceList/>
                        </Route>}
                       {!admin && <Route exact path={`/dashboard`}>
                            <ServiceOrder/>
                        </Route>}
                        <Route exact path={`/dashboard/customer/order`}>
                            <ServiceOrder/>
                        </Route>
                        <Route path='/dashboard/customer/service-list'>
                            <ServiceList/>
                        </Route>
                        <Route path='/dashboard/review'>
                            <CustomerReview/>
                        </Route>
                        <Route path='/dashboard/admin/makeAdmin'>
                            <Admin/>
                        </Route>
                        <Route path='/dashboard/admin/addServices'>
                            <AddServices/>
                        </Route>
                        <Route path='/dashboard/admin/service-list'>
                            <AdminServiceList/>
                        </Route>
            </div> 
        </div>
        </main>
       
    );
};

export default DashBoard;