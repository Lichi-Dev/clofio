import React from "react";
import "./index.css";
import logo from "../../assets/logo.png";
import { BiSolidCube } from "react-icons/bi";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo-link-container">
        <img src={logo} className="logo" />
        <BiSolidCube className="cube" />
        <BiSolidCube className="cube" />
        <BiSolidCube className="cube" />
        <BiSolidCube className="cube" />
        <BiSolidCube className="cube" />
        <BiSolidCube className="cube" />
      </div>
      <div className="profile-logo">
        <h1 className="profile-name ">DK</h1>
      </div>
    </div>
  );
}
