import React, {Component} from 'react';
import './SignUp.css';
// import { Link } from 'react-router-dom';

const url = "http://localhost:8901/register"

function ValidationMessage(props) {
    if(!props.valid){
        return(<div className="error-msg">{props.msg}</div>)
    }else {
        return null;
    }
}

class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            username:'',usernameValid:false,
            email:'',emailValid:false,
            password:'',passwordValid:false,
            passwordConfirmation:'',passwordConfirmationValid:false,
            formValid:false,
            error:{}
        }
    }

    ValidateForm = () => {
        const {usernameValid,emailValid,passwordValid,passwordConfirmationValid} = this.state;
        this.setState({
            formValid:usernameValid && emailValid && passwordValid && passwordConfirmationValid 
        })
    }

    updateUsername = (username) => {
        this.setState({username:username},this.validateUsername)
    }

    validateUsername = () => {
        const{username} = this.state;
        let usernameValid = true;
        let error = {...this.state.error}

        if(username.length < 3){
            usernameValid = false;
            error.username = "Username must be greater than 3 character"
        }

        this.setState({usernameValid, error}, this.validateForm)
    }

    updateEmail = (email) => {
        this.setState({email},this.validateEmail)
    }

    validateEmail = () => {
        const{email} = this.state;
        let emailValid = true;
        let error = {...this.state.error}

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            emailValid = false;
            error.email = "Invalid email Format"
        }
        this.setState({emailValid, error}, this.validateForm)
    }

    updatePassword = (password) => {
        this.setState({password},this.validatePassword);
    }

    validatePassword = () => {
        const{password} = this.state;
        let passwordValid = true;
        let error = {...this.state.error}
        
        if (password.length < 6){
            passwordValid = false;
            error.password = "Password must be at least 6 characters"
        } else if (!/\d/.test(password)){
            passwordValid = false;
            error.password = "Password must be 6 digits"
        } else if (!/[!@#$%^&*]/.test(password)){
            passwordValid = false;
            error.password = "Password must contain Special Characters"
        }
        this.setState({passwordValid, error}, this.validateForm)
    }

    updatePasswordConfirm = (passwordConfirmation) => {
        this.setState({passwordConfirmation},this.validatePasswordConfirm);
    }

    validatePasswordConfirm = () => {
        const{passwordConfirmation,password} = this.state;
        let passwordConfirmationValid = true;
        let error = {...this.state.error}

        if (password !== passwordConfirmation){
            passwordConfirmationValid = false;
            error.passwordConfirmation = "Password Donot match"
        }

        this.setState({passwordConfirmationValid,error}, this.validateForm)
    }

    handleChangeUname = (event) => {
        this.setState({username:event.target.value})
    }

    handleChangeEmailID = (event) => {
        this.setState({email:event.target.value})
    }

    handleChangePassword = (event) => {
        this.setState({password:event.target.value})
    }

    handleChangepasswordConfirmation = (event) => {
        this.setState({passwordConfirmation:event.target.value})
    }

    handleRegister = () => {
        console.log(this.state)
        if (this.state.email !== "" && this.state.password !== "" && this.state.username !== "" && this.state.passwordConfirmation !== "" ){//if email and password is not enterd then don't allow to dashboard page
            this.props.history.push('/login')
            }
        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    } 


    render(){
        return(
            <div>
                <div className="container1">
                    <div className="myCard">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="myLeftCtn">

                                    <form className="myForm text-center">
                                        <header>Create new Account</header>
                                        <div className="form-group">
                                            <ValidationMessage  valid={this.state.usernameValid} msg={this.state.error.username}/>
                                            <i className="fas fa-user"></i>
                                            <input className="myInput" type="text" placeholder="Username"
                                            id="username" value={this.state.username} onChange1={this.handleChangeUname} onChange={(e)=>this.updateUsername(e.target.value)} required></input>
                                            {/* <div className="invalid-feedback">Please fill out this field</div>                                     */}
                                        </div>

                                        <div className="form-group">
                                            <ValidationMessage  valid={this.state.emailValid} msg={this.state.error.email}/>
                                            <i className="fas fa-envelope"></i>
                                            <input className="myInput" type="text" placeholder="Email"
                                            id="email" value={this.state.email} onChange1={this.handleChangeEmailID} onChange={(e)=>this.updateEmail(e.target.value)} required></input>
                                            {/* <div className="invalid-feedback">Please fill out this field</div>                                     */}
                                        </div>

                                        <div className="form-group">
                                            <ValidationMessage  valid={this.state.passwordValid} msg={this.state.error.password}/>
                                            <i className="fas fa-lock"></i>
                                            <input className="myInput" type="password" placeholder="Password"
                                            id="password" value={this.state.password} onChange1={this.handleChangePassword} onChange={(e)=>this.updatePassword(e.target.value)} required></input>
                                            {/* <div className="invalid-feedback">Please fill out this field</div>                                     */}
                                        </div>

                                        <div className="form-group">
                                            <ValidationMessage  valid={this.state.passwordConfirmationValid} msg={this.state.error.passwordConfirmation}/>
                                            <i className="fas fa-lock"></i>
                                            <input className="myInput" type="password" placeholder="Confirm Password"
                                            id="password" value={this.state.passwordConfirmation} onChange={(e)=>this.updatePasswordConfirm(e.target.value)} onChange1={this.handleChangepasswordConfirmation} required></input>
                                            {/* <div className="invalid-feedback">Please fill out this field</div>                                     */}
                                        </div>

                                        

                                        <button type="submit" className="butt" onClick={this.handleRegister} value="">Create Account</button>
                                    </form>   
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="myRightCtn">
                                    <div className="box"><header>Welcome</header>
                                        <p className="text">
                                            Please Register here in Order To View Luxiourious
                                            Hotel Web Page Application
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default SignUp;