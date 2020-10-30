import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation, Redirect, Link } from 'react-router-dom';
import { handleGoogleSignIn, initializeFireBaseApp } from './LoginManager';
import logo from '../../images/logos/googoleLogo.svg';
import  brand from '../../images//logos/logo.png';
const LogIn = () => {

  
initializeFireBaseApp();

const { signedInUser, setSignedInUser } = useContext(UserContext);
const history = useHistory();
const location = useLocation(); 
const { from } = location.state || { from: { pathname: "/" } };
  

const googleSignIn = () => {
  handleGoogleSignIn()
    .then(res => {
        setSignedInUser({ ...res })
        history.replace(from)
    })
}

if(signedInUser){
    return <Redirect to ={from.pathname}></Redirect>
  }
    return (
      <div className='container mt-5' >
        <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="/"><img style={{height:'50px'}} src={brand} alt=""/></a> 
        </nav>
        <div className='row '>
        <div className='col-md-12 pt-5' style={{border: '1px solid grey',borderRadius:'5px', height:'200px'}}>
            <h5 className='p-2'>Login with</h5>
            <button className='p-2' style={{border: '1px solid grey',borderRadius:'30px',backgroundColor:'white'}} onClick={googleSignIn}>
             <span><img className="pr-5" src={logo} alt="logo"/>Continue with Google </span> </button>
            <p className='p-2'>Don't have an account? <Link >Create and Account</Link></p>
        </div>
        </div>
      </div>
    );
};

export default LogIn;