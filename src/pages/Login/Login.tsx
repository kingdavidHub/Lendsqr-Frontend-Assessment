import { useState } from "react";
import styles from "./login.module.scss";
import LendqrLogo from "../../assets/lendsqr.svg";
import Illustration from "../../assets/pablo-sign-in.svg";
import { Link, useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.email && data.password) {
      navigate("/dashboard");
    }
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

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: {
                      message: "Email is required",
                      value: true,
                    },
                  })}
                />
                {errors.email && (
                  <span className={styles.formError}>
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.passwordInput}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password", {
                      required: {
                        message: "Password is required",
                        value: true,
                      },
                    })}
                  />
                  {errors.password && (
                    <span className={styles.formError}>
                      This field is required
                    </span>
                  )}
                  <button
                    type="button"
                    className={styles.showPassword}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>
              </div>

              <Link to="/" className={styles.forgotPassword}>
                FORGOT PASSWORD?
              </Link>

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
