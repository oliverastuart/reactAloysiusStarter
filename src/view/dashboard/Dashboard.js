import React from "react";
import SideNav from "../../components/layouts/SideNav";
import { DASHBOARD } from "../../resources/constants/strings/string";
import "./Dashboard.css";
import Logo from "../../resources/assets/logo.png";
export default function Dashboard() {
  return (
    <SideNav CurrentComponent={DASHBOARD}>
      <div className="dashboard-container">
        <img src={Logo} alt=""></img>
        <h1>Welcome, Stuart!</h1>
        <p className="greeting-message">
          We're glad to see you here. Have a wonderful day!
        </p>
        {/* Add your dashboard content here */}
      </div>
    </SideNav>
  );
}
