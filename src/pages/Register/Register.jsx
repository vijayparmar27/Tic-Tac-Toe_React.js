import React, { useState } from "react";
import "./register.css";
import image from "../../images/game1.jpg";
import { useSelector, useDispatch } from "react-redux";
import { registerApi } from "../../store/Access/access";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const registerFormSubmit = (e) => {
    e.preventDefault();
    dispatch(registerApi({
      "fullName": fullname,
      "userName": username,
      "email": email,
      "password": password,
      "confPassword": confirmpassword
    }))
  
  };

  return (
    <>
      <div class="page-content">
        <div class="form-v2-content">
          <div class="form-left">
            <img src={image} alt="form" />
            <div class="text-1">
              <p>
                Tic-Tac-Toe<span>Game</span>
              </p>
            </div>
            <div class="text-2">
              <p>
                <span>Play</span>
              </p>
            </div>
          </div>
          <form class="form-detail" action="#" method="post" id="myform">
            <h2>Registration Form</h2>
            <div class="form-row">
              <label for="full-name">Full Name:</label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                class="input-text"
                placeholder="ex: Lindsey Wilson"
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div class="form-row">
              <label for="full-name">username:</label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                class="input-text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div class="form-row">
              <label for="your_email">Your Email:</label>
              <input
                type="text"
                name="your_email"
                id="your_email"
                class="input-text"
                required
                pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-row">
              <label for="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                class="input-text"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="form-row">
              <label for="comfirm-password">Confirm Password:</label>
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                class="input-text"
                required
                onChange={(e) => setConfirmpassword(e.target.value)}
              />
            </div>
            <div class="form-checkbox">
              <label class="container">
                <p>
                  By signing up, you agree to the{" "}
                  <a href="#" class="text">
                    Play Term of Service
                  </a>
                </p>
                <input type="checkbox" name="agree" id="agree" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="form-row-last">
              <input
                type="submit"
                name="register"
                class="register"
                value="Register"
                onClick={(e) => registerFormSubmit(e)}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
