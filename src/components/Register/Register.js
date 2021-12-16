import { useContext } from 'react';
import { useNavigate } from 'react-router';

import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';


const Register = () => {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(email, password)
            .then(authData => {
                login(authData);

                navigate('/');
            });
    }

    return (
        <div className="wrapper">
            <form id="register-form" method="POST" onSubmit={registerSubmitHandler}>
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