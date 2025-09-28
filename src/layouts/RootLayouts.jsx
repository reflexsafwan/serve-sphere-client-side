
import Navbar from "../sharedPages/Navbar";
import { Outlet } from "react-router";


const RootLayouts = () => {
  return (
    <div>
      <div className="sticky top-0 z-100">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayouts;
