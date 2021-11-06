import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import * as userService from "../../utilities/users-service";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./AuthPage.css";



export default function AuthPage({user, setUser}) {
    const [showLogin, setShowLogin] = useState(true);


      
    
    return(
            <div className="video-container">
                <h4 style={{textDecoration:"underline"}}onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'New User? Sign up here' : 'Already have an account?'}</h4>
                {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
            </div>
    )
}