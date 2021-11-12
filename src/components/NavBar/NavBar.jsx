import { Link } from "react-router-dom";
import { useState, React } from "react";
import * as userService from "../../utilities/users-service";
import { GoogleLogout } from 'react-google-login';
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import "./NavBar.css"




export default function NavBar({user, setUser}) {
    const [showLogin, setShowLogin] = useState(true);

    function handleLogOut() {
        // Delegate to the userService
        userService.logOut();
        // Update state will cause a re-render
        setUser(null);
    }

    

      
    
    return(
        <header id="header">
            { user ? 
            <div className="greeting">
                <h3>Hello, {user.name}!</h3>
                <div><Link className="links" to={`/profile/${user._id}`}>Profile</Link></div>
                <div onClick={handleLogOut}><Link to="/" className="links">Log Out</Link></div>
            </div>
            : 
            <div>
                <Link className="links" to="/login">Sign Up/Log In</Link> 
            </div>
            }
            <h1>Marching Arts Database</h1>
            <img src="https://i.imgur.com/lm5NWj5.png" />
            <Link className="link" to="/groups"><h3>Home</h3></Link>
        </header>
    )
}