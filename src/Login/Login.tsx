import "./login.scss";

const Login = () => {
  return (
    <section>
      <div className="login-container">
        <div className="innerWidth login-wrapper">
          {/* right section */}

          {/* left section */}
          <div className="innerWidth paddings flexColCenter  left-section">
            <div className="innerWidth">
              <h1>Welcome</h1>
              <p>Enter details to login.</p>
            </div>

            <form className="innerWidth form-control">
              <input className="input" name="email" type="email" placeholder="Email" />
              <input name="password" type="password" placeholder="Password" />
              <span>
                <a href="#">Forgot Password</a>
              </span>
              <button type="submit" className="button">Login</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
