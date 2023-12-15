import React from "react";
import "./Sidebar.css";

import { Link } from "react-router-dom";

function SidebarItem() {
  return (
    <div className="sidebarItem">
      <div className="sidebarItem-header">
        <h3>Dashboard</h3>
      </div>
      <hr />
      <div className="sidebarMenuItem">
        <div className="sideMenuItem_1">
          <span>
            <i className="bi bi-house-fill"></i>
            Home
          </span>
        </div>
        <div className="sideMenuItem_2">
          <span>
            <i className="bi bi-journal-medical"></i>
            Voucher
          </span>
        </div>
      </div>
    </div>
  );
}

export default SidebarItem;
