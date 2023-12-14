import React, { useState, useEffect } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

import Validation from "./LoginValidation";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  // const [loginUsername, setLoginUsername] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();

  const [errors, setErrors] = useState("");

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    e.preventDefault();
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const loginUser = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    axios
      .post("http://localhost:4000/api/login/login", values)
      .then((response) => {
        if (response.data === "success") {
          if (values.username === "" || values.password === "") {
            console.log(response.data);
          } else {
            alert(response.data);
            navigate("/dashboard");
          }
        }

        if (response.data === "user not exists") {
          navigate("/");
          alert(response.data);
          console.log(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // axios.get("http://localhost:4000/api/login/getAllUser").then((response) => {
    //   console.log(response.data);
    // });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow-sm my-5">
              <div className="card-body p-0">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="login-form">
                      <div className="text-center">
                        <h1 className="login-heading text-gray-900 mb-4">
                          Login
                        </h1>
                      </div>
                      <form action="" className="user" onSubmit={loginUser}>
                        <div className="form-group p-2">
                          <input
                            type="text"
                            className="form-control p-2"
                            id="exampleInputEmail"
                            placeholder="Username"
                            name="username"
                            onChange={handleInput}
                          />
                          {errors.username && (
                            <span className="text-danger">
                              {errors.username}
                            </span>
                          )}
                        </div>
                        <div className="form-group p-2">
                          <input
                            type="password"
                            className="form-control p-2"
                            id="exampleInputPassword"
                            placeholder="Password"
                            name="password"
                            onChange={handleInput}
                          />
                          {errors.password && (
                            <span className="text-danger">
                              {errors.password}
                            </span>
                          )}
                        </div>

                        <div className="form-group p-2">
                          <button
                            type="submit"
                            className="btn btn-primary form-control p-2"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
