import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  AiOutlineLoading,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()

  const handleEyeClick = () => {
    setShowPassword((bool) => !bool);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "rgba(20, 19, 50, 1)",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-12" style={{ marginTop: 50 }}>
            <div
            class="loginHead"
            >
              <div>
                <h4
                  style={{
                    color: "rgba(255, 255, 255, 1)",
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingTop: 20,
                  }}
                >
                  Hello again
                </h4>
              </div>
              <div
                style={{
                  textAlign: "center",
                  width: 300,
                  margin: "auto",
                  marginTop: 30,
                  padding:10
                }}
              >
                <input
                  style={{
                    width: "100%",
                    fontWeight: "500",
                    fontSize: 14,
                    padding: 8,
                    borderRadius: 6,
                  }}
                  placeholder="username"
                ></input>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    value={password}
                    minLength={8}
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    style={{
                      width: "100%",
                      fontWeight: "500",
                      fontSize: 14,
                      padding: 8,
                      borderRadius: 6,
                      marginTop: 15,
                    }}
                  />
                </div>
                <AiFillEye
                  style={{
                    position: "relative",
                    bottom: 35,
                    left: 130,
                  }}
                  onClick={handleEyeClick}
                />
                <p
                  style={{
                    color: "rgba(99, 89, 233, 1)",
                    textAlign: "left",
                    fontSize: 16,
                    marginTop: -10,
                    marginLeft: 4,
                    fontWeight: "500",
                  }}
                >
                  Forget password
                </p>
                <p
                  style={{ width: "100%", borderRadius: 5, fontWeight: "bold" }}
                  className="btn btn-primary mt-3"
                  onClick={()=>navigate('/Dashboard')}
                >
                  Log in
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 15,
                  }}
                >
                  <div
                    style={{
                      width: 100,
                      height: 1,
                      backgroundColor: "#fff",
                      marginTop: 12,
                    }}
                  ></div>
                  <p
                    style={{
                      color: "#fff",
                    }}
                  >
                    or
                  </p>
                  <div
                    style={{
                      width: 100,
                      height: 1,
                      backgroundColor: "#fff",
                      marginTop: 12,
                    }}
                  ></div>
                </div>
                <div
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    height: 35,
                    width: 35,
                    margin: "auto",
                  }}
                >
                  <i>
                    <FcGoogle style={{ height: 35 }}></FcGoogle>
                  </i>
                </div>
                <div className="mt-3">
                  <span
                    style={{
                      color: "#fff",
                      fontSize:16,
                      fontWeight:"400"
                    }}
                  >
                    Dont't have an account yet?
                  </span>
                  <span style={{ color: "rgba(99, 89, 233, 1)" ,fontSize:"16px",fontWeight:"bold",marginLeft:5,cursor:"pointer"}} onClick={()=>navigate('/Signup')}>Sign up</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
