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

        let { email, password, repassword, rememberMe } = Object.fromEntries(new FormData(e.currentTarget));

        console.log(Object.fromEntries(new FormData(e.currentTarget)));


        if (!email.match(/(.+)@(.+){2,}\.(.+){2,}/)) {
            addNotification('Email should be in proper format (mailboxname @ domainname) - username@domain.bg"', types.warn);
            return;
        }

        if (password.length < 6) {

            addNotification('Password should be min 6 characters long!', types.warn);
            return;
        }

        if (password !== repassword) {

            addNotification('Password and Re-Password should match!', types.error);
            return;
        }

        authService.register(email, password)
            .then(authData => {
                if (rememberMe) {
                    login(authData);
                    addNotification('You have successfully registered and login', types.success);
                    navigate('/');
                } else {
                    addNotification('You have successfully registered', types.success);
                    navigate('/login');
                }
            })
            .catch(err => {
                console.log('Catch error: ', err);
                addNotification(err, types.error);
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