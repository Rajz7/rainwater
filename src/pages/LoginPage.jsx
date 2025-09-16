import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // For testing, just navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <main className="lp-container lp-main">
      <section className="lp-section lp-login-section">
        <h2 className="lp-section-title">Login to Your Account</h2>
        <form className="lp-form" aria-label="Login form" onSubmit={handleLogin}>
          <input
            className="lp-input"
            type="email"
            name="email"
            placeholder="Email address"
            aria-required="true"
            aria-label="Email address"
          />
          <input
            className="lp-input"
            type="password"
            name="password"
            placeholder="Password"
            aria-required="true"
            aria-label="Password"
          />
          <button type="submit" className="lp-btn lp-primary-btn">Log In</button>
          <button type="button" className="lp-btn lp-google-btn">
            Log in with Google
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
