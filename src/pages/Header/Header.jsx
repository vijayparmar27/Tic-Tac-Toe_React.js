import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="navbar">
      <div className="upsidenavbar">
        <div className="profile">
          <div className="profile-pic"></div>
          <div className="profile-pic-name">Vijay Parmar</div>
          <div className="profile-edit">
            <div className="profile-edit-btn">Edit Profile</div>
          </div>
        </div>
        <div className="user-game-details">
              balance : 20
        </div>
        <div className="user-game-details-win">
              WIN : 20
        </div>
        <div className="user-game-details-loss">
              LOSS : 20
        </div>
        <div className="user-game-details-tie">
              TIE : 20
        </div>
        <div className="lobby">
          <NavLink
            to="/lobby"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-dark" : ""
            }
            style={{ textDecoration: "none" }}
          >
            <span style={
              {color: "white"}
            }> Enter Lobby</span>
          </NavLink>
        </div>
      </div>
      <div className="downsidenavbar">
        <div className="logout">
          <div className="logout-btn">Logout</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
