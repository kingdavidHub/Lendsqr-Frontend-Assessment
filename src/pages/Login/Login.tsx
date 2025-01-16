import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./login.module.scss";
import LendqrLogo from "../../assets/lendsqr.svg";
import Illustration from "../../assets/pablo-sign-in.svg";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // function wait(max: number) {
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("resolved");
  //     }, max);
  //   });
  // }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login attempt:", formData);

    if (formData.email && formData.password) {
      navigate("/dashboard");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className={styles.pageContainer}>
        <div className={styles.leftSection}>
          <div className={styles.logo}>
            <img
              src={LendqrLogo}
              alt="Lendsqr Logo"
              className={styles.logoImage}
            />
          </div>
          <div className={styles.illustration}>
            <img
              src={Illustration}
              alt="Login Illustration"
              className={styles.illustrationImage}
            />
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.formContainer}>
            <h1>Welcome!</h1>
            <p className={styles.subtitle}>Enter details to login.</p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.passwordInput}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className={styles.showPassword}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>
              </div>

              <a href="/forgot-password" className={styles.forgotPassword}>
                FORGOT PASSWORD?
              </a>

              <button type="submit" className={styles.loginButton}>
                LOG IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
