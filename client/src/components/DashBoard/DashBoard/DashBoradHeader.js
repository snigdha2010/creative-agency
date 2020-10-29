import React, { useContext, useState } from 'react';
import logo from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';
import { Link, useLocation } from 'react-router-dom';

const DashBoradHeader = () => {

  const [ signedInUser, setSignedInUser ] = useContext(UserContext);
  const location = useLocation();
  const handleSignOut = ()=>{
    sessionStorage.removeItem('token');
    setSignedInUser({});
  }
  // const handleHeader = ()=> {
  //   if(`${location.pathname.includes('/dashboard/admin/')}`){
  //    setHeader('Order')
  //   }
  //   if(`${location.pathname.includes('/dashboard/service-list')}`){
  //     setHeader('Service List')
  //    }
  // }
  // handleHeader();
  
  console.log(signedInUser)
        return (
        <div className='pt-5 pl-5'>
            <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/"><img style={{height:'50px'}} src={logo} alt=""/></a>
            <div className="navbar-nav mr-auto">
              <h5 className='ml-5 pl-5 mr-3' >{location.pathname.includes('/dashboard/admin/')?'AddService':'Order'}</h5>
            </div>  
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                {
                  ( sessionStorage.getItem('token')) && 
                    <li className="nav-item">
                    <span>{signedInUser.name}</span>
                    <Link to = '/'><button onClick={handleSignOut} className="btn btn-brand my-2 my-sm-0" type="submit">LogOut</button></Link>
                    
                  </li>
                }
                {
                  !(sessionStorage.getItem('token')) &&
                  <li className="nav-item">
                    <Link to = '/dashboard'><button className="btn btn-brand my-2 my-sm-0" type="submit">Login</button></Link>
                  </li>
                }
              </li>
              </ul>
            </div>
          </nav>
        </div>
    );
};

export default DashBoradHeader;