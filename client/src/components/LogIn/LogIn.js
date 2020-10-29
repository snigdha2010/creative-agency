import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const LogIn = () => {

// Initialize Firebase
const initializeFireBaseApp = () =>{
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}
initializeFireBaseApp();

const [ signedInUser, setSignedInUser ] = useContext(UserContext);
const history = useHistory();
const location = useLocation(); 
const { from } = location.state || { from: { pathname: "/" } };
  

const handleSubmit = () =>{
    var provider = new firebase.auth.GoogleAuthProvider(); 
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        console.log('signed in',result)
        const {displayName, email,photoURL} = result.user;
        const user = {name:displayName, email, image:photoURL} 
        const newUser = {...user}
        setSignedInUser(newUser)
        storeAuthToken();
      }).catch(function(error) {
        console.log(error.message)
      });
}
const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }
  console.log(signedInUser)
    return (
        <div>
            <h5>Login with</h5>
            <button onClick={handleSubmit}>Continue with Google</button>
        </div>
    );
};

export default LogIn;