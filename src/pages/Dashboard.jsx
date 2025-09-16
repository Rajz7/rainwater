import React, { useState, useRef } from "react";
import ReportPage from "./ReportPage"; // Import your ReportPage
import "./Dashboard.css";

const Dashboard = () => {
  const [locationMode, setLocationMode] = useState("manual");
  const [location, setLocation] = useState("");
  const [roofArea, setRoofArea] = useState("");
  const [budget, setBudget] = useState("");
  const [height, setHeight] = useState("");
  const [showReport, setShowReport] = useState(false);
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
    setShowReport(true);
  };

  if (showReport) {
    return <ReportPage />;
  }

  return (
    <div className="dashboard-container">
      <form className="dashboard-form" onSubmit={handleSubmit}>
        {/* Location Input */}
        <div className="form-group location-group">
          <label>Enter your Location</label>
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

        {/* Roof Area Input */}
        <div className="form-group roof-area-group">
          <label>Enter Roof Area (sq. meters)</label>
          <div className="roof-area-inputs">
            <input
              type="number"
              min="0"
              placeholder="Enter area"
              value={roofArea}
              onChange={(e) => setRoofArea(e.target.value)}
              aria-label="Roof Area Input"
            />
            <button
              type="button"
              className="btn-secondary"
              onClick={() => alert("Please use the map to measure the roof area.")}
            >
              Use Google Earth on the side
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

        {/* Budget Input */}
        <div className="form-group">
          <label>Set Your Budget (INR)</label>
          <input
            type="number"
            min="0"
            placeholder="Enter budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            aria-label="Budget Input"
          />
        </div>

        {/* Height Input */}
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

        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
