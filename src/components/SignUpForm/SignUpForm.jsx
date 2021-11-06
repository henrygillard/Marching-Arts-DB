import { Component } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { signUp } from '../../utilities/users-service';
import { GoogleLogin } from 'react-google-login';
import "./SignUpForm.css";

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  

  handleChange = (evt) => {
    // Unlike setSomeState in function components which
    // REPLACE the state with the arg, setState in class components
    // MERGE the provided object with the existing
    // state object
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // We don't want to send the 'error' or the 
      // 'confirm state properties
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      // The promise returned by the signUp service methods
      // will resolve to the user object included in the
      // payload of the JSON Web Token
      const user = await signUp(formData);
      // Baby step
      this.props.setUser(user);
      
    } catch {
      // An error occurred
      this.setState({ error: 'Sign Up Failed - Try Again'});
    }
  };


 
 

  // Must override the render method
  // The render method takes the place of 
  // a function component, in that its job
  // is to return the UI as JSX
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div >
            <h3>Sign-Up</h3>
            
            <form className="form-container" autoComplete="off" onSubmit={this.handleSubmit}>
                <label className="field field_v3">
                    <input className="field__input" 
                        placeholder="e.g. DCIFan22"
                        type="text" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <span className="field__label-wrap">
                        <span className="field__label">Username</span>
                    </span>
                </label>
                <label className="field field_v3">
                    <input className="field__input" 
                        placeholder="e.g. melnik909@ya.ru"
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <span className="field__label-wrap">
                        <span className="field__label">Email</span>
                    </span>
                </label>
                <label class="field field_v2">
                    <input class="field__input" 
                        placeholder="e.g. Melnikov"
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        required 
                        />
                    <span class="field__label-wrap">
                    <span class="field__label">Password</span>
                    </span>
                </label>  
                <label class="field field_v2">
                    <input class="field__input" 
                        placeholder="e.g. Melnikov"
                        type="password" 
                        name="confirm" 
                        value={this.state.confirm} 
                        onChange={this.handleChange} 
                        required 
                        />
                    <span className="field__label-wrap">
                    <span className="field__label">Confirm</span>
                    </span>
                </label>  
                <button className="submit" type="submit" disabled={disable}>SIGN UP</button>
            </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}