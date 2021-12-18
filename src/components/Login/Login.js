import { useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import * as authService from '../../services/authService';

const Login = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password).
            then(authData => {

                login(authData);

                navigate('/');
            })
            .catch(err => {
                // TODO: show notification
                console.log(err);
            })
    };


    return (
        <div className="wrapper">
            <form className="form-signin" onSubmit={onLoginHandler} method='POST'>
                <h2 className="form-signin-heading">Please login</h2>
                <input type="text" className="form-control" name="email" placeholder="Email" required="" autofocus="" />
                <input type="password" className="form-control" name="password" placeholder="Password" required="" />
                <label className="checkbox">
                    <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
                </label>
                <button className="btn btn-lg btn-primary btn-block btn-authent" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;