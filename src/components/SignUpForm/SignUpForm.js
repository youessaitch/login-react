import React from "react";
import { MdEmail } from "react-icons/md";
import { FaUser, FaLock } from "react-icons/fa";

const SignUpForm = () => {
  return (
    <div>
      <div className="container">
        <form action="">
          <h1>Sign up</h1>
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
            <input type="text" placeholder="Create Password" required />
          </div>
          <div className="input-box">
            <FaLock className="icon" />
            <input type="text" placeholder="Confirm password" required />
          </div>

          <button type="submit">Sign up</button>
          <div className="register-link">
            <p>
              Already have an account? <a href="#">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
