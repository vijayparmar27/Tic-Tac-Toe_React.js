import React, { useEffect } from "react";
import "./login.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../store/Access/login";
function Login() {
//   const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(register())
  });

  return (
    <>
      <div class="login-form">
        <div class="login-title">
          <p>Login</p>
        </div>
        <form>
          <div class="email-username-input">
            <input type="text" placeholder="Email Or User Name" />
          </div>

          <div class="password-input">
            <input type="password" placeholder="Password" />
          </div>

          <div class="forgot-password-div">
            <div>
              <span>Forgot Password</span>
            </div>
          </div>

          <div class="login-btn">
            <button class="login-submit-btn">Login</button>
          </div>

          <div class="register-page-link">
            <p>
              If haven't acccount{" "}
              <span>
                <NavLink
                  to="/register"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Register
                </NavLink>
              </span>
              {` here...`}
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
