import { useNavigate, Navigate } from 'react-router-dom';
import * as authService from '../../services/authService';

const Login = ({
    onLogin
}) => {

    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password).
            then(authData => {
                console.log('Login');
                console.log(authData);
            })

        onLogin(email);
        navigate('/');
    };


    return (
        <div class="wrapper">
            <form class="form-signin" onSubmit={onLoginHandler} method='POST'>
                <h2 class="form-signin-heading">Please login</h2>
                <input type="text" class="form-control" name="email" placeholder="Email" required="" autofocus="" />
                <input type="password" class="form-control" name="password" placeholder="Password" required="" />
                <label class="checkbox">
                    <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
                </label>
                <button class="btn btn-lg btn-primary btn-block btn-authent" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;