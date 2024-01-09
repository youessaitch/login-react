import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./LoginForm.css";
import { MdDriveFileRenameOutline } from "react-icons/md";

const LoginForm = () => {
  const [action, setAction] = useState("Login");

  return (
    <div>
      <div className="container">
        <form action="">
          <h1>{action}</h1>

          {action === "Login" ? (
            <div>
              <div className="input-box">
                <FaUser className="icon" />
                <input type="text" placeholder="Username" required />
              </div>
              <div className="input-box">
                <FaLock className="icon" />
                <input type="password" placeholder="Password" required />
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#">Forgot password?</a>
              </div>

              <button
                type="submit"
                onClick={() => {
                  setAction("Login");
                }}
              >
                Login
              </button>
              <div className="register-link">
                <p>
                  Don't have an account?{" "}
                  <a href="#" onClick={() => setAction("Sign up")}>
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="input-box">
                <MdDriveFileRenameOutline className="icon" />
                <input type="text" placeholder="Name" required />
              </div>
              <div className="input-box">
                <MdEmail className="icon" />
                <input type="text" placeholder="Email Id" required />
              </div>
              <div className="input-box">
                <FaUser className="icon" />
                <input type="text" placeholder="Create username" required />
              </div>
              <div className="input-box">
                <FaLock className="icon" />
                <input type="password" placeholder="Create Password" required />
              </div>
              <div className="input-box">
                <FaLock className="icon" />
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                />
              </div>

              <button
                type="submit"
                onClick={() => {
                  setAction("Sign up");
                }}
              >
                Sign up
              </button>
              <div className="register-link">
                <p>
                  Already have an account?{" "}
                  <a href="#" onClick={() => setAction("Login")}>
                    Login
                  </a>
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
