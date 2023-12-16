import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login/Login";
import Dashboard from "../Dashboard/Dashboard";

function Layout() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default Layout;
