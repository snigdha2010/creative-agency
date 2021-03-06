import React, { useContext, useState } from 'react';
import logo from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

const DashBoradHeader = () => {

  const { signedInUser, setSignedInUser, googleSignOut } = useContext(UserContext);
        return (
        <div className='pt-5 pl-5'>
            <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/"><img style={{height:'50px'}} src={logo} alt=""/></a> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                {
                  signedInUser&& 
                    <li className="nav-item">
                    <span className='pr-1'>{signedInUser.name}</span>
                    <Link to = '/'><button onClick={googleSignOut} className="btn btn-brand my-2 my-sm-0" type="submit">LogOut</button></Link>
                    
                  </li>
                }
                {
                  !signedInUser &&
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