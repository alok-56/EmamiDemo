import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  AiOutlineLoading,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import "./Login.css";
import { useNavigate, useNavigation } from "react-router-dom";

function Loginform() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

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
    navigation("/Dashboard");
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      <div className="login-container">
        <center>
          <form>
            <h2 className="login-header">Hello Again</h2>
            <div>
              <input
                className="form-group"
                id="username"
                placeholder="Enter your username"
                type="text"
              />
            </div>
            <div>
              <div style={{ display: "flex", position: "relative" }}>
                <input
                  value={password}
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="form-password"
                />
                {showPassword ? (
                  <AiFillEye
                    className="password_eye"
                    onClick={handleEyeClick}
                  />
                ) : (
                  <AiFillEyeInvisible
                    className="password_eye"
                    onClick={handleEyeClick}
                  />
                )}
              </div>

              <div className="forgot-password">Forgot your password?</div>
            </div>

            <button
              type="submit"
              className="login-button"
              onClick={() => handleLogin()}
            >
              Login
            </button>

            {/* <div>
              <button className="google-login">
                <i>
                  <FcGoogle></FcGoogle>
                </i>
              </button>
            </div> */}
            <div className="or-divider">
              <hr className="divider" />
              <span className="or">or</span>
              <hr className="divider" />
            </div>
            <div className="signup-link">
              Don't have an account yet? <a href="#">Sign up</a>
            </div>
          </form>
        </center>
      </div>
    </div>
  );
}

export default Loginform;
