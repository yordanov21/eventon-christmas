import { useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

import * as authService from '../../services/authService';
import './Login.css';

const Login = () => {
    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password).
            then(authData => {

                login(authData);
                addNotification('You logged in successfully', types.success);
                navigate('/');
            })
            .catch(err => {
                addNotification(err, types.error);
            })
    };


    return (
        <div className="wrapper">
            <form className="form-signin" onSubmit={onLoginHandler} method='POST'>
                <h2 className="form-signin-heading">Please login</h2>
                <input type="text" className="form-control" name="email" placeholder="Email" required />
                <input type="password" className="form-control" name="password" placeholder="Password" required />

                <button className="btn btn-lg btn-primary btn-block btn-authent" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;