import React from "react";
import Navbar from "../sharedPages/Navbar1";
import { Outlet } from "react-router";
import Nav from "../sharedPages/Navbar";

const RootLayouts = () => {
  return (
    <div>
     
      <div>
        <Nav></Nav>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayouts;
