import React from "react";
import "./Sidebar.css";

import { Link } from "react-router-dom";

function SidebarItem() {
  const activeLink = "";
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
            <Link to={""}>Home</Link>
          </span>
        </div>
        <div className="sideMenuItem_2">
          <span>
            <i className="bi bi-journal-medical"></i>
            <Link
              to={"voucher"}
              className="{({isActive})=> isActive ? activeLink : normalLink}"
            >
              Voucher
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SidebarItem;
