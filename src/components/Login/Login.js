import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import {useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { faGoogle} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const handleSignOut = () => {
  return firebase.auth().signOut()
  .then(res => {
    const signedOutUser = {
      isSignedIn: false
    }
    return signedOutUser;
  }).catch(err => {
    // An error happened.
  });
}

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          const { displayName, email } = result.user;
          const signedInUser = { name: displayName, email }
          setLoggedInUser(signedInUser);
          storeAuthToken();
        }).catch(function (error) {
          const errorMessage = error.message;
          console.log(errorMessage);
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
      
    return (
        <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <hr className="mt-4"></hr>
          <h5 className="text-center">Or</h5>
          <div className="from-group mt-5 text-center">
            <button style={{backgroundColor: "#F8F8F8"}} className="btn" onClick={handleGoogleSignIn}>
              <FontAwesomeIcon style={{color:'green', marginRight:'5px'}} icon={faGoogle} />
               Sign in with Google
            </button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src='https://i.postimg.cc/pT4ZrRWg/Group-140.png' alt="" />
        </div>
      </div>

    </div>
    );
};

export default Login;