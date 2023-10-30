import React, { useState, CSSProperties } from "react";
import {
  AiOutlineLoading,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../Images/logo.png";
import { LoginUser } from "../../Api";
import { SpinnerRoundOutlined, SpinnerCircularFixed } from "spinners-react";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleEyeClick = () => {
    setShowPassword((bool) => !bool);
  };

  const HandleLogin = () => {
    setLoad(true);
    LoginUser(Email, Password).then((res) => {
      console.log(res);
      if (res.status === "success") {
        localStorage.setItem("user", JSON.stringify(res.data));
        setLoad(false);
        toast("Login Successful");
        navigate("/Dashboard");
        setEmail("");
        setPassword("");
      } else {
        setLoad(false);
        toast("Incorrect Details");
      }
    });
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "rgba(20, 19, 50, 1)",
      }}
    >
      <ToastContainer />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12" style={{ marginTop: 130 }}>
            <div class="loginHead">
              <div>
                <h4
                  style={{
                    color: "rgba(255, 255, 255, 1)",
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingTop: 20,
                  }}
                >
                  <img style={{ height: 40 }} src={Logo}></img>
                </h4>
              </div>
              <div
                style={{
                  textAlign: "center",
                  width: 300,
                  margin: "auto",
                  marginTop: 30,
                  padding: 10,
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
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    value={Password}
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
                {showPassword ? (
                  <AiFillEye
                    style={{
                      position: "relative",
                      bottom: 35,
                      left: 120,
                    }}
                    onClick={handleEyeClick}
                  />
                ) : (
                  <AiFillEyeInvisible
                    style={{
                      position: "relative",
                      bottom: 35,
                      left: 120,
                    }}
                    onClick={handleEyeClick}
                  />
                )}

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
                  style={{
                    width: "100%",
                    borderRadius: 5,
                    fontWeight: "bold",
                    height: 45,
                  }}
                  className="btn btn-primary mt-3"
                  onClick={() => HandleLogin()}
                >
                  {load ? (
                    <SpinnerCircularFixed
                      size={30}
                      thickness={200}
                      speed={133}
                      color="rgba(172, 57, 59, 1)"
                      secondaryColor="rgba(57, 172, 102, 1)"
                    />
                  ) : (
                    <p>Login</p>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
