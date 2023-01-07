import React from "react";
import "./details.scss";
import TopDashboard from "../Dashboard/TopDashboard";
import SideDashboard from "../Dashboard/SideDashboard";
import UserDetails from "./UserDetails";

const Details = () => {
  return (
    <div className="details">
      <header>
        <TopDashboard />
      </header>
      <section className="details-section">
        <SideDashboard />
        <UserDetails />
      </section>
    </div>
  );
};

export default Details;
