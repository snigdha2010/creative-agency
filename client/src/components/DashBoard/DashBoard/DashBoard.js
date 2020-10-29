import React from 'react';
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

const DashBoard = () => {
    return (
        <main>
            <DashBoradHeader/>
             <div className='row'>
            <div className='col-md-3'>
              <SideBar/>
            </div>
            <div style={{backgroundColor:'#E5E5E5'}} className='col-md-9'>
                
                    
                        <Route exact path={`/dashboard`}>
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