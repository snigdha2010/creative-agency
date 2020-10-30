
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeFireBaseApp = () =>{
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

initializeFireBaseApp()
export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
      .then(res => {
        const { displayName, email, photoURL} = res.user;
        const user = {
          name: displayName,
          email: email,
          photo: photoURL
        }
        return user;
      })
      .catch(error => {
        const errors = {}
        errors.error = error.message;
        return errors;
      });
  }

  export const handleSignOut = () => {
    return firebase.auth().signOut()
      .then(() => {
        return null;
      })
      .catch(error => {
        console.log(error)
      })
  }
export const  getCurrentUser = () => {
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          const { displayName, email, photoURL } = user;
          const currentUser = {
            name: displayName,
            email: email,
            photo: photoURL
          }
          resolve(currentUser)
          // ...
        } else {
          resolve(user)
        }
      });
    });
  }