import React from "react";
import "./dashboard.scss";
import TopDashboard from "./TopDashboard";
import SideDashboard from "./SideDashboard";
import MainDashboard from "./MainDashboard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header>
        <TopDashboard />
      </header>
      <section className="dashboard-section">
        <SideDashboard />
        <MainDashboard />
      </section>
    </div>
  );
};

export default Dashboard;
