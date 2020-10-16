import React, { useContext } from 'react';
import "./Login.css"
import * as firebase from "firebase/app";
import googleIcon from "../../../images/google.png"
import mainLogo from "../../../images/logos/creativeLogo.png"
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useState } from 'react';



const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
  const history = useHistory();
  const location = useLocation()
  const { from } = location.state || { from: { pathname: "/" } };

  if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }

    const handleGoogleLogin = ()=>{
       const provider = new firebase.auth.GoogleAuthProvider();
       firebase.auth().signInWithPopup(provider).then(function(result) {
         console.log(result)
        const{displayName, email, photoURL} = result.user;
        const signedInUser = {name: displayName, email, userImg: photoURL}
        setLoggedInUser(signedInUser);
        history.push(from);
      }).catch(function(error) {
        
        var errorMessage = error.message;
        console.log(errorMessage)
      });
    }

    return (
        <section>
          <div className="text-center mt-5">
            <img style={{height:"40px"}} src={mainLogo} alt=""/>
          </div>
          <div className="loginFrom text-center mt-5">
          <h4 className="mt-5 pt-5"> Login with </h4>
            <button className="loginBtn" onClick={handleGoogleLogin}> <img className="mr-5 pr-5" style={{height: '30px'}} src={googleIcon} alt=""/> <span className="googleText">Continue with Google</span> </button>
            <p>Don't have account <Link to="/login">create an account</Link> </p>
          </div>
        </section>
    );
};

export default Login;