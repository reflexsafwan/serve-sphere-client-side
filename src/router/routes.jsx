import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../components/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddVolunteerPost from "../pages/AddVolunteerPost";
import axios from "axios";
import SingleVolunteerNeed from "../components/SingleVolunteerNeed";
import SingleVolunteerDetails from "../pages/singleVolunteerDetails";
import BecameVolunteer from "../pages/BecameVolunteer";
import MyVolunteerNeedPosts from "../pages/MyVolunteerNeedPosts";
import UpdateVolunteerNeedPost from "../pages/UpdateVolunteerNeedPost";
import MyVolunteerRequest from "../pages/MyVolunteerRequest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts></RootLayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        // loader: () => fetch("http://localhost:3000/all-volunteer-Need"),
        loader: () =>
          axios(`${import.meta.env.VITE_API_URL}/all-volunteer-Need`),
      },

      {
        path: "/add-volunteer",
        element: <AddVolunteerPost></AddVolunteerPost>,
      },
      {
        path: "/all-volunteer-Need/:id",
        loader: ({ params }) =>
          axios(
            `${import.meta.env.VITE_API_URL}/all-volunteer-Need/${params.id}`
          ),
        element: <SingleVolunteerDetails></SingleVolunteerDetails>,
      },
      {
        path: "/became-volunteer/:id",
        loader: ({ params }) =>
          axios(
            `${import.meta.env.VITE_API_URL}/all-volunteer-Need/${params.id}`
          ),
        element: <BecameVolunteer></BecameVolunteer>,
      },
      {
        path: "/my-volunteer-need-post/",
        element: <MyVolunteerNeedPosts></MyVolunteerNeedPosts>,
      },
      {
        path: "/update-volunteer-need-post/:id",
        loader: ({ params }) =>
          axios(
            `${import.meta.env.VITE_API_URL}/all-volunteer-Need/${params.id}`
          ),
        element: <UpdateVolunteerNeedPost></UpdateVolunteerNeedPost>,
      },
      {
        path: "/my-volunteer-request",
        element: <MyVolunteerRequest></MyVolunteerRequest>,
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
