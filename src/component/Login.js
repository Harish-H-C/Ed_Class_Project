import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div>
            <div className="container1">
                <div className="myCard">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="myLeftCtn">

                                <form className="myForm text-center">
                                    <header>Login</header>

                                    <div className="form-group">
                                        <i className="fas fa-envelope"></i>
                                        <input className="myInput" type="text" placeholder="Email"
                                        id="email" required></input>                                    
                                    </div>

                                    <div className="form-group">
                                        <i className="fas fa-lock"></i>
                                        <input className="myInput" type="password" placeholder="Password"
                                        id="password" required></input>
                                    </div>

                                    <Link to="/home"><input type="submit" className="butt" value="Login"></input></Link>
                                </form>   
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="myRightCtn">
                                <div className="box"><header>Welcome</header>
                                    <p className="text">
                                        Login With Correct Email Id & Password
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

export default Login;