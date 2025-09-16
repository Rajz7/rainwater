import React from "react";
import jsPDF from "jspdf";
import "./ReportPage.css";

const ReportPage = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Rainwater Harvesting Report", 10, 10);
    doc.text("Best Technique: Hybrid (Storage Tanks + Groundwater Recharge)", 10, 20);
    doc.text("Total Cost: ₹ 1,50,000", 10, 30);
    doc.text("Recommended Products:", 10, 40);
    doc.text("- Rainwater Storage Tank - Amazon", 10, 50);
    doc.text("- Percolation Pit Kit - Amazon", 10, 60);
    doc.text("Government Schemes:", 10, 70);
    doc.text("Central Groundwater Recharge Scheme: Provides subsidies and technical support.", 10, 80);
    doc.text("Overview:", 10, 90);
    doc.text("Location: Pune, Maharashtra. Average annual rainfall 700 mm.", 10, 100);
    doc.text("Tips:", 10, 110);
    doc.text("- Regular maintenance is essential.", 10, 120);
    doc.text("- Use rainwater for non-potable purposes.", 10, 130);
    doc.text("Local Aquifer Info:", 10, 140);
    doc.text("Contact: Pune Water Board - 020-12345678", 10, 150);
    doc.text("Possible Savings: ₹ 35,000 per year.", 10, 160);
    doc.save("Rainwater_Harvesting_Report.pdf");
  };

  return (
    <div className="report-container">
      <h1>Rainwater Harvesting Report</h1>

      <section className="report-section">
        <h2>Best Technique</h2>
        <p>Hybrid (Storage Tanks + Groundwater Recharge)</p>
      </section>

      <section className="report-section">
        <h2>Total Cost</h2>
        <p>₹ 1,50,000</p>
      </section>

      <section className="report-section">
        <h2>Recommended Products</h2>
        <ul>
          <li>
            <a
              href="https://www.amazon.in/dp/B07XYZ1234"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rainwater Storage Tank (Amazon)
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.in/dp/B08ABC5678"
              target="_blank"
              rel="noopener noreferrer"
            >
              Percolation Pit Kit (Amazon)
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.in/dp/B09DEF9101"
              target="_blank"
              rel="noopener noreferrer"
            >
              Filtration System (Amazon)
            </a>
          </li>
        </ul>
      </section>

      <section className="report-section">
        <h2>Government Schemes</h2>
        <p>
          Central Groundwater Recharge Scheme: Provides subsidies and technical support.
          {" "}
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </p>
      </section>

      <section className="report-section">
        <h2>Overview</h2>
        <p>Location: Pune, Maharashtra. Average annual rainfall: 700 mm.</p>
      </section>

      <section className="report-section">
        <h2>Tips to Manage</h2>
        <ul>
          <li>Regular maintenance is essential.</li>
          <li>Use rainwater for non-potable purposes.</li>
          <li>Keep gutters and filters clean.</li>
        </ul>
      </section>

      <section className="report-section">
        <h2>Local Aquifer Info</h2>
        <p>Contact: Pune Water Board - 020-12345678</p>
        <p>Possible Annual Savings: ₹ 35,000</p>
      </section>

      <button className="btn-primary" onClick={generatePDF}>
        Download Report as PDF
      </button>
    </div>
  );
};

export default ReportPage;
