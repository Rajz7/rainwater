import React from "react";
import { useNavigate } from "react-router-dom";
// import "../index.css"; 
import './LandingPage.css';

const Card = ({ title, description, icon, children }) => (
  <div className="lp-card">
    {icon && <div className="lp-card-icon">{icon}</div>}
    <div className="lp-card-title">{title}</div>
    <div className="lp-card-desc">{description}</div>
    {children}
  </div>
);

const LandingPage = () => {
  const navigate = useNavigate();

  const openLoginPage = () => {
    navigate("/login");
  };

  const openSignupPage = () => {
    navigate("/signup");
  };

  return (
    <div className="lp-container">
      <header className="lp-navbar">
        <nav className="lp-nav-menu">
          <a href="#how" className="lp-link">How it works</a>
          {/* <a href="#pricing" className="lp-link">Pricing</a> */}
          <a href="#why" className="lp-link">Why it’s important</a>
          <a href="#about" className="lp-link">About us</a>
          <a href="#contact" className="lp-link">Contact</a>
        </nav>
        <div className="lp-nav-actions">
          <button className="lp-btn lp-login-btn" onClick={openLoginPage}>Login</button>
          <button className="lp-btn lp-signup-btn" onClick={openSignupPage}>Sign up</button>
        </div>
      </header>

      <main className="lp-main">
        <section className="lp-hero">
          <h1 className="lp-hero-title">
            Stop wasting, Start saving with <span className="lp-rwh">Rain Water Harvesting</span>
          </h1>
          <p className="lp-hero-desc">
            Boost efficiency, save time & money<br />with post meeting surveys.
          </p>
          <div className="lp-hero-actions">
            <button className="lp-btn lp-primary-btn">Get Started</button>
            <button
              className="lp-btn lp-google-btn"
              onClick={() => alert("Google signup is not implemented yet.")}
            >
              <span className="lp-btn-text">Sign up with Google</span>
            </button>
          </div>
        </section>

        <section id="how" className="lp-card-grid">
          <Card
            title="Google Map/Earth Integration"
            description="Analyze your rooftop area and calculate potential harvesting yield using satellite imagery and historical rainfall data."
          />
          <Card
            title="Customization & Design"
            description="Tailor the system components—filters, tanks, and conveyance—to fit your property’s needs and budget for maximum efficiency."
          />
          <Card
            title="Monitoring & Alerts"
            description="Receive real-time updates on water levels, system performance & maintenance reminders via app or email."
          />
        </section>

        <section id="why" className="lp-section">
          <h2 className="lp-section-title">Why it’s important?</h2>
          <p className="lp-section-desc">
            This paradox of "too much and too little" water exposes a fundamental flaw in our urban water management. Rainfall should be a solution, not a problem.<br />
            <strong className="lp-highlight">Rain Water Harvesting (RWH)</strong> is the practice of collecting and storing rainwater for on-site use.
          </p>
          <div className="lp-fact-cards">
            <Card
              title="70% Rain Water isn’t Harvested"
              description="Most rainwater is wasted in urban areas."
            />
            <Card
              title="Save up to 30% on your water bills"
              description="You can reduce dependence on municipal water supplies and cut your water bill expenses by up to 30% annually."
            />
            <Card
              title="Over 50% reduction in flood risk"
              description="Implementing rainwater harvesting systems can reduce urban flooding risk by over 50%, protecting your property and community during heavy rainfall."
            />
          </div>
        </section>

        <section id="about" className="lp-section lp-about">
          <h2 className="lp-section-title">About us</h2>
          <p>
            Welcome to our platform dedicated to empowering individuals and communities for effective rainwater harvesting. Sustainable water management is our goal.
          </p>
          <ul>
            <li>Regional language support</li>
            <li>Maintenance guidance</li>
            <li>Integration with government schemes</li>
            <li>Community-level planning</li>
            <li>Detailed report generation</li>
          </ul>
        </section>

        <section id="contact" className="lp-section lp-contact">
          <h2 className="lp-section-title">Contact</h2>
          <form className="lp-form">
            <input type="text" className="lp-input" placeholder="First Name" />
            <input type="text" className="lp-input" placeholder="Last Name" />
            <input type="email" className="lp-input" placeholder="Email" />
            <textarea className="lp-input" placeholder="Write your message" />
            <button type="submit" className="lp-btn lp-primary-btn">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="lp-footer">
        <nav>
          <a href="#terms" className="lp-footer-link">Terms & Conditions</a>
          <a href="#privacy" className="lp-footer-link">Privacy Policy</a>
          <a href="#faqs" className="lp-footer-link">FAQs</a>
        </nav>
        <div className="lp-footer-company">Rain Harvest Co. &copy; 2025</div>
      </footer>
    </div>
  );
};

export default LandingPage;