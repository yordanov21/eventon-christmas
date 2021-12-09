const Register = () => {

    return (
        <div class="wrapper">
            <form class="form-register">
                <h2 class="form-register-heading">Register</h2>
                <input type="text" class="form-control" name="email" placeholder="Email Address" required="" autofocus="" />
                <input type="password" class="form-control" name="password" placeholder="Password" required="" />
                <input type="password" class="form-control" name="repassword" placeholder="Re-Password" required="" />
                <label class="checkbox">
                    <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
                </label>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;