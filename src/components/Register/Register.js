import { useContext } from 'react';
import { useNavigate } from 'react-router';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

const Register = () => {

    const navigate = useNavigate();
    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let { email, password, rememberMe } = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(email, password)
            .then(authData => {
                if (rememberMe) {
                    login(authData);
                }

                navigate('/');
            })
            .catch(err => {
                console.log('Catch error: ', err);
                addNotification(err, types.error);
                // navigate('/');
            });
    }

    return (
        <div className="wrapper">
            <form id="form-register" className='form-register' method="POST" onSubmit={registerSubmitHandler}>
                <h2 className="form-register-heading">Register</h2>
                <input type="text" className="form-control" name="email" placeholder="Email" required="" autofocus="" />
                <input type="password" className="form-control" name="password" placeholder="Password" required="" />
                <input type="password" className="form-control" name="repassword" placeholder="Re-Password" required="" />
                <label className="checkbox">
                    <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
                </label>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;