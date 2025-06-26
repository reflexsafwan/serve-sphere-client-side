import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../components/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddVolunteerPost from "../pages/AddVolunteerPost";
import axios from "axios";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts></RootLayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        // loader: () => fetch("http://localhost:3000/all-volunteer-Need"),
        loader: ()=>axios(`${import.meta.env.VITE_API_URL}/all-volunteer-Need`)
      },

      {
        path: "/add-volunteer",
        element: <AddVolunteerPost></AddVolunteerPost>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
