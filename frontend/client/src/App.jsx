import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./components/login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./pages/home/Home";
import Voucher from "./pages/voucher/Voucher";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<Home />} />
            <Route path="voucher" element={<Voucher />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
