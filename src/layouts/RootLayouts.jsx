
import Navbar from "../sharedPages/Navbar";
import { Outlet } from "react-router";


const RootLayouts = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayouts;
