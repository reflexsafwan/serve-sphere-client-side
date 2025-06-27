import React, { useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import { Link } from "react-router";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <Link to={"/"}>Home</Link>
     {user &&  <Link to={"/add-volunteer"}>Add Volunteer</Link>}
      {user && <Link to={"my-profile"}>MY Profile</Link>}
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm container mx-auto mt-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <img className="w-8 rounded-full" src={logo} alt="" />
            <h2 className="text-xl font-bold">ServeSphere</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 text-xl">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {!user && (
            <div>
              <ul>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
              </ul>
            </div>
          )}
          {user && (
            <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className=" m-1">
                <div
                  title={user?.displayName}
                  className="w-10 rounded-full  text-xl font-bold  mr-12 md:mr-0 "
                >
                  <img
                    className="rounded-full"
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <h2 className="text-xl font-bold"> {user?.displayName}</h2>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="bg-gray-400 block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
