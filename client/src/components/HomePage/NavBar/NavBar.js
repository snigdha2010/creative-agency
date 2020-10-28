import React, { useContext } from 'react';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const NavBar = () => {
  const [signedInUser, setSignedInUser] = useContext(UserContext);
  const handleSignOut = ()=>{
    sessionStorage.removeItem('token');
    setSignedInUser({});
  }
    return (
          <section className='p-5'>
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/"><img style={{height:'50px'}} src={logo} alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
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
                <li className="nav-item" >
                {
                  (signedInUser.name || sessionStorage.getItem('token')) && 
                    <li className="nav-item">
                    <span>{signedInUser.name}</span>
                    <Link to = '/'><button onClick={handleSignOut} className="btn btn-brand my-2 my-sm-0" type="submit">LogOut</button></Link>
                    
                  </li>
                }
                {
                  !(signedInUser.name || sessionStorage.getItem('token')) &&
                  <li className="nav-item">
                    <Link to = '/log-in'><button className="btn btn-brand my-2 my-sm-0" type="submit">Login</button></Link>
                  </li>
                }</li>
              </ul>
            </div>
          </nav>
          </section>

    );
};

export default NavBar;