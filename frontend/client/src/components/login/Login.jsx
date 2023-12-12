import React, { useState, useEffect } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //   useEffect(() => {
  //     loginUser();
  //   }, []);

  const loginUser = () => {
    axios
      .post("http://localhost:4000/api/login/addUser", {
        LoginUsername: loginUsername,
        LoginPassword: loginPassword,
      })
      .then((response) => {
        console.log(response);
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
                      <form action="" className="user">
                        <div className="form-group p-2">
                          <input
                            type="text"
                            className="form-control p-2"
                            id="exampleInputEmail"
                            placeholder="Username"
                            onChange={(e) => {
                              setLoginUsername(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group p-2">
                          <input
                            type="password"
                            className="form-control p-2"
                            id="exampleInputPassword"
                            placeholder="Password"
                            onChange={(e) => {
                              setLoginPassword(e.target.value);
                            }}
                          />
                        </div>

                        <div className="form-group p-2">
                          <button
                            type="submit"
                            className="btn btn-primary form-control p-2"
                            onClick={loginUser()}
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
