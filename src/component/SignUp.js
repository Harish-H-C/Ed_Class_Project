import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
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
                                        <i className="fas fa-user"></i>
                                        <input className="myInput" type="text" placeholder="Username"
                                        id="username" required></input>
                                        {/* <div className="invalid-feedback">Please fill out this field</div>                                     */}
                                    </div>

                                    <div className="form-group">
                                        <i className="fas fa-envelope"></i>
                                        <input className="myInput" type="text" placeholder="Email"
                                        id="email" required></input>
                                        {/* <div className="invalid-feedback">Please fill out this field</div>                                     */}
                                    </div>

                                    <div className="form-group">
                                        <i className="fas fa-lock"></i>
                                        <input className="myInput" type="password" placeholder="Password"
                                        id="password" required></input>
                                        {/* <div className="invalid-feedback">Please fill out this field</div>                                     */}
                                    </div>

                                    <div className="form-group">
                                        <i className="fas fa-lock"></i>
                                        <input className="myInput" type="password" placeholder="Confirm Password"
                                        id="password" required></input>
                                        {/* <div className="invalid-feedback">Please fill out this field</div>                                     */}
                                    </div>

                                    

                                    <Link to="/login"><input type="submit" className="butt" value="Create Account"></input></Link>
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

export default SignUp;