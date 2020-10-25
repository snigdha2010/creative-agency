import React from 'react';
import logo from '../../../images/logos/logo.png';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="/"><img style={{height:'50px'}} src={logo} alt=""/></a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link mr-3" href="/home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link mr-3" href="/portfolio">Our Portfolio</a>
      </li> 
      <li className="nav-item">
        <a className="nav-link mr-3" href="/team">Our Team</a>
      </li> 
      <li className="nav-item">
        <a className="nav-link mr-3" href="/contact">Contact us</a>
      </li> 
      <li className="nav-item">
      <button className="btn btn-brand my-2 my-sm-0" type="submit">Login</button>
    </li>
     
    </ul>
    
  </div>
</nav>
    );
};

export default NavBar;