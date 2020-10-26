import React from 'react';
import logo from '../../../images/logos/logo.png';

const DashBoradHeader = () => {
    return (
        <div className='p-5'>
            <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/"><img style={{height:'50px'}} src={logo} alt=""/></a>
            <div className="navbar-nav mr-auto">
               <h5 className="ml-5 pl-5 mr-3" >Order</h5>
            </div>  
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <button className="btn btn-brand my-2 my-sm-0" type="submit">Login</button>
              </li>
              </ul>
            </div>
          </nav>
        </div>
    );
};

export default DashBoradHeader;