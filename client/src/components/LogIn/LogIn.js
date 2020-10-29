import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { handleGoogleSignIn, initializeFireBaseApp } from './LoginManager';


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

 
  console.log(signedInUser)
    return (
        <div>
            <h5>Login with</h5>
            <button onClick={googleSignIn}>Continue with Google</button>
        </div>
    );
};

export default LogIn;