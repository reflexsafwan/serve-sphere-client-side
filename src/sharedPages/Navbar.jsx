import React, { useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo1.png";
import ThemeToggle from "../components/ThemeToggle";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#ED4C67] text-white px-3 py-2 rounded-lg  "
            : "hover:bg-[#ED4C67] hover:text-white px-3 py-2 rounded-lg "
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#ED4C67] text-white px-3 py-2 rounded-lg  "
            : "hover:bg-[#ED4C67] hover:text-white px-3 py-2 rounded-lg "
        }
        to={"/all-volunteer-need-posts"}
      >
        All Volunteer Posts
      </NavLink>

      {user && (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#ED4C67] text-white px-3 py-2 rounded-lg  "
              : "hover:bg-[#ED4C67] hover:text-white px-3 py-2 rounded-lg "
          }
          to={"/my-volunteer-need-post"}
        >
          My Volulnteer Need Posts
        </NavLink>
      )}
      {user && (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#ED4C67] text-white px-3 py-2 rounded-lg  "
              : "hover:bg-[#ED4C67] hover:text-white px-3 py-2 rounded-lg "
          }
          to={"/my-volunteer-request"}
        >
          My Volunteer Request
        </NavLink>
      )}
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
            <h2 className="md:text-xl md:font-bold">ServeSphere</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 text-xl">
            {links}
          </ul>
        </div>

        <div className="navbar-end">
          <ThemeToggle></ThemeToggle>
          {!user && (
            <div className="ml-2">
              <ul className="flex gap-4">
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
              </ul>
            </div>
          )}
          {user && (
            <div className="dropdown dropdown-hover dropdown-bottom dropdown-end ml-2">
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
                <Link
                  to={"/add-volunteer"}
                  className=" block text-center p-2 hover:bg-blue-500 rounded"
                >
                  Add Volunteer need Post
                </Link>
                <Link
                  to={"/manage-my-post"}
                  className=" block text-center p-2 mb-1  hover:bg-blue-500 rounded"
                >
                  Manage My Post
                </Link>
                <li>
                  <button
                    onClick={logOut}
                    className="bg-gray-400 block text-center hover:bg-red-500"
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
