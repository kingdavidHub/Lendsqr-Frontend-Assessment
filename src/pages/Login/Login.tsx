import "./login.scss";
import lendsqrIcon from "../../assets/lendsqr.svg";
import pabloSignIn from "../../assets/pablo-sign-in.svg";
import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <>
    <Helmet>
      <title>Login</title>
    </Helmet>
      <section>
      <div className="login-container">
        <div className="innerWidth login-wrapper"></div>
        {/* right section */}
        <div className="innerWidth paddings flexColStart right-section">
          <img src={lendsqrIcon} alt="lendsqr logo" />

          <img src={pabloSignIn} alt="lendsqr pablo signin " />
        </div>

        {/* left section */}
        <div className="innerWidth paddings flexColCenter left-section">
          <div className="innerWidth flexColStart">
            <h1 className="primaryText">Welcome!</h1>
            <p className="secondaryText">Enter details to login.</p>
          </div>

          <form className="innerWidth form-control" aria-label="login form">
            <input
              className="input"
              name="email"
              type="email"
              placeholder="Email"
              aria-label="Email"
            />
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
            <span className="uppercase">
              <a href="#" aria-label="Forgot Password">
                Forgot Password ?
              </a>
            </span>
            <button type="submit" className="button" aria-label="Login">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};
export default Login;
