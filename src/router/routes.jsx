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
import ManageMyPost from "../pages/ManageMyPost";
import PrivateRoute from "./PrivateRoute";
import Loading from "../components/Loading";
import AllVolunteerNeed from "../components/AllVolunteerNeed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts></RootLayouts>,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        // loader: () => fetch("http://localhost:3000/all-volunteer-Need"),
        // loader: () =>
        //   axios(`${import.meta.env.VITE_API_URL}/all-volunteer-Need`),
      },
      {
        path: "/all-volunteer-need-posts",
        // loader: () =>
        //   axios(`${import.meta.env.VITE_API_URL}/all-volunteer-Need`),
        element: <AllVolunteerNeed></AllVolunteerNeed>,
      },
  
      {
        path: "/add-volunteer",
        element: (
          <PrivateRoute>
            <AddVolunteerPost></AddVolunteerPost>
          </PrivateRoute>
        ),
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
        path: "/manage-my-post",
        element: (
          <PrivateRoute>
            <ManageMyPost></ManageMyPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/became-volunteer/:id",
        loader: ({ params }) =>
          axios(
            `${import.meta.env.VITE_API_URL}/all-volunteer-Need/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <BecameVolunteer></BecameVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-volunteer-need-post/",
        element: (
          <PrivateRoute>
            <MyVolunteerNeedPosts></MyVolunteerNeedPosts>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-volunteer-need-post/:id",
        loader: ({ params }) =>
          axios(
            `${import.meta.env.VITE_API_URL}/all-volunteer-Need/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateVolunteerNeedPost></UpdateVolunteerNeedPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-volunteer-request",
        element: (
          <PrivateRoute>
            <MyVolunteerRequest></MyVolunteerRequest>
          </PrivateRoute>
        ),
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
