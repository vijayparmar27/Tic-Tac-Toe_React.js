import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { useSelector } from "react-redux";
import { userData } from "../../store/Access/access";
import { useSocket } from "../../store/socket/socket";

function Header() {
  const userinfo = useSelector(userData);
  const connected = useSelector((state) => state.socket.connected);

  const { connect, sendMessage,disconnect } = useSocket();
  useEffect(() => {
    (async () => {
      // await disconnect();
      await connect();
      setTimeout(async () => {

        console.log(`-------------- setTimeout :: connected  `, connected)


        await sendMessage({message : "hiii"});
      }, 5000);
    })();
  }, []);
  // console.log(`--------- userinfo :: `, userinfo);
  return (
    <div className="navbar">
      <div className="upsidenavbar">
        <div className="profile">
          <div className="profile-pic"></div>
          <div className="profile-pic-name">{"userinfo.fullName"}</div>
          <div className="profile-edit">
            <div className="profile-edit-btn">Edit Profile</div>
          </div>
        </div>
        <div className="user-game-details">balance : {"userinfo.amount"}</div>
        <div className="user-game-details-win">WIN : {"userinfo.win"}</div>
        <div className="user-game-details-loss">LOSS : {"userinfo.loss"}</div>
        <div className="user-game-details-tie">TIE : {"userinfo.tie"}</div>
        <div className="lobby">
          <NavLink
            to="/lobby"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-dark" : ""
            }
            style={{ textDecoration: "none" }}
          >
            <span style={{ color: "white" }}> Enter Lobby</span>
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
