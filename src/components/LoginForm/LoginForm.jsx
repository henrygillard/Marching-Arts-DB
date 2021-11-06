import { useState, React } from 'react';
import { useHistory } from 'react-router';
import * as usersService from '../../utilities/users-service';
import { useGoogleLogin } from "react-google-login";
import "./LoginForm.css"

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const history = useHistory();

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      history.push("/groups");
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

    
    


  return (
    <div>
      <div  onSubmit={handleSubmit}>
          <h3 >Log In</h3>
        <form className="form-container" autoComplete="off" >
        <label className="field field_v3">
                <input className="field__input" 
                    placeholder="e.g. melnik909@ya.ru"
                    type="email" 
                    name="email" 
                    value={credentials.email} 
                    onChange={handleChange} 
                    required 
                />
                <span className="field__label-wrap">
                    <span className="field__label">E-mail</span>
                </span>
            </label>
            <label class="field field_v2">
                <input class="field__input" 
                    placeholder="e.g. Melnikov"
                    type="password" 
                    name="password" 
                    value={credentials.password} 
                    onChange={handleChange} 
                    required 
                    />
                <span class="field__label-wrap">
                <span class="field__label">Password</span>
                </span>
            </label>  
          <button className="submit" type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}