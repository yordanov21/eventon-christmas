const Login = () => {

    return (
        <div class="wrapper">
            <form class="form-signin">
                <h2 class="form-signin-heading">Please login</h2>
                <input type="text" class="form-control" name="email" placeholder="Email Address" required="" autofocus="" />
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