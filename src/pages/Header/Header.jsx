import React, { useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../store/Access/access";
import { sendEvent, connectSocket } from "../../store/socket/socket";

function Header() {
  const dispatch = useDispatch();
  const userinfo = useSelector(userData);
  const connected = useSelector((state) => state.socket.isConnected);
  const navigate = useNavigate();

  const effectHasRun = useRef(false);

  useEffect(() => {
    if (!effectHasRun.current) {
      (async () => {
        dispatch(connectSocket());
        effectHasRun.current = true;
      })();
    }
  }, []);

  const click = () => {
    console.log(`---------------`)
    navigate("/lobby");
  };

  // console.log(`--------- userinfo :: `, userinfo);
  return (
    <div className="navbar">
      <div className="upsidenavbar">
        <div className="profile">
          <div className="profile-pic"></div>
          <div className="profile-pic-name">{userinfo.fullName}</div>
          <div className="profile-edit">
            <div className="profile-edit-btn">Edit Profile</div>
          </div>
        </div>
        <div className="user-game-details">balance : {userinfo.amount}</div>
        <div className="user-game-details-win">WIN : {userinfo.win}</div>
        <div className="user-game-details-loss">LOSS : {userinfo.loss}</div>
        <div className="user-game-details-tie">TIE : {userinfo.tie}</div>
        <div className="lobby" onClick={() => click()}>
          <Link
            to="/lobby"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-dark" : ""
            }
            style={{ textDecoration: "none" }}
          >
            <span style={{ color: "white" }}> Enter Lobby</span>
          </Link>
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
