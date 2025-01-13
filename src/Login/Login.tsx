import "./login.scss";
import lendsqrIcon from "../assets/lendsqr.svg";
import pabloSignIn from "../assets/pablo-sign-in.svg";

const Login = () => {
  return (
    <section>
      <div className="login-container">
        <div className="innerWidth  login-wrapper">
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

            <form className="innerWidth form-control">
              <input
                className="input"
                name="email"
                type="email"
                placeholder="Email"
              />
              <input
                className="input"
                name="password"
                type="password"
                placeholder="Password"
              />
              <span className="uppercase">
                <a href="#">Forgot Password ?</a>
              </span>
              <button type="submit" className="button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
