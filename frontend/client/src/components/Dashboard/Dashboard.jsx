import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Dashboard.css";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Home from "../../pages/home/Home";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="main">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
