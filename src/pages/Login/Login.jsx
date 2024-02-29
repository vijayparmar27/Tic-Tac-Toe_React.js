import React, { useEffect, useState } from "react";
import "./login.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginApi } from "../../store/Access/login";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchUserData())
  });

  const loginSubmitBtn = (e) => {
    e.preventDefault();
    console.log(`--------- username :: `, username);
    console.log(`--------- password :: `, password);
    dispatch(
      loginApi({
        uniqueId: username,
        password: password,
      })
    );
  };

  return (
    <>
      <div className="login-form">
        <div className="login-title">
          <p>Login</p>
        </div>
        <form>
          <div className="email-username-input">
            <input
              type="text"
              placeholder="Email Or User Name"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="password-input">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="forgot-password-div">
            <div>
              <span>Forgot Password</span>
            </div>
          </div>

          <div className="login-btn">
            <button onClick={(e) => loginSubmitBtn(e)}>Login</button>
          </div>

          <div className="register-page-link">
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
