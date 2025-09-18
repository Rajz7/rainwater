import React, { useState, useRef } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [locationMode, setLocationMode] = useState("manual");
  const [location, setLocation] = useState("");
  const [roofArea, setRoofArea] = useState("");
  const [budget, setBudget] = useState("");
  const [height, setHeight] = useState("");
  const [dwellers, setDwellers] = useState("");
  const [openSpace, setOpenSpace] = useState("");
  const [plotArea, setPlotArea] = useState("");
  const [savedProjects, setSavedProjects] = useState([]);
  const googleMapRef = useRef(null);

  const handleAutoDetect = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
        setLocationMode("auto");
      },
      (err) => alert("Could not get location: " + err.message)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || !roofArea) {
      alert("Please enter at least location and roof area");
      return;
    }
    // Generate report functionality - you can implement this later
    alert("ZBit Assessment Report would be generated here!");
  };

  const saveProject = () => {
    if (!location || !roofArea) {
      alert("Please enter at least location and roof area to save");
      return;
    }
    
    const project = {
      id: Date.now(),
      location,
      roofArea,
      budget,
      height,
      dwellers,
      openSpace,
      plotArea,
      date: new Date().toLocaleDateString(),
      status: "Draft"
    };
    
    setSavedProjects([...savedProjects, project]);
    alert("Project saved successfully!");
  };

  const loadProject = (project) => {
    setLocation(project.location);
    setRoofArea(project.roofArea);
    setBudget(project.budget);
    setHeight(project.height);
    setDwellers(project.dwellers);
    setOpenSpace(project.openSpace);
    setPlotArea(project.plotArea);
    setActiveSection("dashboard");
  };

  const clearForm = () => {
    setLocation("");
    setRoofArea("");
    setBudget("");
    setHeight("");
    setDwellers("");
    setOpenSpace("");
    setPlotArea("");
    setLocationMode("manual");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="dashboard-main">
            <div className="dashboard-header">
              <h2>ZBit Rainwater Assessment</h2>
              <div className="header-actions">
                <button type="button" onClick={saveProject} className="btn-save">
                  Save Project
                </button>
                <button type="button" onClick={clearForm} className="btn-clear">
                  Clear Form
                </button>
              </div>
            </div>

            <form className="dashboard-form" onSubmit={handleSubmit}>
              {/* Location Input */}
              <div className="form-group location-group">
                <label>Enter your Location *</label>
                <div className="location-inputs">
                  <input
                    type="text"
                    placeholder="Latitude, Longitude or Address"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      setLocationMode("manual");
                    }}
                    aria-label="Manual Location Input"
                    required
                  />
                  <button type="button" onClick={handleAutoDetect} className="btn-secondary">
                    Auto Detect Location
                  </button>
                  <button
                    type="button"
                    className={`btn-secondary ${locationMode === "map" ? "active" : ""}`}
                    onClick={() => setLocationMode("map")}
                  >
                    Pick on Map
                  </button>
                </div>
                {locationMode === "map" && (
                  <iframe
                    title="Google Maps Picker"
                    src={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${location || "20,77"}&zoom=15`}
                    className="map-iframe"
                    ref={googleMapRef}
                    allowFullScreen
                    loading="lazy"
                    style={{ border: 0 }}
                  />
                )}
              </div>

              {/* Additional User Info */}
              <div className="form-row">
                <div className="form-group">
                  <label>Number of Dwellers</label>
                  <input
                    type="number"
                    min="0"
                    placeholder="Enter number of people"
                    value={dwellers}
                    onChange={(e) => setDwellers(e.target.value)}
                    aria-label="Number of Dwellers"
                  />
                </div>
                <div className="form-group">
                  <label>Height of Building (meters)</label>
                  <input
                    type="number"
                    min="0"
                    placeholder="Enter height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    aria-label="Building Height Input"
                  />
                </div>
              </div>

              {/* Roof Area Input */}
              <div className="form-group roof-area-group">
                <label>Enter Roof Area (sq. meters) *</label>
                <div className="roof-area-inputs">
                  <input
                    type="number"
                    min="0"
                    placeholder="Enter area"
                    value={roofArea}
                    onChange={(e) => setRoofArea(e.target.value)}
                    aria-label="Roof Area Input"
                    required
                  />
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => alert("Please use the Google Earth integration to measure the roof area.")}
                  >
                    Use Google Earth
                  </button>
                </div>
                <iframe
                  title="Google Earth"
                  src="https://earth.google.com/web/"
                  className="earth-iframe"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Area Details */}
              <div className="form-row">
                <div className="form-group">
                  <label>Available Open Space (sq. meters)</label>
                  <input
                    type="number"
                    min="0"
                    placeholder="Enter open space area"
                    value={openSpace}
                    onChange={(e) => setOpenSpace(e.target.value)}
                    aria-label="Open Space Area"
                  />
                </div>
                <div className="form-group">
                  <label>Total Plot Area (sq. meters)</label>
                  <input
                    type="number"
                    min="0"
                    placeholder="Enter total plot area"
                    value={plotArea}
                    onChange={(e) => setPlotArea(e.target.value)}
                    aria-label="Plot Area"
                  />
                </div>
              </div>

              {/* Budget Input */}
              <div className="form-group">
                <label>Set Your Budget (INR)</label>
                <input
                  type="number"
                  min="0"
                  placeholder="Enter budget (optional)"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  aria-label="Budget Input"
                />
              </div>

              <button type="submit" className="btn-primary">
                Generate ZBit Assessment Report
              </button>
            </form>
          </div>
        );

      case "projects":
        return (
          <div className="projects-section">
            <h2>My ZBit Projects</h2>
            {savedProjects.length === 0 ? (
              <div className="empty-state">
                <p>No saved projects yet. Create and save your first ZBit assessment!</p>
              </div>
            ) : (
              <div className="projects-grid">
                {savedProjects.map((project) => (
                  <div key={project.id} className="project-card">
                    <h3>{project.location}</h3>
                    <p>Roof Area: {project.roofArea} sq.m</p>
                    <p>Budget: ₹{project.budget || "Not specified"}</p>
                    <p>Date: {project.date}</p>
                    <p>Status: <span className={`status ${project.status.toLowerCase()}`}>{project.status}</span></p>
                    <div className="project-actions">
                      <button onClick={() => loadProject(project)} className="btn-load">
                        Load Project
                      </button>
                      <button 
                        onClick={() => setSavedProjects(savedProjects.filter(p => p.id !== project.id))}
                        className="btn-delete"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case "calculator":
        return (
          <div className="calculator-section">
            <h2>ZBit Calculator</h2>
            <div className="calculator-info">
              <p>Use ZBit's advanced calculator to estimate rainwater harvesting potential:</p>
              <div className="calculator-formula">
                <h3>ZBit Formula:</h3>
                <p>Annual Harvesting = Roof Area × Average Rainfall × Runoff Coefficient</p>
                <p>Where Runoff Coefficient ≈ 0.8 for concrete roofs</p>
                <p>ZBit optimizes calculations based on local climate data and building specifications.</p>
              </div>
            </div>
          </div>
        );

      case "settings":
        return (
          <div className="settings-section">
            <h2>ZBit Settings</h2>
            <div className="settings-content">
              <h3>Application Preferences</h3>
              <p>Configure your ZBit experience with personalized settings and preferences.</p>
              <div className="settings-grid">
                <div className="setting-item">
                  <h4>Units</h4>
                  <p>Metric (meters, liters)</p>
                </div>
                <div className="setting-item">
                  <h4>Region</h4>
                  <p>India (INR currency)</p>
                </div>
                <div className="setting-item">
                  <h4>Notifications</h4>
                  <p>Project updates enabled</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="section-placeholder">
            <h2>ZBit {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
            <p>This ZBit feature is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>ZBit Dashboard</h2>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            <li className={activeSection === "dashboard" ? "active" : ""}>
              <button onClick={() => setActiveSection("dashboard")}>Assessment</button>
            </li>
            <li className={activeSection === "projects" ? "active" : ""}>
              <button onClick={() => setActiveSection("projects")}>My Projects</button>
            </li>
            <li className={activeSection === "calculator" ? "active" : ""}>
              <button onClick={() => setActiveSection("calculator")}>Calculator</button>
            </li>
            <li className={activeSection === "settings" ? "active" : ""}>
              <button onClick={() => setActiveSection("settings")}>Settings</button>
            </li>
          </ul>
        </nav>
        
        <div className="sidebar-footer">
          <div className="app-info">
            <p>ZBit Platform</p>
            <small>Powered by Smart Analytics</small>
          </div>
        </div>
      </div>
      
      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
