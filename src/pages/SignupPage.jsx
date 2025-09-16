import React from "react";
import "./SignupPage.css";

const SignupPage = () => {
  return (
    <main className="lp-container lp-main">
      <section className="lp-section lp-signup-section">
        <h2 className="lp-section-title">Create Your Account</h2>
        <form className="lp-form" aria-label="Signup form">
          <input
            className="lp-input"
            type="text"
            name="name"
            placeholder="Full Name"
            required
            aria-required="true"
            aria-label="Full Name"
          />
          <input
            className="lp-input"
            type="email"
            name="email"
            placeholder="Email address"
            required
            aria-required="true"
            aria-label="Email address"
          />
          <input
            className="lp-input"
            type="password"
            name="password"
            placeholder="Password"
            required
            aria-required="true"
            aria-label="Password"
          />
          <input
            className="lp-input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            aria-required="true"
            aria-label="Confirm Password"
          />
          <button type="submit" className="lp-btn lp-primary-btn">
            Sign Up
          </button>
          <button type="button" className="lp-btn lp-google-btn">
            Sign up with Google
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignupPage;
